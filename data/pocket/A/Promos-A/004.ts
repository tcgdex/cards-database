import { Card } from "models/database/card"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Pokédex",
		'fr-fr': "Pokédex",
		'es-es': "Pokédex",
		'it-it': "Pokédex",
		'de-de': "Pokédex",
		'pt-br': "Pokédex",
		'ko-kr': "포켓몬 도감"
	},

	illustrator: "Ryo Ueda",
	rarity: "None",
	category: "Trainer",

	effect: {
		'en-us': "Look at the top 3 cards of your deck.",
		'fr-fr': "Regardez la première carte du dessus de votre deck.",
		'es-es': "Mira la primera carta de tu baraja.",
		'it-it': "Guarda la prima carta del tuo mazzo.",
		'de-de': "Schau dir die oberste Karte deines Decks an.",
		'pt-br': "Olhe a 1 carta de cima do seu baralho.",
		'ko-kr': "자신의 덱을 위에서부터 1장 보고 원래대로 되돌린다."
	},

	trainerType: "Item",
	boosters: []
}

export default card
