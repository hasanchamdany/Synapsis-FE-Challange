<h1 align="center">
  Synapsis Frontend Challange
</h1>
<p align="center">Synapsis Frontend Assessment Test</p><br>

<p align="center">Here for the assessment, i code webapp named Gorest that has feature for fetching data from Gorest public API that have fake data, push some users data, edit the data, and delete the data</p>

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## ⚡ Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## :pencil2: Feature

- Search User by username
- Create User
- Delete User
- Edit User
- View Posts and Comments User

## :bulb: Tech Stack

- Next JS
- Tailwindcss

## 📁 Folder Structure

📦synapsis-frontend
┣ 📂.git
┣ 📂public
┃ ┣ 📂images
┃ ┃ ┣ 📂icons
┃ ┃ ┃ ┗ 📜icons8-search-49.png
┃ ┃ ┗ 📜home-gorest.png
┃ ┣ 📜favicon.ico
┃ ┣ 📜next.svg
┃ ┣ 📜thirteen.svg
┃ ┗ 📜vercel.svg
┣ 📂src
┃ ┣ 📂components
┃ ┃ ┣ 📂Card
┃ ┃ ┃ ┣ 📜CommentCard.jsx
┃ ┃ ┃ ┗ 📜PostCard.js
┃ ┃ ┣ 📂DefaultLayout
┃ ┃ ┃ ┗ 📜DefaultLayout.jsx
┃ ┃ ┣ 📂Loading
┃ ┃ ┃ ┗ 📜Loading.jsx
┃ ┃ ┣ 📂Modal
┃ ┃ ┃ ┣ 📜AddUserModal.jsx
┃ ┃ ┃ ┣ 📜DeleteUserModal.jsx
┃ ┃ ┃ ┣ 📜EditUserModal.jsx
┃ ┃ ┃ ┗ 📜PostDetailModal.jsx
┃ ┃ ┣ 📂Navbar
┃ ┃ ┃ ┗ 📜Navbar.jsx
┃ ┃ ┣ 📂Table
┃ ┃ ┃ ┗ 📜UserTable.jsx
┃ ┃ ┗ 📂Toast
┃ ┃ ┃ ┗ 📜SuccessToast.jsx
┃ ┣ 📂hooks
┃ ┃ ┗ 📜fetcher.js
┃ ┣ 📂pages
┃ ┃ ┣ 📂api
┃ ┃ ┃ ┗ 📜hello.js
┃ ┃ ┣ 📜index.js
┃ ┃ ┣ 📜post-list.js
┃ ┃ ┣ 📜user-dashboard.js
┃ ┃ ┣ 📜_app.js
┃ ┃ ┗ 📜_document.js
┃ ┗ 📂styles
┃ ┃ ┣ 📜globals.css
┃ ┃ ┗ 📜Home.module.css
┣ 📜.eslintrc.json
┣ 📜.gitignore
┣ 📜jsconfig.json
┣ 📜next.config.js
┣ 📜package-lock.json
┣ 📜package.json
┣ 📜postcss.config.js
┣ 📜README.md
┗ 📜tailwind.config.js

## 🌐 Deploy on Vercel

##### You can view demo for this project here [Gorest Synapsis Frontend Assessment](https://gorest-synapsis-challange.vercel.app/)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
