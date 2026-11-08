import { Card } from "models/database/card"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Arceus",
		'fr-fr': "Arceus",
		'es-es': "Arceus",
		'it-it': "Arceus",
		'de-de': "Arceus",
		'pt-br': "Arceus",
		'ko-kr': "아르세우스"
	},

	illustrator: "Nurikabe",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [493],
	hp: 120,
	types: ["Colorless"],

	description: {
		'en-us': "According to the legends of Sinnoh, this Pokémon emerged from an egg and shaped all there is in this world.",
		'fr-fr': "La mythologie de Sinnoh veut\nqu'il soit apparu sous forme\nd'Œuf et ait créé le monde.",
		'es-es': "Según la mitología de Sinnoh, Arceus surgió\nde un huevo y después creó todo el mundo.",
		'it-it': "Secondo la mitologia di Sinnoh, Arceus è\nnato da un uovo e poi ha creato il mondo.",
		'de-de': "In den Legenden Sinnohs heißt es, es sei aus einem Ei\ngeschlüpft und hätte die gesamte Welt geschaffen.",
		'pt-br': "De acordo com lendas de Sinnoh, este Pokémon surgiu\nde um ovo e construiu tudo o que há neste mundo.",
		'ko-kr': "알에서 모습을 나타내\n모든 세계를 창조했다고\n신오신화에서 묘사된다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Power Blast",
			'fr-fr': "Violente Déflagration",
			'es-es': "Estallido Vigoroso",
			'it-it': "Forzacolpo",
			'de-de': "Powerschuss",
			'pt-br': "Explosão Poderosa",
			'ko-kr': "파워블라스트"
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		effect: {
			'en-us': "Discard a random Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie au hasard de ce Pokémon.",
			'es-es': "Descarta 1 Energía aleatoria de este Pokémon.",
			'it-it': "Rimuovi un'Energia a caso da questo Pokémon.",
			'de-de': "Lege 1 zufällige Energie von diesem Pokémon ab.",
			
			'ko-kr': "이 포켓몬에서 에너지를 랜덤으로 1개 트래쉬한다.",
			'pt-br': "Descarte 1 Energia aleatória deste Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card
