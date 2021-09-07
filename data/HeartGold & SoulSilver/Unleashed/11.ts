import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Xatu",
		fr: "Xatu",
	},
	illustrator: "sui",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		178,
	],
	hp: 90,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Natu",
		fr: "Natu",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Psywave",
				fr: "Vague psy",
			},
			effect: {
				en: "Does 20 damage times the amount of Energy attached to the Defending Pokémon.",
				fr: "Inflige 20 dégâts multipliés par le nombre de cartes Énergie attachées au Pokémon Défenseur.",
			},
			damage: "20×",

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Confuse Ray",
				fr: "Onde folie",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
