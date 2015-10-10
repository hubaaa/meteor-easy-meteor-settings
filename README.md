## hubaaa:easy-meteor-settings

Easily read deep values from Meteor.settings using 'a.b.c'

## API

```coffeescript

# Tries to find it in public settings first, then in private settings.
EasyMeteorSettings.getSetting(name, defaultValue)

EasyMeteorSettings.getPrivateSetting(name, defaultValue)

EasyMeteorSettings.getPublicSetting(name, defaultValue)

# Throws Meteor.Error with code 'missing-required-meteor-setting' if name is missing
# Use it in initialization code, before Meteor.startup, to make sure all your app's required settings exist,
# so that if not, server / client will crash.
# Tries to find it in public settings first.
EasyMeteorSettings.getRequiredSetting(name)

EasyMeteorSettings.getRequiredPrivateSetting(name)

EasyMeteorSettings.getRequiredPublicSetting(name)
```
