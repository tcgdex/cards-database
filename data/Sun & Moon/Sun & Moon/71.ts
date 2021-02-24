import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Gigalith",
		fr: "Gigalithe",
	},
	illustrator: "Eske Yoshinob",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		526,
	],
	hp: 160,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Boldore",
		fr: "Géolithe",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Rock Artillery",
				fr: "Artillerie Roche",
			},
			effect: {
				en: "Discard any amount of Fighting Energy from your Pokémon. This attack does 50 damage for each card you discarded in this way.",
				fr: "Défaussez n'importe quel nombre d'Énergies Fighting de vos Pokémon. Cette attaque inflige 50 dégâts pour chaque carte défaussée de cette façon.",
			},
			damage: 50,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rock Tumble",
				fr: "Roule-Pierre",
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
