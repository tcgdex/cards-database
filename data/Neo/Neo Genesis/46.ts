import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Quilava",
		fr: "Feurisson",
		de: "Igelavar"
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
		en: "Cyndaquil",
		fr: "Héricendre"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Ember",
				fr: "Flammèche",
				de: "Ember"
			},
			effect: {
				en: "Discard 1 Energy card attached to Quilava in order to use this attack.",
				fr: "Défaussez 1 carte Énergie  attachée à Feurisson afin d'utiliser cette attaque.",
				de: "Discard 1  Energy card attached to Quilava in order to use this attack."
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Fire Wind",
				fr: "Vent de feu",
				de: "Fire Wind"
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, choose 1 of them. Flip 2 coins. For each heads, this attack does 10 damage to that Pokémon. (Don't apply Weakness and Resistance.)",
				fr: "Si votre adversaire possède un ou plusieurs Pokémon sur son Banc, choisissez l'un d'eux. Lancez 2 pièces. Pour chaque face, cette attaque inflige 10 dégâts à ce Pokémon. (Ne pas appliquer la Faiblesse et la Résistance).",
				de: "If your opponent has any Benched Pokémon, choose 1 of them. Flip 2 coins. For each heads, this attack does 10 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
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

	description: {
		fr: "Ce Pokémon est entièrement recouvert de fourrure ininflammable. Il peut résister à n'importe quel type d'attaque par le feu."
	},

	thirdParty: {
		cardmarket: 274446,
		tcgplayer: 88480
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card
