import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Bronzor",
		fr: "Bronzor",
	},
	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		436,
	],
	hp: 60,
	types: [
		"Psychic",
	],
	evolveFrom: {
		fr: "Archéomire",
	},
	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Gyro Swap",
				fr: "Gyro-échange",
			},
			effect: {
				en: "Put a number of damage counters on the Defending Pokémon equal to the number of Colorless Energy in Bronzor's Retreat Cost (after applying effects to the Retreat Cost).",
				fr: "Placez autant de marqueurs de dégât sur le Pokémon Défenseur qu'il y a d'Énergies Colorless dans le Coût de Retraite d'Archéomire (après avoir appliqué les effets sur le Coût de Retraite).",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psyshock",
				fr: "Choc psy",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Fire",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
