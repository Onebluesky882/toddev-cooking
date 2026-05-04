# Frontend Setup for Toddev-cooking

This plan details the implementation for the "Toddev-cooking" online ordering web application, following the specific architectural rules requested: separating the logic into hooks, keeping components pure, and using a `prepage` client component to orchestrate them.

## Proposed Architecture

- **`src/app/page.tsx`**: The main Server Component. It will simply import and render the `<HomePrepage />` component.
- **`src/prepage/`**: Contains the client-side page orchestrators. These components will be marked with `"use client"`. They will use the custom hooks from the `logic` folder to get state and pass it down to the pure components.
- **`src/components/`**: Contains the pure UI components (e.g., `Header`, `ProductCard`, `Cart`). These will only receive props and emit events (no internal business logic).
- **`src/logic/`**: Contains custom hooks (e.g., `useProducts`, `useCart`) that handle the state, data fetching, and business logic.

## User Review Required

> [!IMPORTANT]
> The design will use standard CSS or TailwindCSS depending on the existing setup (Tailwind appears to be present in `page.tsx`). I will use an elegant, modern e-commerce aesthetic for "Toddev-cooking" (e.g., warm colors suitable for cooking/food, glassmorphism, smooth animations).
> 
> Are you okay with using the existing Tailwind CSS setup to style the pure components, or would you prefer plain Vanilla CSS?

## Proposed Changes

### Logic Components (Hooks)

#### [NEW] `src/logic/useProducts.ts`
Custom hook to provide a static list of cooking products (e.g., premium utensils, ingredients) and categories.

#### [NEW] `src/logic/useCart.ts`
Custom hook to manage the shopping cart state (add items, remove items, calculate total).

---

### Pure Components

#### [NEW] `src/components/Header.tsx`
A pure component for the top navigation bar, displaying the brand "Toddev-cooking" and a cart icon with the item count.

#### [NEW] `src/components/ProductCard.tsx`
A pure component to display individual product details (image, name, price) and an "Add to Cart" button.

#### [NEW] `src/components/Cart.tsx`
A pure component to display the current items in the cart and the total price.

---

### Prepage Orchestrator

#### [NEW] `src/prepage/HomePrepage.tsx`
This file will start with `"use client"`. It will import `useProducts` and `useCart` from `src/logic`, and pass the required state and functions down to the pure components (`Header`, `ProductCard`, `Cart`).

---

### App Router

#### [MODIFY] `src/app/page.tsx`
Update to clear the default Next.js template and simply import `<HomePrepage />` from `src/prepage/HomePrepage`.

## Verification Plan

### Automated Tests
- Build the Next.js app (`npm run build`) to ensure all client/server components are structured correctly and there are no type errors.

### Manual Verification
- Start the development server (`npm run dev`) and manually verify the "Toddev-cooking" storefront displays correctly.
- Ensure the cart updates when products are added.
- Ensure the separation of concerns is strictly followed (pure components do not use hooks).
