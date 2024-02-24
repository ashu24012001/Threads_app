<h1 align="center">Welcome to threads 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/threads" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/threads.svg">
  </a>
</p>

# Dashboard Development
## Install
### next-app at current directory

```sh
npm create-next-app@13.4.12 ./
```

### clerk, uploadthing, mongoose, svix

```sh
npm install @clerk/nextjs @uploadthing/react mongoose svix uploadthing
```

## Key features and usage of dashboard
### Key features

```sh
App's dashboard contains 5 sections:
1) Topbar: Contains app logo, user authentication button along with organization and logout button (for small devices).
2) Leftsidebar: Contains route for homepage, searchpage, post threads page, communities page, profile page and logout button.
3) Bottombar: This section is available for small devices (responsive). All the sections of Leftsidebar are at the bottombar and only the icons are displayed here.
4) Rightsidebar: Displays the communities sections.
5) Middle section: Displays all the threads created by particular user along with comments.
```
### Usage

```sh
When the app is opened, user needs to sign-up/sign-in using the user authentication button at the top bar. This component has been developed using Clerk and Zod for user validation. Then user needs to be onboraded. Once user provides his/her details in the onboarding page, all these details are saved in the MongoDB using updateUser function present inside user.actions file inside actions folder. Then after successful authentication, user can view other user threads at homepage and comment on their threads or create their own thread using create-thread option available at the leftsidebar. The form design for the creation of thread has been developed using inbuilt Shadcn components. Once user types the thread he/she wants to create and hits the **Post Thread** button, create thread function is invoked which is present in thread.actions file inside actions folder. Logged in user details and thread contents are passed as props to this function. Then we create a thread for a particular user in MongoDB. This data is fetched on home screen by invoking fetchPosts function present in thread.actions file.

In the search page, user can search for other users. All the users are available there. Also, UserCard component present inside components/cards has been used to render all the users. To UserCard, props for all users using fetchUsers function has been passed and it is available inside user.actions file.

Communities Page has been designed using Webhooks and Clerk tools. Whenever any user performs any operation on community, route.ts file is invoked inside webhook folder present inside api folder. route.ts file is an event listener file which listens to any event and then triggers appropriate function inside community.actions file present inside actions folder.

Profile page conatins all the user data and his/her threads. The tab design has been incorporated using the shadcn components.

Logout button is developed using Clerk's functionality.
```

# Documentation and Submission

```sh
To view the app running, please visit the link: 

https://threads-app-nine-sigma.vercel.app/

or please clone the github repo: 

https://github.com/ashu24012001/Threads_app 

and then install all the dependencies from package.json file by running the command: npm install.

Then to run the app in your local system, please type the command: npm run dev.
```

