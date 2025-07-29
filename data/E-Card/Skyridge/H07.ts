import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Flareon",
		de: "Flamara"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		136,
	],

	hp: 70,

	types: [
		"Fire",
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
				en: "Whenever you attach a Fire Energy card from your hand to Flareon, remove all Special Conditions affecting Flareon.",
				de: "Immer wenn du eine -Energiekarte aus deiner Hand an Flamara anlegst, entferne alle speziellen Zustände, die Flamara betreffen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Singe",
				de: "Versengung"
			},
			effect: {
				en: "The Defending Pokémon is now Burned.",
				de: "Das verteidigende Pokémon ist jetzt verbrannt."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Burn Booster",
				de: "Brennverstärker"
			},
			effect: {
				en: "Discard an Energy card attached to Flareon in order to use this attack. If the discarded card is a Energy card, this attack does 40 damage plus 10 more damage.",
				de: "Lege eine an Flamara angelegte Energiekarte auf deinen Ablagestapel, um diesen Angriff zu verwenden. Ist die abgelegte Karte eine -Energiekarte, fügt dieser Angriff 40 Schadenspunkte plus 10 weiter Schadenspunkte zu."
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

	thirdParty: {
		cardmarket: 275249
	}
}

export default card
