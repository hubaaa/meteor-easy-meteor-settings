describe 'EasyMeteorSettings', ->
  describe 'getSetting', ->
    it 'returns the setting', ->
      settings = new practical.EasyMeteorSettings
        loglevel: 'debug'

      expect(settings.getSetting('loglevel')).to.equal 'debug'

    it "returns the public setting, if the private one doesn't exist", ->
      settings = new practical.EasyMeteorSettings
        public:
          loglevel: 'trace'

      expect(settings.getSetting('loglevel')).to.equal 'trace'

    it "returns the defaultValue, if the setting doesn't exist", ->
      settings = new practical.EasyMeteorSettings()

      expect(settings.getSetting('loglevel', 'info')).to.equal 'info'

    it 'returns a deep setting', ->
      settings = new practical.EasyMeteorSettings
        serviceConfigurations:
          github:
            apiKey: 'xxx'

      expect(settings.getSetting('serviceConfigurations.github.apiKey')).to.equal 'xxx'

  describe 'getPrivateSetting', ->
    it 'returns the setting', ->

      settingsObject =
        serviceConfigurations:
          github:
            apiKey: 'xxx'
            secret: 'yyy'

      settings = new practical.EasyMeteorSettings settingsObject

      expect(settings.getSetting('serviceConfigurations')).to.deep.equal settingsObject.serviceConfigurations
