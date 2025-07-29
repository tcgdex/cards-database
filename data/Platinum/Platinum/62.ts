import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Shieldon",
		fr: "Dinoclier",
		de: "Schilterus"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		410,
	],

	hp: 80,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Armor Fossil",
		fr: "Fossile armure",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Endure",
				fr: "Ténacité",
				de: "Endure"
			},
			effect: {
				en: "Flip a coin. If heads, during your opponent's next turn, if Shieldon would be Knocked Out by damage from an attack, Shieldon is not Knocked Out and its remaining HP becomes 10 instead.",
				fr: "Lancez une pièce. Si c'est face, lors du prochain tour de votre adversaire, si Dinoclier est mis K.O par les dégâts d'une attaque, il n'est pas mis K.O mais il ne lui reste que 10 PV.",
				de: "Flip a coin. If heads, during your opponent's next turn, if Shieldon would be Knocked Out by damage from an attack, Shieldon is not Knocked Out and its remaining HP becomes 10 instead."
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Rock Slide",
				fr: "Éboulement",
				de: "Rock Slide"
			},
			effect: {
				en: "Does 10 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à 2 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Does 10 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278483
	}
}

export default card
