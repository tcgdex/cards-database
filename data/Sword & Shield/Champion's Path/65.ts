import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Sonia",
		fr: "Sonya",
		es: "Sonia",
		it: "Sonia",
		pt: "Sônia",
		de: "Sania"
	},

	illustrator: "Yusuke Ohmura",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Search your deck for up to 2 Basic Pokémon or up to 2 basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
		fr: "Cherchez dans votre deck jusqu'à 2 Pokémon de base ou jusqu'à 2 cartes Énergie de base, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		es: "Busca en tu baraja hasta 2 cartas de Pokémon Básico o hasta 2 cartas de Energía Básica, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
		it: "Cerca nel tuo mazzo fino a due Pokémon Base o due carte Energia base, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		pt: "Procure por até 2 Pokémon Básicos ou até 2 cartas de Energia básica no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho.",
		de: "Durchsuche dein Deck nach bis zu 2 Basis-Pokémon oder bis zu 2 Basis-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Supporter",
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 500180,
		tcgplayer: 223065
	}
}

export default card
