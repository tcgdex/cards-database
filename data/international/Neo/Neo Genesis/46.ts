import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "Quilava",
		'fr-fr': "Feurisson",
		'de-de': "Igelavar"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		156,
	],

	hp: 60,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Cyndaquil",
		'fr-fr': "Héricendre"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Ember",
				'fr-fr': "Flammèche",
				'de-de': "Ember"
			},
			effect: {
				'en-us': "Discard 1 Energy card attached to Quilava in order to use this attack.",
				'fr-fr': "Défaussez 1 carte Énergie  attachée à Feurisson afin d'utiliser cette attaque.",
				'de-de': "Discard 1  Energy card attached to Quilava in order to use this attack."
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Fire Wind",
				'fr-fr': "Vent de feu",
				'de-de': "Fire Wind"
			},
			effect: {
				'en-us': "If your opponent has any Benched Pokémon, choose 1 of them. Flip 2 coins. For each heads, this attack does 10 damage to that Pokémon. (Don't apply Weakness and Resistance.)",
				'fr-fr': "Si votre adversaire possède un ou plusieurs Pokémon sur son Banc, choisissez l'un d'eux. Lancez 2 pièces. Pour chaque face, cette attaque inflige 10 dégâts à ce Pokémon. (Ne pas appliquer la Faiblesse et la Résistance).",
				'de-de': "If your opponent has any Benched Pokémon, choose 1 of them. Flip 2 coins. For each heads, this attack does 10 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "This Pokémon is fully covered by nonflammable fur. It can withstand any kind of fire attack.",
		'fr-fr': "Ce Pokémon est entièrement recouvert de fourrure ininflammable. Il peut résister à n'importe quel type d'attaque par le feu."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274446,
				tcgplayer: 88480
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274446,
				tcgplayer: 88480
			}
		}
	]
}

export default card
