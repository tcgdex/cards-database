import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [967],
	set: Set,

	name: {
		'en-us': "Cyclizar",
		'fr-fr': "Motorizard",
		'es-es': "Cyclizar",
		'it-it': "Cyclizar",
		'pt-br': "Cyclizar",
		'de-de': "Mopex"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Tail Snap",
			'fr-fr': "Coud'Queue Sec",
			'es-es': "Pinza Cola",
			'it-it': "Schioccacoda",
			'pt-br': "Surpresa de Cauda",
			'de-de': "Schweifhieb"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Speed Attack",
			'fr-fr': "Attaque Rapide",
			'es-es': "Ataque Fugaz",
			'it-it': "Attacco Veloce",
			'pt-br': "Ataque em Velocidade",
			'de-de': "Tempoangriff"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785981,
				tcgplayer: 567372
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785981,
				tcgplayer: 567372
			}
		},
	],

	illustrator: "Nurikabe",

}

export default card
