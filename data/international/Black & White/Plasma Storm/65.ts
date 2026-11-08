import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Trubbish",
		'fr-fr': "Miamiasme",
		'es-es': "Trubbish",
		'it-it': "Trubbish",
		'pt-br': "Trubbish",
		'de-de': "Unratütox"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		568,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Tool Drop",
				'fr-fr': "Chute d’Outils",
			},
			effect: {
				'en-us': "Does 20 damage for each Pokémon Tool card attached to Pokémon in play (both yours and your opponent's).",
				'fr-fr': "Inflige 20 dégâts pour chaque carte Outil Pokémon attachée aux Pokémon en jeu (les vôtres et ceux de votre adversaire).",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Wanting more garbage, they follow people who litter. They always belch poison gas.",
	},

	thirdParty: {
		cardmarket: 280803,
		tcgplayer: 90069
	}
}

export default card
