# nodejs writable-stream

# what is writable stream

Writable streams must implement two functions: write and end. When you write data to a writable stream it will return either true or false. true means cool, keep sending more data with write and false means Uh-oh I am backed up -- don't write any more data until I emit drain.

This is a form of back pressure which is a very powerful feature as it lets stream communicate "upstream" to their writers. Most of the back pressure related APIs are advisory so there is sort of a gentlemens agreement to honor requests to start or stop writing as timely as possible. However, since they are advisory it means a writable stream may still receive write calls after it returns false.



## contact

email: rajveer.gang@gmail.com

fb: https://www.facebook.com/radhe.n.mohan
