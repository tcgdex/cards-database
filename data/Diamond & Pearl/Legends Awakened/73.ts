import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Swellow",
		fr: "Heledelle",
	},

	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		277,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Taillow",
		fr: "Schwalbini",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Big Wing",
				fr: "Grande aile",
			},
			effect: {
				en: "If Swellow has no Energy attached to it, Swellow's Retreat Cost is 0.",
				fr: "Si Heledelle ne possède pas d'Énergie, son Coût de retraite est de 0.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mach Descent",
				fr: "Mach-attaque",
			},
			effect: {
				en: "If Swellow was on your Bench this turn, this attack's base damage is 60 instead of 30.",
				fr: "Si Heledelle se trouve sur votre Banc lors de ce tour, les dégâts de base de cette attaque sont de 60 au lieu de 30.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		fr: "Il vole en cercle en quête d'une proie. Dès qu'il l'a repérée, il fond sur elle en un éclair."
	}
}

export default card
