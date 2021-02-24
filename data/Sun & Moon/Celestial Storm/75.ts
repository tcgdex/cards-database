import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Pupitar",
		fr: "Ymphect",
	},
	illustrator: "Hironobu Yoshida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		247,
	],
	hp: 80,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Larvitar",
		fr: "Embrylex",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Skull Bash",
				fr: "Coud’Krâne",
			},

			damage: 20,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
			],
			name: {
				en: "Dust Devil",
				fr: "Tempête de Sable",
			},
			effect: {
				en: "This attack does 20 damage to each non-Fighting Pokémon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 20 dégâts à chaque Pokémon qui n’est pas un Pokémon Fighting (les vôtres et ceux de votre adversaire). (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
