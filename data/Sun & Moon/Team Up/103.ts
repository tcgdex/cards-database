import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Ferrothorn",
		fr: "Noacier",
	},
	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		598,
	],
	hp: 120,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Ferroseed",
		fr: "Grindur",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Guard Press",
				fr: "Pression de Garde",
			},
			effect: {
				en: "During your opponent's next turn, this Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 20 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
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
				en: "Thorn Pod Throw",
				fr: "Lancer de Boule Épine",
			},
			effect: {
				en: "This attack does 20 damage times the amount of Metal Energy attached to this Pokémon to 1 of your opponent's Benched Pokémon. You can't do more than 100 damage to a Benched Pokémon in this way. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 20 dégâts, multipliés par le nombre d’Énergies Metal attachées à ce Pokémon, à l’un des Pokémon de Banc de votre adversaire. Vous ne pouvez pas infliger plus de 100 dégâts à un Pokémon de Banc de cette façon. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
