import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Salamence δ",
		fr: "Drattak δ ESPÈCES DELTA"
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		373,
	],
	hp: 110,
	types: [
		"Fire",
		"Metal",
	],
	evolveFrom: {
		en: "Shelgon",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Dance",
				fr: "Danse du feu"
			},
			effect: {
				en: "Search your discard pile for a Fire Energy card and attach it to 1 of your Pokémon.",
				fr: "Cherchez dans votre pile de défausse une carte Énergie  et attachez-la à 1 de vos Pokémon."
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Delta Blast",
				fr: "Explosion Delta"
			},
			effect: {
				en: "Discard a Metal Energy card attached to Salamence.",
				fr: "Défaussez une carte Énergie  attachée à Drattak."
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fire",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
