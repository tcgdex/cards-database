import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Dialga",
		fr: "Dialga",
	},
	illustrator: "Kent Kanetsuna",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		483,
	],
	hp: 100,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Energy Stream",
				fr: "Courant d'énergie",
			},
			effect: {
				en: "Flip a coin. If heads, search your discard pile for a basic Energy card and attach it to Dialga.",
				fr: "Lancez une pièce. Si c'est face, choisissez dans votre pile de défausse une carte Énergie de base et attachez-la à Dialga.",
			},
			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Diamond Blow",
				fr: "Coup diamant",
			},
			effect: {
				en: "Dialga can't attack during your next turn.",
				fr: "Dialga ne peut pas attaquer lors de votre prochain tour.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+30"
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
