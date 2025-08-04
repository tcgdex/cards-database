import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Piers",
		fr: "Peterson",
		es: "Nerio",
		it: "Ginepro",
		pt: "Pietro",
		de: "Nezz"
	},

	illustrator: "kirisAki",
	rarity: "Ultra Rare",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Search your deck for an Energy card and a Darkness Pokémon, reveal them, and put them into your hand. Then, shuffle your deck.",
		fr: "Cherchez dans votre deck une carte Énergie et un Pokémon Darkness, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		es: "Busca en tu baraja 1 carta de Energía y 1 carta de Pokémon Darkness, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
		it: "Cerca nel tuo mazzo una carta Energia e un Pokémon Darkness, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		pt: "Procure por 1 carta de Energia e 1 Pokémon Darkness no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho.",
		de: "Durchsuche dein Deck nach 1 Energiekarte und 1 Darkness-Pokémon, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Supporter",
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 483704,
		tcgplayer: 219309
	}
}

export default card
