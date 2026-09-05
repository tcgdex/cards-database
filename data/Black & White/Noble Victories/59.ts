import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Lampent",
		fr: "Mélancolux",
		es: "Lampent",
		it: "Lampent",
		pt: "Lampent",
		de: "Laternecto"
	},

	illustrator: "MAHOU",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		608,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Litwick",
		fr: "Funécire",
		de: "Lichtel"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Luring Light",
				fr: "Appât Lumineux",
				de: "Köderleuchte"
			},
			effect: {
				en: "Switch the Defending Pokémon with 1 of your opponent's Benched Pokémon.",
				fr: "Échangez le Pokémon Défenseur avec 1 des Pokémon de Banc de votre adversaire.",
				de: "Tausche das Verteidigende Pokémon gegen 1 Pokémon auf der Bank deines Gegners aus."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Will-O-Wisp",
				fr: "Feu Follet",
				de: "Irrlicht"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "This ominous Pokémon is feared. Through cities it wanders, searching for the spirits of the fallen.",
		de: "Es irrt ziellos auf der Suche nach den Seelen der Verstorbenen durch die Stadt. Als Unglücksbringer gefürchtet."
	},

	thirdParty: {
		cardmarket: 280182,
		tcgplayer: 86587
	}
}

export default card
