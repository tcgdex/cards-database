import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Battle Tower",
		'fr-fr': "Tour de Combat",
		'de-de': "Duellturm"
	},

	illustrator: "Wataru Kawahara",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card. Whenever any player plays any Pokémon from his or her hand to Level-Up 1 of his or her Pokémon, remove 4 damage counters from that Pokémon.",
		'fr-fr': "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu. Si une autre carte comportant le même nom est en jeu, vous ne pouvez pas jouer cette carte.",
		'de-de': "Immer wenn ein Spieler eine Pokémon-Karte von seiner Hand spielt, um ein Level-Up durchzuführen, entferne 4 Schadensmarken von diesem Pokémon."
	},

	trainerType: "Stadium",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278825,
				tcgplayer: 83742
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278825,
				tcgplayer: 83742
			}
		},
	],

}

export default card
