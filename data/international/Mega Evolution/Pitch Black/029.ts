import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Slowpoke",
		'fr-fr': "Ramoloss",
		'es-es': "Slowpoke",
		'es-mx': "Slowpoke",
		'de-de': "Flegmon",
		'it-it': "Slowpoke",
		'pt-br': "Slowpoke"
	},

	illustrator: "Nelnal",
	rarity: "Common",
	category: "Pokemon",
	dexId: [79],
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "All-You-Can-Yeet",
			'fr-fr': "Balance Tout",
			'es-es': "Bufé de Descartes",
			'es-mx': "Descarte a Granel",
			'de-de': "Weg damit",
			'it-it': "Scarta a Volontà",
			'pt-br': "Taca à Vontade"
		},

		cost: ["Psychic"],

		effect: {
			'en-us': "You may discard any number of cards from your hand.",
			'fr-fr': "Vous pouvez défausser le nombre voulu de cartes de votre main.",
			'es-es': "Puedes descartar cualquier cantidad de cartas de tu mano.",
			'es-mx': "Puedes descartar cualquier cantidad de cartas de tu mano.",
			'de-de': "Du kannst beliebig viele Karten aus deiner Hand auf deinen Ablagestapel legen.",
			'it-it': "Puoi scartare un numero qualsiasi di carte che hai in mano.",
			'pt-br': "Você pode descartar qualquer número de cartas da sua mão."
		}
	}, {
		name: {
			'en-us': "Headbutt",
			'fr-fr': "Coup d'Boule",
			'es-es': "Golpe Cabeza",
			'es-mx': "Golpe Cabeza",
			'de-de': "Kopfnuss",
			'it-it': "Bottintesta",
			'pt-br': "Cabeçada"
		},

		cost: ["Colorless", "Colorless"],
		damage: 20
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],
	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895816,
				tcgplayer: 704786
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895816,
				tcgplayer: 704786
			}
		},
	],
}

export default card
