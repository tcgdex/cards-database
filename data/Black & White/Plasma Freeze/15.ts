import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Lampent",
		fr: "Mélancolux",
		es: "Lampent",
		it: "Lampent",
		pt: "Lampent",
		de: "Laternecto"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		608,
	],

	hp: 80,

	types: [
		"Fire",
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
				"Colorless",
			],
			name: {
				en: "Live Coal",
				fr: "Charbon Mutant",
				de: "Glühende Kohlen"
			},

			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Searing Flame",
				fr: "Flammes Calcinantes",
				de: "Sengende Flammen"
			},
			effect: {
				en: "The Defending Pokémon is now Burned.",
				fr: "Le Pokémon Défenseur est maintenant Brûlé.",
				de: "Das Verteidigende Pokémon ist jetzt verbrannt."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "The spirits it absorbs fuel its baleful fire. It hangs around hospitals waiting for people to pass on.",
		de: "Es nährt seine Flamme mit den Seelen seiner Opfer. Heutzutage irrt es auf der Suche nach Seelen durch Krankenhäuser."
	},

	thirdParty: {
		cardmarket: 280893,
		tcgplayer: 86590
	}
}

export default card
