import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Zebstrika",
		'fr-fr': "Zéblitz",
		'de-de': "Zebritz",
		'it-it': "Zebstrika",
		'es-es': "Zebstrika",
		'pt-br': "Zebstrika"
	},

	illustrator: "Krgc",
	rarity: "Promo",
	category: "Pokemon",
	dexId: [523],
	hp: 120,
	types: ["Lightning"],
	stage: "Stage1",

	evolveFrom: {
		'en-us': "Blitzle",
		'fr-fr': "Zébibron",
		'de-de': "Elezeba",
		'it-it': "Blitzle",
		'es-es': "Blitzle",
		'es-mx': "Blitzle",
		'pt-br': "Blitzle"
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Full Speed",
			'fr-fr': "Pleine Vitesse",
			'de-de': "Full Speed",
			'it-it': "Piena Velocità",
			'es-es': "A Toda Velocidad",
			'pt-br': "Velocidade Máxima"
	},

		effect: {
			'en-us': "Discard your hand and draw 6 cards.",
			'fr-fr': "Défaussez votre main, puis piochez 6 cartes.",
			'de-de': "Lege deine Handkarten auf deinen Ablagestapel und ziehe 6 Karten.",
			'it-it': "Scarta le carte che hai in mano e pesca sei carte.",
			'es-es': "Descarta las cartas de tu mano y roba 6 cartas.",
			'pt-br': "Descarte a sua mão e compre 6 cartas."
	}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Head Bolt",
			'fr-fr': "Éclair Frontal",
			'de-de': "Kopf-Blitz",
			'it-it': "Zuccalampo",
			'es-es': "Rayo de Cabeza",
			'pt-br': "Raio de Cabeça"
	},

		damage: 70
	}],

	weaknesses: [{
		type: "Fighting",
		value: "x2"
	}],

	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 826139,
				tcgplayer: 637669
			},
		}
	]
}

export default card
