import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Swampert ex",
		fr: "Laggron ex",
		de: "Sumpex ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		260,
	],

	hp: 150,

	types: [
		"Fighting",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hyper Pump",
				fr: "Hyper pompe",
				de: "Hyper Pump"
			},
			effect: {
				en: "Does 20 damage plus 20 more damage for each basic Energy attached to Swampert ex but not used to pay for this attack's Energy cost. You can't add more than 80 damage in this way.",
				fr: "Inflige 20 dégâts plus 20 dégâts supplémentaires pour chaque Énergie de base attachée à Laggron ex qui n'a pas été utilisée pour payer le coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 80 dégâts de cette façon.",
				de: "Does 20 damage plus 20 more damage for each basic Energy attached to Swampert ex but not used to pay for this attack's Energy cost. You can't add more than 80 damage in this way."
			},
			damage: "20+",

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],

			name: {
				en: "Crushing Wave",
				fr: "Vague écrasante",
				de: "Crushing Wave"
			},

			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. After doing damage, flip a coin. If heads, your opponent discards an Energy card, if any, attached to that Pokémon. (Don't apply Weakness and Resistance to Benched Pokémon.)",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 40 dégâts. Après avoir infligé des dégâts, lancez une pièce. Si c'est face, votre adversaire défausse une carte Énergie attachée à ce Pokémon, s'il en a. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. After doing damage, flip a coin. If heads, your opponent discard an Energy card, if any, attached to that Pokémon. (Don't apply Weakness and Resistance to benched Pokémon.)"
			},

			damage: "20+"
		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	
	retreat: 3,

	thirdParty: {
		cardmarket: 276072,
		tcgplayer: 89682
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["reed-weichler"]
		}
	]
}

export default card
