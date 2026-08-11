import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Hoppip",
		'fr-fr': "Granivol",
		'de-de': "Hoppspross"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [187],

	hp: 40,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],
		name: {
			'en-us': "Sleep Powder",
			'fr-fr': "Poudre dodo",
			'de-de': "Dornkanone"
		},
		effect: {
			'en-us': "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
			'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
			'de-de': "Wirf 3 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl 'Kopf' zu."
		},
		damage: "20x",

	}, {
		name: {
			'de-de': "Schlafpuder"
		},

		damage: 10,

		effect: {
			'de-de': "Das Verteidigende Pokémon schläft jetzt."
		},

		cost: ["Grass"]
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86179,
				cardmarket: 274987
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 86179,
				cardmarket: 274987
			},
		},
		{
			type: "normal",
			subtype: "japanese-back"
		}
	],
}

export default card
