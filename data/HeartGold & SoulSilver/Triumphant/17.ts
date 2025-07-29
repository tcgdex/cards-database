import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Ditto",
		fr: "Metamorph",
		de: "Ditto"
	},

	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		132,
	],

	hp: 40,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Dittobolic",
				fr: "Metamornifle",
				de: "Dittobolisch"
			},
			effect: {
				en: "The number of Benched Pokémon your opponent can have is now 4. If your opponent has 5 Benched Pokémon, your opponent must discard 1 of them and all cards attached to it.",
				fr: "Le nombre de Pokémon de Banc de votre adversaire est maintenant limité à 4. Si votre adversaire a 5 Pokémon de Banc, il doit défausser l’un d’entre eux et toutes les cartes qui lui sont attachées.",
				de: "Die Anzahl der Pokémon, die dein Gegner auf seiner Bank haben kann, beträgt nun 4. Falls dein Gegner 5 Pokémon auf der Bank hat, muss er 1 davon und alle daran angelegten Karten auf seinen Ablagestapel legen."
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
				en: "Sharp Point",
				fr: "Point-Pointu",
				de: "Scharfe Spitze"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "Its transformation ability is perfect. However, if made to laugh, it can’t maintain its disguise."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279547
	}
}

export default card
