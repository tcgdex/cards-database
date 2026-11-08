import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [403],
	set: Set,

	name: {
		'en-us': "Shinx",
		'fr-fr': "Lixy",
		'es-es': "Shinx",
		'it-it': "Shinx",
		'pt-br': "Shinx",
		'de-de': "Sheinux"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Curiosity",
			'fr-fr': "Curiosité",
			'es-es': "Curiosidad",
			'it-it': "Curiosità",
			'pt-br': "Curiosidade",
			'de-de': "Neugier"
		},

		effect: {
			'en-us': "Your opponent reveals their hand.",
			'fr-fr': "Votre adversaire montre sa main.",
			'es-es': "Tu rival enseña las cartas de su mano.",
			'it-it': "Il tuo avversario mostra le carte che ha in mano.",
			'pt-br': "Seu oponente revela a mão dele.",
			'de-de': "Dein Gegner zeigt dir seine Handkarten."
		}
	}, {
		cost: ["Lightning", "Lightning"],

		name: {
			'en-us': "Static Shock",
			'fr-fr': "Choc Statique",
			'es-es': "Impacto Estático",
			'it-it': "Shock Statico",
			'pt-br': "Choque de Estática",
			'de-de': "Statischer Schock"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "The extension and contraction of its muscles generates electricity. Its fur glows when it's in trouble.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769240,
				tcgplayer: 550110
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769240,
				tcgplayer: 550110
			}
		},
	],

	illustrator: "Yuu Nishida",

}

export default card