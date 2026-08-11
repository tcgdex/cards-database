import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Rotom Dex",
		'fr-fr': "Motisma-Dex",
		'es-es': "RotomDex",
		'it-it': "Pokédex Rotom",
		'de-de': "Rotom-Pokédex",
		'pt-br': "Pokédex Rotom",
		'ko-kr': "로토무도감"
	},

	illustrator: "5ban Graphics",
	rarity: "Two Diamond",
	category: "Trainer",

	effect: {
		'en-us': "Look at the top card of your deck. Then, you may shuffle your deck.",
		'fr-fr': "Regardez la carte du dessus de votre deck. Ensuite, vous pouvez mélanger votre deck.",
		'es-es': "Mira la primera carta de tu baraja. Después, puedes barajar las cartas de tu baraja.",
		'it-it': "Guarda la prima carta del tuo mazzo. Poi, puoi rimischiare le carte del tuo mazzo.",
		'de-de': "Schau dir die oberste Karte deines Decks an. Anschließend kannst du dein Deck mischen.",
		
		'ko-kr': "자신의 덱을 위에서부터 1장 보고 원래대로 되돌린다. 원한다면 자신의 덱을 섞는다.",
		'pt-br': "Olhe 1 carta de cima do seu baralho. Em seguida, você pode embaralhar o seu baralho."
	},

	trainerType: "Item",
	boosters: ["solgaleo"]
}

export default card