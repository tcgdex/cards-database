import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Pidgeot",
		fr: "Roucarnage",
		de: "Tauboss"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		18,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Pidgeotto",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wing Attack",
				fr: "Cru-aile",
				de: "Flügelschlag"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hurricane",
				fr: "Ouragan",
				de: "Hurrikan"
			},
			effect: {
				en: "Unless this attack Knocks Out the Defending Pokémon, return the Defending Pokémon and all cards attached to it to your opponent's hand.",
				fr: "À moins que cette attaque ne mette le Pokémon Défenseur K.O., renvoyez le Pokémon Défenseur et toutes les cartes qui lui sont attachées dans la main de votre adversaire.",
				de: "Falls dieser Angriff den verteidigenden Pokémon nicht kampfunfähig macht, gib den verteidigenden Pokémon und alle daraufabgelegten Karten deinem Gegner auf die Hand zurück."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "Il chasse en surveillant la surface de l'eau et en plongeant pour attraper des proies faciles."
	},

	thirdParty: {
		cardmarket: 273805,
		tcgplayer: 106986
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"]
		}
	],
}

export default card
