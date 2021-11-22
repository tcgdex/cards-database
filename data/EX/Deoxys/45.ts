import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Shelgon",
		fr: "Drackhaus"
	},
	illustrator: "Aya Kusube",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		372,
	],
	hp: 80,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Bagon",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Hard Protection",
				fr: "Protection dure"
			},
			effect: {
				en: "Prevent all damage done to Shelgon by attacks from your Pokémon.",
				fr: "Prévenez tous dégâts infligés à Drackhaus par des attaques de votre Pokémon."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Water",
			],
			name: {
				en: "Rock Smash",
				fr: "Éclate-roc"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage plus 10 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts plus 10 dégâts supplémentaires."
			},
			damage: "30+",

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fire",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
