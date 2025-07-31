import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Pokédex",
		fr: "Pokédex",
		es: "Pokédex",
		it: "Pokédex",
		de: "Pokédex",
		'pt-br': "Pokédex",
		ko: "포켓몬 도감"
	},

	illustrator: "Yuu Nishida",
	rarity: "One Diamond",
	category: "Trainer",

	effect: {
		en: "Look at the top 3 cards of your deck.",
		fr: "Regardez la première carte du dessus de votre deck.",
		es: "Mira la primera carta de tu baraja.",
		it: "Guarda la prima carta del tuo mazzo.",
		de: "Schau dir die oberste Karte deines Decks an.",
		'pt-br': "Olhe a 1 carta de cima do seu baralho.",
		ko: "자신의 덱을 위에서부터 1장 보고 원래대로 되돌린다."
	},

	trainerType: "Item",
	boosters: []
}

export default card