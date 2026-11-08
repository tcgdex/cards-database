import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Metagross ex",
		'fr-fr': "Metalosse ex",
		'de-de': "Metagross ex"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [376],

	hp: 150,

	stage: "Stage2",
	types: [
		"Metal"
	],

	evolveFrom: {
		'en-us': "Metang",
		'fr-fr': "Metang"
	},

	suffix: "ex",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Metal Reversal",
				'fr-fr': "Inversion métallique",
				'de-de': "Metal Reversal"
			},
			effect: {
				'en-us': "Before doing damage, you may choose 1 of your opponent's Benched Pokémon and switch it with 1 of the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch. If you do, this attack does 40 damage to the new Defending Pokémon.",
				'fr-fr': "Avant d'infliger des dégâts, vous pouvez choisir 1 des Pokémon de votre adversaire et l'échanger avec 1 des Pokémon Défenseurs. Votre adversaire choisit le Pokémon Défenseur à échanger. Cette attaque inflige alors 40 dégâts au nouveau Pokémon Défenseur.",
				'de-de': "Before doing damage, you may choose 1 of your opponent's Benched Pokémon and switch it with 1 of the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch. If you do, this attack does 40 damage to the new Defending Pokémon."
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
				'en-us': "Extra Comet Punch",
				'fr-fr': "Poing meteor",
				'de-de': "Extra Comet Punch"
			},
			effect: {
				'en-us': "During your next turn, Extra Comet Punch does 50 damage plus 50 more damage.",
				'fr-fr': "Lors de votre prochain tour, Extra poing comète inflige 50 dégâts plus 50 dégâts supplémentaires.",
				'de-de': "During your next turn, Extra Comet Punch does 50 damage plus 50 more damage"
			},
			damage: "50+",

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

	variants: [
		{
			type: "holo",
			foil: 'cracked-ice',
			thirdParty: {
				tcgplayer: 87346,
				cardmarket: 276169
			}
		},
	]
}

export default card
