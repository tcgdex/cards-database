import { Card } from "models/database/card"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Poké Ball",
		'fr-fr': "Poké Ball",
		'es-es': "Poké Ball",
		'it-it': "Poké Ball",
		'de-de': "Pokéball",
		'pt-br': "Poké Bola",
		'ko-kr': "몬스터볼"
	},

	illustrator: "Ryo Ueda",
	rarity: "None",
	category: "Trainer",

	effect: {
		'en-us': "Put a random Basic Pokémon from your deck into your hand.",
		'fr-fr': "Ajoutez au hasard un Pokémon de base de votre deck à votre main.",
		'es-es': "Pon 1 Pokémon Básico aleatorio de tu baraja en tu mano.",
		'it-it': "Prendi un Pokémon Base a caso dal tuo mazzo e aggiungilo alle carte che hai in mano.",
		'de-de': "Nimm 1 zufälliges Basis-Pokémon aus deinem Deck auf deine Hand.",
		
		'ko-kr': "자신의 덱에서 기본 포켓몬을 랜덤으로 1장 패로 가져온다.",
		'pt-br': "Coloque 1 Pokémon Básico aleatório do seu baralho na sua mão."
	},

	trainerType: "Item",
	boosters: []
}

export default card
