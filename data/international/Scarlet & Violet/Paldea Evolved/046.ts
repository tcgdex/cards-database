import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [225],
	set: Set,

	name: {
		'fr-fr': "Cadoizo",
		'en-us': "Delibird",
		'es-es': "Delibird",
		'it-it': "Delibird",
		'pt-br': "Delibird",
		'de-de': "Botogel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Double Pioche",
			'en-us': "Double Draw",
			'es-es': "Roba Doble",
			'it-it': "Pescata Doppia",
			'pt-br': "Compra Dupla",
			'de-de': "Zweifachzug"
		},

		effect: {
			'fr-fr': "Piochez 2 cartes.",
			'en-us': "Draw 2 cards.",
			'es-es': "Roba 2 cartas.",
			'it-it': "Pesca due carte.",
			'pt-br': "Compre 2 cartas.",
			'de-de': "Ziehe 2 Karten."
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			'fr-fr': "Aile Glace",
			'en-us': "Ice Wing",
			'es-es': "Ala Gélida",
			'it-it': "Alagelata",
			'pt-br': "Asa de Gelo",
			'de-de': "Frostschwinge"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715520,
				tcgplayer: 497457,
				cardtrader: 248642
			}
		},
		{
			type: 'normal',
			stamp: ['snowflake'],
			thirdParty: {
				cardmarket: 845403
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715520,
				tcgplayer: 497457,
				cardtrader: 248642
			}
		},
	],

	illustrator: "miki kudo",

	description: {
		'en-us': "It carries food all day long. There are tales about lost people who were saved by the food it had.",
	},
}

export default card
