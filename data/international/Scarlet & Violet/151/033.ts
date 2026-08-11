import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [33],
	set: Set,

	name: {
		'fr-fr': "Nidorino",
		'en-us': "Nidorino",
		'es-es': "Nidorino",
		'it-it': "Nidorino",
		'pt-br': "Nidorino",
		'de-de': "Nidorino"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],
	evolveFrom: {
		'fr-fr': "Nidoran♂",
		'en-us': "Nidoran♂",
		'es-es': "Nidoran♂",
		'it-it': "Nidoran♂",
		'pt-br': "Nidoran♂",
		'de-de': "Nidoran♂"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'fr-fr': "Croc Aiguisé",
			'en-us': "Sharp Fang",
			'es-es': "Colmillo Afilado",
			'it-it': "Zannaffilata",
			'pt-br': "Presa Afiada",
			'de-de': "Scharfe Fänge"
		},

		damage: 30
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'fr-fr': "Cornes Surpuissantes",
			'en-us': "Superpowered Horns",
			'es-es': "Cuernos Superpoderosos",
			'it-it': "Corna Superpotenziate",
			'pt-br': "Chifres Superpoderosos",
			'de-de': "Superstarke Hörner"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "It's nervous and quick to act aggressively. The potency of its poison increases along with the level of adrenaline present in its body.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733628,
				tcgplayer: 516016,
				cardtrader: 261199
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733628,
				tcgplayer: 516016,
				cardtrader: 261199
			}
		},
	],

	illustrator: "Shiburingaru",

	
}

export default card
