import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Mamoswine",
		'fr-fr': "Mammochon",
		'de-de': "Mamutel"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [473],

	hp: 140,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Piloswine",
		'fr-fr': "Cochignon"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Icy Wind",
				'fr-fr': "Vent glacé",
				'de-de': "Eissturm"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 40,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Snowstorm",
				'fr-fr': "Tempête de neige",
				'de-de': "Schneesturm"
			},
			effect: {
				'en-us': "Does 20 damage to each of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 20 dégâts à chacun des Pokémon se trouvant sur le Banc de votre adversaire et ayant des marqueurs de dégât. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'de-de': "Dieser Angriff fügt jedem Pokémon auf der Bank deines Gegners, auf dem bereits mindestens 1 Schadensmarke liegt, 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "A frozen Mamoswine was dug from ice dating back 10,000 years. This Pokémon has been around a long, long, long time."
	},

	variants: [		{
			type: "holo",
			thirdParty: {
				tcgplayer: 87140,
				cardmarket: 279535
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279535,
				tcgplayer: 87140
			}
		},
		{
			type: "holo",
			foil: 'cracked-ice',
			thirdParty: {
				tcgplayer: 125068
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 125072,
			}
		},
	],

}

export default card
