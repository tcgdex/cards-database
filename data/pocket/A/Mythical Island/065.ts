import { Card } from "models/database/card"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mythical Slab",
		'fr-fr': "Dalle Fabuleuse",
		'es-es': "Losa Singular",
		'it-it': "Pietra Misteriosa",
		'de-de': "Mythische Tafel",
		'pt-br': "Placa Mística",
		'ko-kr': "환상의 석판"
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		'en-us': "Look at the top card of your deck. If that card is a {P} Pokémon, put it into your hand. If it is not a {P} Pokémon, put it on the bottom of your deck.",
		'fr-fr': "Regardez la carte du dessus de votre deck. Si cette carte est un Pokémon {P}, ajoutez-la à votre main. Si ce n'est pas un Pokémon {P}, placez-la en dessous de votre deck.",
		'es-es': "Mira la primera carta de tu baraja. Si es un Pokémon {P}, ponla en tu mano. Si no es un Pokémon {P}, ponla en la parte inferior de tu baraja.",
		'it-it': "Guarda la prima carta del tuo mazzo. Se quella carta è un Pokémon {P}, aggiungila alle carte che hai in mano. Se non è un Pokémon {P}, mettila in fondo al tuo mazzo.",
		'de-de': "Schau dir die oberste Karte deines Decks an. Ist die Karte ein {P}-Pokémon, nimm sie auf die Hand. Ist die Karte kein {P}-Pokémon, lege sie unter dein Deck.",
		'pt-br': "Olhe a carta de cima do seu baralho. Se aquela carta for um Pokémon {P}, coloque-a na sua mão. Se não for um Pokémon {P}, coloque-a como a carta de baixo do seu baralho.",
		'ko-kr': "자신의 덱을 위에서부터 1장 보고 그 카드가 {P}포켓몬이라면 패로 가져온다. {P}포켓몬이 아니라면 덱의 아래로 되돌린다."
	},

	trainerType: "Item",
	rarity: "Two Diamond"
}

export default card
