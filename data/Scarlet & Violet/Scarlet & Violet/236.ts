import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		en: "Jacq",
		fr: "Jacq",
		es: "Cinio",
		it: "Zim",
		pt: "Jacques",
		de: "Jim"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		en: "Search your deck for up to 2 Evolution Pokémon, reveal them, and put them into your hand. Then, shuffle your deck.",
		fr: "Cherchez dans votre deck jusqu'à 2 Pokémon Évolutifs, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		es: "Busca en tu baraja hasta 2 Pokémon Evolución, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
		it: "Cerca nel tuo mazzo fino a due Pokémon Evoluzione, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		pt: "Procure por até 2 Pokémon de Evolução no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho.",
		de: "Durchsuche dein Deck nach bis zu 2 Entwicklungs-Pokémon, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Supporter",
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "GIDORA",

	thirdParty: {
        cardmarket: 702471,
        tcgplayer: 490094
    }
}

export default card