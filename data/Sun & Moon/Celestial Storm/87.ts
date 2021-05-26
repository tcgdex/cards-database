import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Tyranitar",
		fr: "Tyranocif",
	},
	illustrator: "Hironobu Yoshida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		248,
	],
	hp: 170,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Pupitar",
		fr: "Ymphect",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slam",
				fr: "Souplesse",
			},
			effect: {
				en: "Flip 2 coins. This attack does 60 damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 60 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 60,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Trample",
				fr: "Bousculade",
			},
			effect: {
				en: "For each Benched Pokémon (both yours and your opponent's), flip a coin. If heads, this attack does 60 damage to that Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
				fr: "Lancez une pièce pour chaque Pokémon de Banc (les vôtres et ceux de votre adversaire). Si c’est face, cette attaque inflige 60 dégâts au Pokémon ciblé. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
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
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
