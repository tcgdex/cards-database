import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [769],
	set: Set,

	name: {
		'fr-fr': "Bacabouh",
		'en-us': "Sandygast",
		'es-es': "Sandygast",
		'it-it': "Sandygast",
		'pt-br': "Sandygast",
		'de-de': "Sankabuh"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Murmure",
			'en-us': "Mumble",
			'es-es': "Farfullar",
			'it-it': "Borbottio",
			'pt-br': "Resmungo",
			'de-de': "Grummeln"
		},

		damage: 20
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Tir de Boue",
			'en-us': "Mud Shot",
			'es-es': "Disparo Lodo",
			'it-it': "Colpodifango",
			'pt-br': "Tiro de Lama",
			'de-de': "Lehmschuss"
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715570,
				tcgplayer: 497510,
				cardtrader: 248724
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715570,
				tcgplayer: 497510,
				cardtrader: 248724
			}
		},
	],

	illustrator: "Shin Nagasawa",

	description: {
		'en-us': "If it loses its shovel, it will stick something else— like a branch—in its head to make do until it finds another shovel.",
	},
}

export default card
