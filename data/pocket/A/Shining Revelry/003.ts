import { Card } from "models/database/card"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Beedrill ex",
		'fr-fr': "Dardargnan-ex",
		'es-es': "Beedrill ex",
		'it-it': "Beedrill-ex",
		'de-de': "Bibor-ex",
		'pt-br': "Beedrill ex",
		'ko-kr': "독침붕 ex"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "Four Diamond",
	category: "Pokemon",

	dexId: [15],
	hp: 170,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Kakuna"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Crushing Spear",
			'fr-fr': "Lance Destructrice",
			'es-es': "Lanza Devastadora",
			'it-it': "Lancia Devastante",
			'de-de': "Vernichtender Speer",
			'pt-br': "Lança Aniquiladora",
			'ko-kr': "크래시스피어"
		},

		damage: 80,
		cost: ["Grass", "Grass"],

		effect: {
			'en-us': "Discard a random Energy from your opponent's Active Pokémon.",
			'fr-fr': "Défaussez au hasard une Énergie du Pokémon Actif de votre adversaire.",
			'es-es': "Descarta 1 Energía aleatoria del Pokémon Activo de tu rival.",
			'it-it': "Rimuovi un'Energia a caso dal Pokémon attivo del tuo avversario.",
			'de-de': "Lege 1 zufällige Energie vom Aktiven Pokémon deines Gegners ab.",
			'pt-br': "Descarte 1 Energia aleatória do Pokémon Ativo do seu oponente.",
			'ko-kr': "상대의 배틀 포켓몬에서 에너지를 랜덤으로 1개 트래쉬한다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card