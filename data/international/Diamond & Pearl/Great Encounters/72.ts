import { Card } from 'models/database/card'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		'en-us': "Jigglypuff",
		'fr-fr': "Rondoudou",
		'de-de': "Pummeluff"
	},

	illustrator: "Kenkichi Toyama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		39,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Hypnotic Gaze",
				'fr-fr': "Regard hypnotique",
				'de-de': "Hypnotischer Blick"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Das Verteidigende Pokémon schläft jetzt."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Expand",
				'fr-fr': "Pousstoidla",
				'de-de': "Ausdehnen"
			},
			effect: {
				'en-us': "During your opponent's next turn, any damage done to Jigglypuff by attacks is reduced by 20 (after applying Weakness and Resistance).",
				'fr-fr': "Lors du prochain tour de votre adversaire, tous dégâts infligés à Rondoudou par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				'de-de': "Während des nächsten Zuges deines Gegners wird Schaden, der Pummeluff durch Angriffe zugefügt wird, um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "When it wavers its big, round eyes, it begins singing a lullaby that makes everyone drowsy.",
	},

	thirdParty: {
		cardmarket: 277974,
		tcgplayer: 86318
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
