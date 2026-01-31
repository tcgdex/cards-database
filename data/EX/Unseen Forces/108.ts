import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Scizor ex",
		fr: "Cizayox ex",
		de: "Scherox ex"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		212,
	],

	hp: 120,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Scyther",
		fr: "Insécateur ou Insécateur ex"
	},

	suffix: "EX",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Danger Perception",
				fr: "Perception du danger",
				de: "Danger Perception"
			},
			effect: {
				en: "As long as Scizor ex's remaining HP is 60 or less, Scizor ex does 40 more damage to the Defending Pokémon (before applying Weakness and Resistance).",
				fr: "Tant qu'il reste à Cizayox ex 60 Points de vie ou moins, Cizayox ex inflige 40 dégâts supplémentaires au Pokémon Défenseur (avant application de la Faiblesse et de la Résistance).",
				de: "As long as Scizor ex's remaining HP is 60 or less, Scizor ex does 40 more damage to the Defending Pokémon (before applying Weakness and Resistance)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Steel Wing",
				fr: "Aile d'acier",
				de: "Steel Wing"
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Scizor ex by attacks is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Lors du prochain tour de votre adversaire, les dégâts infligés à Cizayox ex par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				de: "During your opponent's next turn, any damage done to Scizor ex by attacks is reduced by 20 (after applying Weakness and Resistance)."
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cross-Cut",
				fr: "Coupe transversale",
				de: "Cross-Cut"
			},
			effect: {
				en: "If the Defending Pokémon is an Evolved Pokémon, this attack does 50 damage plus 30 more damage.",
				fr: "Si le Pokémon Défenseur est un Pokémon Évolué, cette attaque inflige 50 dégâts plus 30 dégâts supplémentaires.",
				de: "If the Defending Pokémon is an Evolved Pokémon, this attack does 50 damage plus 30 more damage."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276754,
		tcgplayer: 88967
	},

	variants: [
		{
			type: "holo",
		},
	]
}

export default card
