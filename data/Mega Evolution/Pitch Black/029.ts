import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Slowpoke",
		fr: "Ramoloss",
		es: "Slowpoke",
		'es-mx': "Slowpoke",
		de: "Flegmon",
		it: "Slowpoke",
		pt: "Slowpoke"
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
			en: "All-You-Can-Yeet",
			fr: "Balance Tout",
			es: "Bufé de Descartes",
			'es-mx': "Descarte a Granel",
			de: "Weg damit",
			it: "Scarta a Volontà",
			pt: "Taca à Vontade"
		},

		cost: ["Psychic"],

		effect: {
			en: "You may discard any number of cards from your hand.",
			fr: "Vous pouvez défausser le nombre voulu de cartes de votre main.",
			es: "Puedes descartar cualquier cantidad de cartas de tu mano.",
			'es-mx': "Puedes descartar cualquier cantidad de cartas de tu mano.",
			de: "Du kannst beliebig viele Karten aus deiner Hand auf deinen Ablagestapel legen.",
			it: "Puoi scartare un numero qualsiasi di carte che hai in mano.",
			pt: "Você pode descartar qualquer número de cartas da sua mão."
		}
	}, {
		name: {
			en: "Headbutt",
			fr: "Coup d'Boule",
			es: "Golpe Cabeza",
			'es-mx': "Golpe Cabeza",
			de: "Kopfnuss",
			it: "Bottintesta",
			pt: "Cabeçada"
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
