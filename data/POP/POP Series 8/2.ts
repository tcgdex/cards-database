import { Card } from '../../../interfaces'
import Set from '../POP Series 8'

const card: Card = {
	name: {
		en: "Lucario",
		de: "Lucario"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		448,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Riolu",
		de: "Riolu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Blocking Punch",
				de: "Abwehrhieb"
			},
			effect: {
				en: "During your opponent’s next turn, any damage done to Lucario by attacks is reduced by 20 (after applying Weakness and Resistance).",
				de: "Während des nächsten Zuges deines Gegners wird Schaden, der Lucario durch Angriffe zugefügt wird, um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Striking Kick",
				de: "Erstaunlicher Kick"
			},
			effect: {
				en: "This attack’s damage isn’t affected by Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
				de: "Resistenz, Poké-Power, Poké-Body und alle anderen Effekte auf dem Verteidigenden Pokémon haben keine Auswirkungen auf die Schadenspunkte dieses Angriffs."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	description: {
		en: "By catching the aura emanating from others, it can read their thoughts and movements.",
		de: "Es nimmt dies Aura seines Gegners wahr. So kann es dessen Gedanken und Bewegungen erkennen."
	},

	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278403,
				tcgplayer: 86877
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 278403,
				tcgplayer: 86877
			}
		},
	],
}

export default card
