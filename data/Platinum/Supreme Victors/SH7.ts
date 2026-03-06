import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Milotic",
		fr: "Milobellus",
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
		fr: "Barpau"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Aqua Mirage",
				fr: "Aqua-mirage",
				de: "Aqua-Trugbild"
			},
			effect: {
				en: "If you have no cards in your hand, prevent all damage done to Milotic by attacks from your opponent's Pokémon.",
				fr: "Si vous n'avez plus de cartes en main, prévenez tous les dégâts infligés à Milobellus par les attaques des Pokémon de votre adversaire.",
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
				fr: "Vague diminutrice",
				de: "Schwindende Welle"
			},
			effect: {
				en: "Does 80 damage minus 10 damage for each damage counter on Milotic.",
				fr: "Inflige 80 dégâts moins 10 dégâts pour chaque marqueur de dégât sur Milobellus.",
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
	},

	variants: [
		{
			type: "reverse"
		}
	]
}

export default card
