import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Cobalion",
		fr: "Cobaltium",
		es: "Cobalion",
		it: "Cobalion",
		pt: "Cobalion",
		de: "Kobalium"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		638,
	],

	hp: 110,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Metal Horns",
				fr: "Cornes de Métal",
			},
			effect: {
				en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc.",
			},
			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Sacred Sword",
				fr: "Lame Sainte",
			},
			effect: {
				en: "This Pokémon can't use Sacred Sword during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Lame Sainte pendant votre prochain tour.",
			},
			damage: 100,

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

	retreat: 2,

	thirdParty: {
		cardmarket: 280042
	}
}

export default card
