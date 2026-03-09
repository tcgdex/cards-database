import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Metagross ex",
		fr: "Metalosse ex",
		de: "Metagross ex"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		376,
	],

	hp: 150,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Metang",
		fr: "Metang"
	},

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Metal Reversal",
				fr: "Inversion métallique",
				de: "Metal Reversal"
			},
			effect: {
				en: "Before doing damage, you may choose 1 of your opponent's Benched Pokémon and switch it with 1 of the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch. If you do, this attack does 40 damage to the new Defending Pokémon.",
				fr: "Avant d'infliger des dégâts, vous pouvez choisir 1 des Pokémon de votre adversaire et l'échanger avec 1 des Pokémon Défenseurs. Votre adversaire choisit le Pokémon Défenseur à échanger. Cette attaque inflige alors 40 dégâts au nouveau Pokémon Défenseur.",
				de: "Before doing damage, you may choose 1 of your opponent's Benched Pokémon and switch it with 1 of the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch. If you do, this attack does 40 damage to the new Defending Pokémon."
			},
			damage: 40,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Extra Comet Punch",
				fr: "Poing meteor",
				de: "Extra Comet Punch"
			},
			effect: {
				en: "During your next turn, Extra Comet Punch does 50 damage plus 50 more damage.",
				fr: "Lors de votre prochain tour, Extra poing comète inflige 50 dégâts plus 50 dégâts supplémentaires.",
				de: "During your next turn, Extra Comet Punch does 50 damage plus 50 more damage"
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
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

	
	retreat: 4,

	thirdParty: {
		cardmarket: 276169,
		tcgplayer: 87346
	},

	variants: [
		{
			type: "holo",
		}
	]
}

export default card
