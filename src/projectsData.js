export default function projectsData() {
  return [
    {
      status: 'Demo',
      name: 'QuickPoll',
      slogan: 'Fastest and easiest way to create real-time polls.',
      description: [
        'I wanted to learn Svelte and I started this project.',
        'Writing Svelte is fun. It does most things right.',
        'I used Firebase Firestore & Auth for develop rapid prototypes.',
      ],
      techstack: ['Svelte', 'Firebase'],
      links: {
        github: 'https://github.com/alicanerdurmaz/quick-poll',
        release: {
          platformName: 'Web',
          url: 'https://quickpoll.now.sh/',
        },
      },
    },
    {
      status: 'Demo',
      name: 'Firenote',
      slogan: 'Reliable, easy to use, fast and simple note-taking application.',
      description: [
        'I optimized Firebase Firestore Database for price.',
        'I learned how to built PWA + TWA.',
        'I improved my React, CSS and Typescript skills.',
        'I realized Firestore has serious limitations, has huge bundle size and adding complexity to frontend code.',
        'Thanks to Service Worker. I manage to decrease bundle size.',
      ],
      techstack: ['React', 'Typescript', 'Firebase'],
      links: {
        github: 'https://github.com/alicanerdurmaz/react-firenote-demo',
        release: {
          platformName: 'Web',
          url: 'https://firenote.netlify.app/',
        },
      },
    },
    {
      name: 'Wstfp-gui',
      status: 'WIP',
      description: [
        'I learned how to handle highly reactive state management with performance. Thanks to React, it was easy to make.',
        'I built memory optimized virtual list for chat UI.',
        'I learned build and update Electron packages for Linux.',
        'First, we used Node.js Event System and Child Process for communication with Go backend. But, it was hard to manage ',
      ],
      slogan: 'File transfer and messaging app over a local area network.',
      techstack: ['React', 'Electron', 'Go'],
      links: {
        github: 'https://github.com/alicanerdurmaz/wsftp-gui',
      },
    },
  ]
}
