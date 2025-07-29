import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Dewgong",
		de: "Jugong"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		87,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Seel",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Freeze Lock",
				de: "Frostsperre"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent can't attach Energy cards from his or her hand to his or her Active Pokémon during his or her next turn.",
				de: "Wirf eine Münze. Bei 'Kopf' kann dein Gegner während seines nächsten Zuges keine Energie-Karten aus seiner Hand an sein aktives Pokémon anlegen."
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Crushing Ice",
				de: "Erdrückendes Eis"
			},
			effect: {
				en: "This attack does 40 damage plus 10 more damage for each Energy in the Defending Pokémon's Retreat Cost. Damage is calculated using the Defending Pokémon's Retreat Cost after applying effects to the Retreat Cost.",
				de: "Dieser Angriff fügt 40 Schadenspunkte plus 10 weitere Schadenspunkte für jede -Energie in den Rückzugskosten des verteidigenden Pokémon zu. Beim Ermitteln des Schadens werden erst etwaige Effekte auf die Rückzugskosten angewandt und dann die Rückzugskosten des verteidigenden Pokémon verwendet."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275248
	}
}

export default card
