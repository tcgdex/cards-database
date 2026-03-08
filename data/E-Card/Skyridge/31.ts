import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Steelix",
		de: "Stahlos"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		208,
	],

	hp: 100,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Onix",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Rare Metal",
				de: "Seltenes Metall"
			},
			effect: {
				en: "All basic Energy cards attached to Steelix provide Metal Energy instead of their usual types.",
				de: "Alle an Stahlos angelegten Basis-Energiekarten produzieren -Energie statt ihrer normalen Energien."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Squeeze",
				de: "Quetschen"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage and the Defending Pokémon is now Paralyzed.",
				de: "Wirf eine Münze. Bei 'Kopf' fügt dieser Angriff 20 Schadenspunkte plus 10 weitere Schadenspunkte zu und das verteidigende Pokémon ist jetzt gelähmt."
			},
			damage: "20+",

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Metal",
				"Colorless",
			],

			name: {
				en: "Metal Tail",
				de: "Metallschweif"
			},

			effect: {
				en: "Before doing damage, you may flip a coin. If heads, this attack does 80 damage. If tails, this attack does nothing.",
				de: "Bevor der Schaden zugefügt wird, kannst du eine Münze werfen. Bei 'Kopf' fügt dieser Angriff 80 Schadenspunkte zu. Bei 'Zahl' hat dieser Angriff keine Wirkung."
			},

			damage: 40
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
			type: "Grass",
			value: "-30"
		},
	],

	thirdParty: {
		cardmarket: 275256,
		tcgplayer: 89559
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
