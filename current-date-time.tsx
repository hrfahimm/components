 const time = now.toLocaleTimeString("en-BD", { hour: '2-digit', minute: '2-digit' });

    const date = (new Intl.DateTimeFormat("en-BD", { dateStyle: "full" })).format(now)




call dynamicly date and time