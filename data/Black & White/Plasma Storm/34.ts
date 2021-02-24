import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Manaphy",
		fr: "Manaphy",
	},
	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		490,
	],
	hp: 70,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Final Wish",
				fr: "Dernier Souhait",
			},
			effect: {
				en: "When this Pokémon is Knocked Out by damage from an opponent's attack, search your deck for a card and put it into your hand. Shuffle your deck afterward.",
				fr: "Lorsque ce Pokémon est mis K.O. par les dégâts d'une attaque de votre adversaire, cherchez une carte dans votre deck puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Seafaring",
				fr: "Voyage en Mer",
			},
			effect: {
				en: "Flip 3 coins. For each heads, attach a Water Energy card from your discard pile to your Benched Pokémon in any way you like.",
				fr: "Lancez 3 pièces. Pour chaque côté face, attachez une carte Énergie Water de votre pile de défausse à vos Pokémon de Banc, de la manière que vous voulez.",
			},

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
