import { Card } from "models/database/card"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Celestic Town Elder",
		'fr-fr': "Doyenne de Célestia",
		'es-es': "Anciana de Pueblo Caelestis",
		'it-it': "Anziana di Memoride",
		'de-de': "Älteste von Elyses",
		'pt-br': "Anciã da Cidade Celestic",
		'ko-kr': "봉신마을의 장로"
	},

	illustrator: "Yuu Nishida",
	rarity: "Two Star",
	category: "Trainer",

	effect: {
		'en-us': "Put 1 random Basic Pokémon from your discard pile into your hand.",
		'fr-fr': "Ajoutez au hasard à votre main un Pokémon de base de votre pile de défausse.",
		'es-es': "Pon 1 Pokémon Básico aleatorio de tu pila de descartes en tu mano.",
		'it-it': "Prendi un Pokémon Base a caso dalla tua pila degli scarti e aggiungilo alle carte che hai in mano.",
		'de-de': "Nimm 1 zufälliges Basis-Pokémon aus deinem Ablagestapel auf deine Hand.",
		'pt-br': "Coloque 1 Pokémon Básico aleatório da sua pilha de descarte na sua mão.",
		'ko-kr': "자신의 트래쉬에서 기본 포켓몬eul_reul 랜덤으로 1장 패로 가져온다."
	},

	trainerType: "Supporter"
}

export default card