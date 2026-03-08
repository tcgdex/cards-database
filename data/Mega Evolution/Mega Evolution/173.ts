import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Night Stretcher",
		fr: "Civière Nocturne",
		de: "Nachttrage",
		it: "Barella Notturna",
		es: "Camilla Nocturna",
		pt: "Maca Noturna",
		'es-mx': "Camilla Nocturna"
	},

	illustrator: "Toyste Beach",
	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		en: "Put a Pokémon or a Basic Energy card from your discard pile into your hand.",
		fr: "Ajoutez un Pokémon ou une carte Énergie de base de votre pile de défausse à votre main.",
		de: "Nimm 1 Pokémon oder 1 Basis-Energiekarte aus deinem Ablagestapel auf deine Hand.",
		it: "Prendi un Pokémon o una carta Energia base dalla tua pila degli scarti e aggiungi la carta a quelle che hai in mano.",
		es: "Pon 1 Pokémon o 1 carta de Energía Básica de tu pila de descartes en tu mano.",
		pt: "Coloque um Pokémon ou uma carta de Energia Básica da sua pilha de descarte na sua mão.",
		'es-mx': "Pon 1 Pokémon o 1 carta de Energía Básica de tu pila de descartes en tu mano."
	},

	trainerType: "Item",
	regulationMark: "H",

	variants: [
		{
			type: "holo"
		},
	],

	thirdParty: {
		tcgplayer: 654512,
		cardmarket: 851244
	}
}

export default card