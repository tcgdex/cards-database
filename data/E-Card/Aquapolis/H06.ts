import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Blissey",
		fr: "Leuphorie",
		de: "Heiteira"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		242,
	],

	hp: 120,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Chansey",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Happy Healing",
				fr: "Joyeux soin",
				de: "Happy Healing"
			},
			effect: {
				en: "Once during your turn (before your attack), choose 1 of your Benched Pokémon and flip a coin. If heads, count the number of Energy attached to Blissey and then remove that many damage counters from the chosen Benched Pokémon. This power can't be used if Blissey is affected by a Special Condition.",
				fr: "Une fois pendant votre tour (avant votre attaque), choisissez 1 des Pokémon de votre Banc et lancez une pièce. Si c'est face, comptez le nombre d'Énergies attachées à Leuphorie et retirez ensuite autant de marqueurs de dégâts du Pokémon du Banc que vous avez choisi. Ce pouvoir ne peut pas être utilisé si Leuphorie est affecté par un État spécial.",
				de: "Once during your turn (before your attack), choose 1 of your Benched Pokémon and flip a coin. If heads, count the number of Energy attached to Blissey and then remove that many damage counters from the chosen Benched Pokémon. This power can't be used if Blissey is affected by a Special Condition."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],

			name: {
				en: "Smash Bomber",
				fr: "Bombard'éclate",
				de: "Smash Bomber"
			},

			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				de: "Flip a coin. If tails, this attack does nothing."
			},

			damage: 50
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275062
	}
}

export default card
