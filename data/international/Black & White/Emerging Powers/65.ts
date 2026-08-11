import { Card } from 'models/database/card'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		'en-us': "Liepard",
		'fr-fr': "Léopardus",
		'es-es': "Liepard",
		'it-it': "Liepard",
		'pt-br': "Liepard",
		'de-de': "Kleoparda"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		510,
	],

	hp: 80,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Purrloin",
		'fr-fr': "Chacripan",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Feint Attack",
				'fr-fr': "Feinte",
			},
			effect: {
				'en-us': "Does 30 damage to 1 of your opponent's Pokémon. This attack's damage isn't affected by Weakness, Resistance, or any other effects on that Pokémon.",
				'fr-fr': "Inflige 30 dégâts à 1 des Pokémon de votre adversaire. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur le Pokémon ciblé.",
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Claw Rend",
				'fr-fr': "Déchirure",
			},
			effect: {
				'en-us': "If the Defending Pokémon already has any damage counters on it, this attack does 30 more damage.",
				'fr-fr': "Si le Pokémon Défenseur a déjà des marqueurs de dégâts, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "These Pokémon vanish and appear unexpectedly. Many Trainers are drawn to their beautiful form and fur.",
	},

	thirdParty: {
		cardmarket: 280030,
		tcgplayer: 86726
	}
}

export default card
