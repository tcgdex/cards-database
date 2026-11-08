import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Miasma Valley",
		'fr-fr': "Vallée miasme",
		'de-de': "Gifthauchtal"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card. Whenever any player puts a Basic Pokémon (excluding Grass or Psychic Pokémon) from his or her hand onto his or her Bench, put 2 damage counters on that Pokémon.",
		'fr-fr': "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu. Si une autre carte comportant le même nom est en jeu, vous ne pouvez pas jouer cette carte.",
		'de-de': "Whenever any player puts a Basic Pokémon (excluding  or  Pokémon) from his or her hand onto his or her Bench, put 2 damage counters on that Pokémon."
	},

	trainerType: "Stadium",

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 87435,
				cardmarket: 278532
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278532,
				tcgplayer: 87435
			}
		}
	],

	retreat: 0
}

export default card
