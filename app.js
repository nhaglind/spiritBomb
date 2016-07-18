new Vue({
  el: '#characters',
  data: {
    character: { name: '', reason: ''},
    characters: []
  },
  ready: function() {
    this.fetchCharacters();
  },
  methods: {
    fetchCharacters: function() {
      var characters = [
        {
          id: 1,
          name: 'Megaman',
          reason: 'Classic blue dude, that has always been unstoppable.',
          pLevel: 20
        },
        {
          id: 2,
          name: 'Link',
          reason: 'His passion for love never dies, Zelda is bae.',
          pLevel: 30
        },
        {
          id: 3,
          name: 'Cloud',
          reason: 'Although he has a lot of mental problems, he is one hell of a soldier.',
          pLevel: 15
        }
      ];
      this.$set('characters', characters);
    },
    addCharacter: function() {
      if(this.character.name) {
        this.characters.push(this.character);
        this.character = { name: '', reason: '' };
      }
    },
    deleteCharacter: function(index) {
      if(confirm("Are you sure you want to delete this character?")) {
        this.characters.splice(index, 1);        
      }
    }
  }
});