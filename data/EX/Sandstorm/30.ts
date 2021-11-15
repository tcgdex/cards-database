import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Azumarill",
		fr: "Azumarill"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		184,
	],
	hp: 70,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Marill",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Drizzle",
				fr: "Crachin"
			},
			effect: {
				en: "If you have Water Energy cards in your hand, attach as many Water Energy cards as you like to any of your Active Pokémon.",
				fr: "Si vous avez des cartes Énergie  dans votre main, attachez-en autant que vous le voulez à votre ou vos Pokémon Actifs."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Max Bubbles",
				fr: "Maxi bulles"
			},
			effect: {
				en: "Flip a coin for each Energy attached to all of your Active Pokémon. This attack does 30 damage times the number of heads.",
				fr: "Lancez une pièce pour chaque carte Énergie attachée à chacun de vos Pokémon Actifs. Cette attaque inflige 30 dégâts multipliés par le nombre de face."
			},
			damage: "30×",

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
