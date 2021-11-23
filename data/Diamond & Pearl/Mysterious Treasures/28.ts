import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Manectric",
		fr: "Elecsprint"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		310,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Electrike",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Lightning Twister",
				fr: "Tornade d'éclairs"
			},
			effect: {
				en: "Does 20 damage times the number of basic Energy cards attached to Manectric.",
				fr: "Inflige 20 dégâts multipliés par le nombre de cartes Énergie de base attachées à Elecsprint."
			},
			damage: "20×",

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Chain Lightning",
				fr: "Rafale de foudre"
			},
			effect: {
				en: "Does 20 damage to each of your opponent's Benched Pokémon that is the same type as the Defending Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 20 dégâts à chacun des Pokémon de Banc de votre adversaire étant du même type que le Pokémon Défenseur. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	description: {
		fr: "Il libère l'électricité par sa crinière. Il crée un nuage d'orage pour appeler la foudre."
	}
}

export default card
