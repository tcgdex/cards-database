import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Milotic",
		de: "Milotic"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		350,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Feebas",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Aqua Mirage",
				de: "Aqua-Trugbild"
			},
			effect: {
				en: "If you have no cards in your hand, prevent all damage done to Milotic by attacks from your opponent's Pokémon.",
				de: "Solange du keine Handkarten hast, verhindere allen Schaden, der Milotic durch Angriffe von Pokémon deines Gegners zugefügt würde."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Dwindling Wave",
				de: "Schwindende Welle"
			},
			effect: {
				en: "Does 80 damage minus 10 damage for each damage counter on Milotic.",
				de: "Dieser Angriff fügt 80 Schadenspunkte minus 10 Schadenspunkte für jede Schadensmarke auf Milotic zu."
			},
			damage: "80-",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	thirdParty: {
		cardmarket: 278689
	}
}

export default card
