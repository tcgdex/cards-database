import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Tarragon",
		fr: "Taragon",
		es: "Estragón",
		de: "Tarragon",
		it: "Tarragon",
		pt: "Tarragon"
	},
	set: Set,
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Supporter",
	regulationMark: "J",
	illustrator: "Akira Komayama",
	effect: {
		en: "Put up to 4 in any combination of [F] Pokémon and Basic [F] Energy cards from your discard pile into your hand.",
		fr: "Ajoutez à votre main une combinaison d'un maximum de 4 Pokémon [F] et/ou cartes Énergie [F] de base de votre pile de défausse.",
		es: "Pon, en cualquier combinación, hasta 4 cartas de Pokémon [F] y de Energía [F] Básica de tu pila de descartes en tu mano.",
		de: "Nimm eine beliebige Kombination aus bis zu 4 [F]-Pokémon und Basis-[F]-Energiekarten aus deinem Ablagestapel auf deine Hand.",
		it: "Prendi fino a quattro fra Pokémon [F] e carte Energia base [F] in qualsiasi combinazione dalla tua pila degli scarti e aggiungili alle carte che hai in mano.",
		pt: "Coloque até 4 cartas de Pokémon [F] e de Energia [F] Básica da sua pilha de descarte na sua mão em qualquer combinação."
	},
	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],
	thirdParty: {
		tcgplayer: 684344,
		cardmarket: 877502
	}
}

export default card
