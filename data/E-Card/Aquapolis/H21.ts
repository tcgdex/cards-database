import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Scizor",
		fr: "Cizayox"
	},
	illustrator: "Hisao Nakamura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		212,
	],
	hp: 80,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Scyther",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Poison Resistance",
				fr: "Résistance au poison"
			},
			effect: {
				en: "Scizor can't be Poisoned.",
				fr: "Cizayox ne peut pas être Empoisonné."
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
				en: "Snatch",
				fr: "Arrachage"
			},
			effect: {
				en: "Before doing damage, you may choose 1 of your opponent's Benched Pokémon with no damage counters on it and snatch the Defending Pokémon with it.",
				fr: "Avant d'infliger des dégâts, vous pouvez choisir un des Pokémon du Banc de votre adversaire sans marqueurs de dégâts et l'échanger contre le Pokémon Défenseur."
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
				en: "Heavy Metal",
				fr: "Heavy Métal"
			},
			effect: {
				en: "Flip a number of coins equal to the number of Metal Energy attached to Scizor. This attack does 30 damage plus 20 damage times the number of heads.",
				fr: "Lancez un nombre de pièces équivalent au nombre d'Énergie  attachées à Cizayox. Cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires pour chaque face."
			},
			damage: "30+",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
