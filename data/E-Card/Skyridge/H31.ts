import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Vaporeon",
		de: "Aquana"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		134,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Eevee",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Self Healing",
				de: "Selbstheilung"
			},
			effect: {
				en: "Whenever you attach a Water Energy card from your hand to Vaporeon, remove all Special Conditions affecting Vaporeon.",
				de: "Immer wenn du eine -Energiekarte aus deiner Hand an Aquana anlegst, entferne alle speziellen Zustände, die Aquana betreffen."
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
				en: "Hypnosplash",
				de: "Hypnospritzer"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				de: "Das verteidigende Pokémon schläft jetzt."
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aqua Trick",
				de: "Wasser-Trick"
			},
			effect: {
				en: "If the Defending Pokémon has any Energy cards attached to it, flip a coin. If heads, choose 1 of those Energy cards and move it to 1 of your opponent's Benched Pokémon. If your opponent has no Benched Pokémon, ignore this effect.",
				de: "Wirf eine Münze, falls an das verteidigende Pokémon mindestens eine Energiekarte angelegt ist. Wähle bei 'Kopf' 1 dieser Energiekarten und lege sie auf 1 der Pokémon auf der Bank deines Gegners. Hat dein Gegner kein Pokémon auf seiner Bank, ignoriere diesen Effekt."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275252,
		tcgplayer: 90280
	},

	variants: [
		{
			type: 'holo',
		}
	]
}

export default card
