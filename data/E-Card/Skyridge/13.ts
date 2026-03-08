import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Jolteon",
		de: "Blitza"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		135,
	],

	hp: 70,

	types: [
		"Lightning",
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
				en: "Whenever you attach a Lightning Energy card from your hand to Jolteon, remove all Special Conditions affecting Jolteon.",
				de: "Immer wenn du eine -Energiekarte aus deiner Hand an Blitza anlegst, entferne alle speziellen Zustände, die Blitza betreffen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Thundershock",
				de: "Donnerschock"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				de: "Wirf eine Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Thunderspark",
				de: "Donnerfunken"
			},
			effect: {
				en: "This attack does 10 damage to each Benched Pokémon with at least 1 Energy card attached to it (yours and your opponent's).",
				de: "Dieser Angriff fügt allen Pokémon auf der Bank (deinen und denen deines Gegners), an die mindestens 1 Energiekarte angelegt ist, 10 Schadenspunkte zu."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275239,
		tcgplayer: 86338
	},

	variants: [
		{
			type: 'normal',
		},
		{
			type: 'reverse',
		}
	]
}

export default card
