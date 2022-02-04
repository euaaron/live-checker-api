# LiveAPI

A really compact and simple API that verifies if a channel is Live on YouTube or not.

It returns a json object with:

- **url** : a string with the url to the LiveStream video or to the channel
- **isLive** : a boolean that says if the channel is current live or not

> To use it, access `/youtube?type=user&id=username` or `/youtube?type=channel&id=channelName`
