import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Suicune & Entei LEGEND",
		'fr-fr': "Suicune & Entei LÉGENDE (bas)",
		'de-de': "Suicune & Entei LEGENDE"
	},

	illustrator: "Shinji Higuchi + Sachiko Eba",
	rarity: "LEGEND",
	category: "Pokemon",
	set: Set,

	dexId: [244],
	hp: 160,

	types: [
		"Water",
		"Fire"
	],

	suffix: "Legend",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Torrent Blade",
				'fr-fr': "Croc torrentiel",
				'de-de': "Schwallfang"
			},
			effect: {
				'en-us': "Return 2 Water Energy attached to Suicune & Entei LEGEND to your hand. Choose 1 of your opponent's Benched Pokémon. This attack does 100 damage to that Pokémon. (Don't apply Weakness or Resistance for Benched Pokémon.)",
				'fr-fr': "Reprenez dans votre main 2 cartes Énergie Water attachées à Suicune & Entei LÉGENDE. Cette attaque inflige 100 dégâts à l'un des Pokémon se trouvant sur le Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'de-de': "Nimm 2 -Energiekarten, die an Suicune & Entei-LEGENDE angelegt sind, zurück auf deine Hand. Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 100 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bursting Inferno",
				'fr-fr': "Enfer explosif",
				'de-de': "Flammendes Inferno"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Burned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Brûlé.",
				'de-de': "Das Verteidigende Pokémon ist jetzt verbrannt."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,
	stage: "Basic",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 279251,
				tcgplayer: 89609
			}
		},
		{
			type: "normal",
			stamp: ["ross-cawthorn"],
			thirdParty: {
				cardmarket: 868169,
				tcgplayer: 480500
			}
		},
	],
}

export default card
