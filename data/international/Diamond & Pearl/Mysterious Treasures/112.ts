import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Lake Boundary",
		'fr-fr': "Berge du lac",
		'de-de': "Seeufer"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		'en-us': "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card. Apply Weakness for each Pokémon (both yours and your opponent's) as ×2 instead.",
		'fr-fr': "Multipliez la Faiblesse de chaque Pokémon par 2 (les vôtres et ceux de votre adversaire).",
		'de-de': "Wenn Pokémon (deine und die deines Gegners) eine Schwäche haben, dann wird der entsprechende Schaden nicht um den Schwäche-Wert dieses Pokémon erhöht, sondern verdoppelt.",
	},

	thirdParty: {
		cardmarket: 277741,
		tcgplayer: 86586
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "normal",
			stamp: ["jason-klaczynski"]
		}
	]
}

export default card
