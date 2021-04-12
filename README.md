This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# React Query

React Query is often described as the missing data-fetching library for React, but in more technical terms, it makes **fetching, caching, synchronizing and updating server state** in your React applications a breeze.

## Features

### Declarative & Automatic

Writing your data fetching logic by hand is over. Tell React Query where to get your data and how fresh you need it to be and the rest is automatic. React Query handles caching, background updates and stale data out of the box with zero-configuration.

### Simple & Familiar

If you know how to work with promises or async/await, then you already know how to use React Query. There's no global state to manage, reducers, normalization systems or heavy configurations to understand. Simply pass a function that resolves your data (or throws an error) and the rest is history.

### Powerful & Configurable

React Query is configurable down to each observer instance of a query with knobs and options to fit every use-case. It comes wired up with dedicated devtools, infinite-loading APIs, and first class mutation tools that make updating your data a breeze. Don't worry though, everything is pre-configured for success!

## Getting Started

First, run an `npm install` to install all the necessary dependencies.

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Purpose

This boilerplate application was put together to demonstrate some of React Query's fetching and caching capabilities in requesting data from an API. Needless to say, it excelled in both of these areas and was able to greatly improve an application's speed by having configurable options for forced rerenders, cached data time, and more.

In some cases, React Query can replace a variety of other global state managers including Redux and MobX - and for the vast majority of applications, the truly **globally accessible client state** that is left over after migrating all of your async code to React Query is usually very tiny.

The main difference, however, is that React Query is a **server-state** library that is responsible for managing asynchronous operations between your server and client. Redux, MobX, Recoil and others are **client-state** libraries that _can be used to store asynchronous data, albeit inefficiently when compared to a tool like React Query._

## Dependencies

- Next.js
- Chakra UI
- Emotion
- Framer Motion
- React Query
