import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Raichu ex",
		fr: "Raichu ex",
		de: "Raichu-ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [26],

	hp: 100,

	stage: "Stage1",
	types: [
		"Lightning"
	],

	evolveFrom: {
		en: "Pikachu",
		fr: "Pikachu",
		de: "Pikachu"
	},

	suffix: "ex",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Dazzle Blast",
				fr: "Explosion de lumière",
				de: "Blendende Explosion"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				de: "Wirf 1 Münze. Bei „Kopf“ ist das Verteidigende Pokémon jetzt verwirrt."
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Mega Thunderbolt",
				fr: "Méga tonnerre",
				de: "Mega Donnerblitz"
			},
			effect: {
				en: "Discard all Energy cards attached to Raichu ex.",
				fr: "Défaussez toutes les cartes Énergie attachées à Raichu ex.",
				de: "Lege alle an Raichu ex angelegten Energiekarten auf deinen Ablagestapel."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 88525,
				cardmarket: 275875
			}
		},
	]
}

export default card
