import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [953],
	set: Set,

	name: {
		'fr-fr': "Léboulérou",
		'en-us': "Rellor",
		'es-es': "Rellor",
		'it-it': "Rellor",
		'pt-br': "Rellor",
		'de-de': "Relluk"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Piqûre",
			'en-us': "Bug Bite",
			'es-es': "Picadura",
			'it-it': "Coleomorso",
			'pt-br': "Picada",
			'de-de': "Käferbiss"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715498,
				tcgplayer: 497436,
				cardtrader: 248322
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715498,
				tcgplayer: 497436,
				cardtrader: 248322
			}
		},
	],

	illustrator: "Kouki Saitou",

	description: {
		'en-us': "This Pokémon creates a mud ball by mixing sand and dirt with psychic energy. It treasures its mud ball more than its own life.",
	},
}

export default card
