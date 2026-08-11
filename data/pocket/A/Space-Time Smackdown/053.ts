import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Magnezone",
		'fr-fr': "Magnézone",
		'es-es': "Magnezone",
		'it-it': "Magnezone",
		'de-de': "Magnezone",
		'pt-br': "Magnezone",
		'ko-kr': "자포코일"
	},

	illustrator: "Yoshinobu Saito",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [462],
	hp: 140,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Magneton"
	},

	description: {
		'en-us': "As it zooms through the sky, this Pokémon seems to be receiving signals of unknown origin while transmitting signals of unknown purpose.",
		'fr-fr': "Il parcourt le ciel en émettant et en\nrecevant des ondes bien mystérieuses.",
		'es-es': "Se dice que mientras vuela emite unas ondas eléctricas\nmisteriosas, a la vez que recibe otras ondas desconocidas.",
		'it-it': "Vola per il cielo inviando misteriose onde\nelettromagnetiche e ricevendo onde sconosciute.",
		'de-de': "Es heißt, dass es beim Herumfliegen mysteriöse Funkwellen\naussende und unbekannte Wellen empfange.",
		'pt-br': "Dizem que enquanto voa pelo céu, emite ondas\neletromagnéticas misteriosas enquanto recebe\nondas desconhecidas.",
		'ko-kr': "괴전파를 발신하며 하늘을 날면서\n미지의 전파를 수신한다고 한다."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'en-us': "Thunder Blast",
			'fr-fr': "Grondement de Tonnerre",
			'es-es': "Estallido Trueno",
			'it-it': "Tuonobomba",
			'de-de': "Donnerkeil",
			'pt-br': "Explosão de Trovões",
			'ko-kr': "썬더블라스트"
		},

		damage: 110,
		cost: ["Lightning", "Colorless", "Colorless"],

		effect: {
			'en-us': "Discard a {L} Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie {L} de ce Pokémon.",
			'es-es': "Descarta 1 Energía {L} de este Pokémon.",
			'it-it': "Rimuovi un'Energia {L} da questo Pokémon.",
			'de-de': "Lege 1 {L}-Energie von diesem Pokémon ab.",
			'pt-br': "Descarte 1 Energia {L} deste Pokémon.",
			'ko-kr': "이 포켓몬에서 {L}에너지를 1개 트래쉬한다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["dialga", "palkia"]
}

export default card
