import { Card } from 'models/database/card'
import Set from '../EX trainer Kit (Latias)'

const card: Card = {
	dexId: [301],
	set: Set,

	name: {
		'en-us': "Delcatty",
		'fr-fr': "Delcatty"
	},

	illustrator: "Midori Harada",
	rarity: "None",
	category: "Pokemon",
	stage: "Stage1",
	hp: 80,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Skitty",
		'fr-fr': "Skitty"
	},

	attacks: [{
		cost: [
			"Colorless",
			"Colorless"
		],
		name: {
			'en-us': "Scratch",
			'fr-fr': "Griffe"
		},
		damage: 30
	}, {
		cost: [
			"Colorless",
			"Colorless",
			"Colorless"
		],
		name: {
			'en-us': "Ultra Energy Source",
			'fr-fr': "Source d'énergie ultra"
		},
		effect: {
			'en-us': "Does 10 damage times the number of basic Energy cards attached to all of the Active Pokémon (both yours and your opponent’s).",
			'fr-fr': "Inflige 10 dégâts multipliés par le nombre de cartes Énergie attachées aux Pokémon Actifs (les vôtres et ceux de votre adversaire)."
		},
		damage: "10×"
	}],

	weaknesses: [
		{
			type: "Fighting",
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275769,
				tcgplayer: 84737
			}
		},
	],

}

export default card
