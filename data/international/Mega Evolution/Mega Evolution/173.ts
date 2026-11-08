import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Night Stretcher",
		'fr-fr': "Civière Nocturne",
		'de-de': "Nachttrage",
		'it-it': "Barella Notturna",
		'es-es': "Camilla Nocturna",
		'pt-br': "Maca Noturna",
		'es-mx': "Camilla Nocturna"
	},

	illustrator: "Toyste Beach",
	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		'en-us': "Put a Pokémon or a Basic Energy card from your discard pile into your hand.",
		'fr-fr': "Ajoutez un Pokémon ou une carte Énergie de base de votre pile de défausse à votre main.",
		'de-de': "Nimm 1 Pokémon oder 1 Basis-Energiekarte aus deinem Ablagestapel auf deine Hand.",
		'it-it': "Prendi un Pokémon o una carta Energia base dalla tua pila degli scarti e aggiungi la carta a quelle che hai in mano.",
		'es-es': "Pon 1 Pokémon o 1 carta de Energía Básica de tu pila de descartes en tu mano.",
		'pt-br': "Coloque um Pokémon ou uma carta de Energia Básica da sua pilha de descarte na sua mão.",
		'es-mx': "Pon 1 Pokémon o 1 carta de Energía Básica de tu pila de descartes en tu mano."
	},

	trainerType: "Item",
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 851244,
				tcgplayer: 654512
			}
		},
	],
}

export default card
