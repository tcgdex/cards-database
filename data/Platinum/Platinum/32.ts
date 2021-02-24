import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Kricketune",
		fr: "Mélokrik",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		402,
	],
	hp: 90,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Kricketot",
		fr: "Crikzik",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Revenge Melody",
				fr: "Mélodie vengeresse",
			},
			effect: {
				en: "Does 20 damage times the number of Kricketot and Kricketune in your discard pile.",
				fr: "Inflige 20 dégâts multipliés par le nombre de Crikzik et Mélokrik dans votre pile de défausse.",
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Bug Buzz",
				fr: "Bourdon",
			},
			effect: {
				en: "If the Defending Pokémon is Asleep, this attack does 50 damage plus 30 more damage. Remove the Special Condition Asleep from the Defending Pokémon.",
				fr: "Si le Pokémon Défenseur est Endormi, cette attaque inflige 50 dégâts plus 30 dégâts supplémentaires. Retirez-lui l'État Spécial Endormi.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
