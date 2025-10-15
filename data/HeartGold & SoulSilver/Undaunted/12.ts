import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Drifblim",
		fr: "Grodrive",
		de: "Drifzepeli"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		426,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Drifloon",
		fr: "Baudrive",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Balloon Tackle",
				fr: "Charge Ballon",
				de: "Ballon-Tackle"
			},
			effect: {
				en: "Drifblim does 20 damage to itself.",
				fr: "Grodrive s’inflige 20 dégâts.",
				de: "Drifzepeli fügt sich selbst 20 Schadenspunkte zu."
			},
			damage: 60,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Take Away",
				fr: "Envolée",
				de: "Wegschnappen"
			},
			effect: {
				en: "Shuffle Drifblim and all cards attached to it back into your deck. Then, your opponent shuffles the Defending Pokémon and all cards attached to it into his or her deck. (You choose your new Active Pokémon first.)",
				fr: "Mélangez Grodrive et toutes les cartes qui lui sont attachées avec votre deck. Ensuite, votre adversaire mélange le Pokémon Défenseur et toutes les cartes qui lui sont attachées avec son deck. (Vous choisissez votre nouveau Pokémon Actif en premier.)",
				de: "Mische Drifzepeli und alle daran angelegten Karten zurück in dein Deck. Anschließend mischt dein Gegner das Verteidigende Pokémon und alle daran angelegten Karten zurück in sein Deck. (Du wählst dein neues Aktives Pokémon zuerst.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		en: "It can generate and release gas within its body. That’s how it can control the altitude of its drift."
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		cardmarket: 279265,
		tcgplayer: 84948
	}
}

export default card
