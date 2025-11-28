import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		en: "Arven",
		fr: "Pepper",
		es: "Damián",
		it: "Pepe",
		pt: "Arven",
		de: "Pepper"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		en: "Search your deck for an Item card and a Pokémon Tool card, reveal them, and put them into your hand. Then, shuffle your deck.",
		fr: "Cherchez dans votre deck une carte Objet et une carte Outil Pokémon, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		es: "Busca en tu baraja 1 carta de Objeto y 1 carta de Herramienta Pokémon, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
		it: "Cerca nel tuo mazzo una carta Strumento e una carta Oggetto Pokémon, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		pt: "Procure por uma carta de Item e uma carta de Ferramenta Pokémon no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
		de: "Durchsuche dein Deck nach 1 Itemkarte und 1 Pokémon-Ausrüstung, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Supporter",
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "GIDORA",

	thirdParty: {
        cardmarket: 702462,
        tcgplayer: 490093
    }
}

export default card