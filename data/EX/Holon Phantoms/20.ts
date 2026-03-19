import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Blaziken",
		fr: "Brasegali",
		de: "Lohgock"
	},

	illustrator: "Hiromichi Sugiyama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		257,
	],

	hp: 100,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Combusken",
		fr: "Galifeu"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Combustion",
				fr: "Fournaise",
				de: "Glühen"
			},

			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Blaze Kick",
				fr: "Pied Brûleur",
				de: "Feuerfeger"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 damage plus 20 more damage. If tails, the Defending Pokémon is now Burned.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires. Si c'est pile, le Pokémon Défenseur est maintenant Brûlé.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 40 Schadenspunkte plus 20 weitere Schadenspunkte zu. Bei \"Zahl\" ist das Verteidigende Pokémon jetzt verbrannt."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276990,
		tcgplayer: 83907
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
	]
}

export default card
