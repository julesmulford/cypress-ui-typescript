# cypress-ui-typescript

Enterprise Cypress 13 UI test framework for OrangeHRM — TypeScript, Page Object Model, Allure reporting.

## Suggested GitHub Repo Name

`cypress-ui-typescript`

## Prerequisites

- Node.js 20+
- npm 10+

## Installation

```bash
npm ci
```

## Running Tests

```bash
# All tests (headless Chrome)
npm test

# Smoke suite only
npm run test:smoke

# Regression suite only
npm run test:regression

# Interactive mode
npm run test:headed
```

## Allure Reporting

```bash
npm run allure:generate
npm run allure:open
```

## Type Check & Lint

```bash
npm run typecheck
npm run lint
npm run format:check
```

## Architecture

```
cypress/
├── support/         # Custom commands & global setup
├── pages/           # Page Object classes
├── components/      # Reusable UI components (SideMenu)
├── data/            # EmployeeBuilder + TestDataFactory
├── fixtures/        # Static JSON test data
└── e2e/             # Test specs (.cy.ts)
```

### Design Principles

| Principle | Implementation |
|-----------|----------------|
| Page Object Model | `BasePage` → `LoginPage`, `DashboardPage`, `EmployeeListPage`, `AddEmployeePage` |
| Unique test data | `EmployeeBuilder` uses `randomUUID()` suffix per run |
| Retry safety | Cypress `retries: { runMode: 2 }` |
| Failure evidence | `screenshotOnRunFailure: true`, `video: true` |
| Allure reporting | `allure-cypress` step-level reporting |
| Tag filtering | `@smoke` / `@regression` via `@cypress/grep` |
| CI/CD | GitHub Actions: typecheck → lint → smoke → regression |

## Test Coverage

| File | Tests | Tags |
|------|-------|------|
| `login.cy.ts` | 5 | smoke, regression |
| `dashboard.cy.ts` | 3 | smoke, regression |
| `navigation.cy.ts` | 4 | regression |
| `employee.cy.ts` | 5 | smoke, regression |

## Environment Variables

Copy `.env.example` to `.env` and configure:

```
APP_BASE_URL=https://opensource-demo.orangehrmlive.com
BROWSER_HEADLESS=true
```

## CI/CD

GitHub Actions workflow (`.github/workflows/ci.yml`):

1. **quality-checks** — `tsc --noEmit`, ESLint, Prettier
2. **smoke-tests** — `--env grepTags=@smoke`
3. **regression-tests** — `--env grepTags=@regression`
4. Uploads: Allure results, screenshots, videos as artifacts
