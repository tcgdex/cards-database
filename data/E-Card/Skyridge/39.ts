import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Misdreavus",
		de: "Traunfugil"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		200,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hypnoblast",
				de: "Hypnoschuss"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
				de: "Wirf eine Münze. bei \"Kopf\" schläft das verteidigende Pokémon jetzt."
			},
			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Gift of Spite",
				de: "Boshaftes Geschenk"
			},
			effect: {
				en: "Count the number of your Pokémon in play with damage counters on them. Put that many damage counters on the Defending Pokémon.",
				de: "Bestimme die Anzahl an Pokémon im Spiel, auf denen Schadensmarken liegen. Lege ebenso viele Schadensmarken auf das verteidigende Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	thirdParty: {
		cardmarket: 275297
	}
}

export default card
