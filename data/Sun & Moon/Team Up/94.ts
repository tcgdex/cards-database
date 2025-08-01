import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Pangoro",
		fr: "Pandarbare",
		es: "Pangoro",
		it: "Pangoro",
		pt: "Pangoro",
		de: "Pandagro"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		675,
	],

	hp: 140,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Pancham",
		fr: "Pandespiègle",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tighten Up",
				fr: "Resserrage",
				es: "Apretar",
				it: "Torchio",
				pt: "Espremer",
				de: "Zudrücken"
			},
			effect: {
				en: "Your opponent discards 2 cards from their hand.",
				fr: "Votre adversaire défausse 2 cartes de sa main.",
				es: "Tu rival descarta 2 cartas de su mano.",
				it: "Il tuo avversario scarta due carte che ha in mano.",
				pt: "Seu oponente descarta 2 cartas da própria mão.",
				de: "Dein Gegner legt 2 Karten aus seiner Hand auf seinen Ablagestapel."
			},
			damage: 60,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tantrum",
				fr: "Mauvaise Humeur",
				es: "Rabieta",
				it: "Collera",
				pt: "Petulância",
				de: "Rappel"
			},
			effect: {
				en: "This Pokémon is now Confused.",
				fr: "Ce Pokémon est maintenant Confus.",
				es: "Este Pokémon pasa a estar Confundido.",
				it: "Questo Pokémon viene confuso.",
				pt: "Este Pokémon agora está Confuso.",
				de: "Dieses Pokémon ist jetzt verwirrt."
			},
			damage: 170,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 369024
	}
}

export default card
