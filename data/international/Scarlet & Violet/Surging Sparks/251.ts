import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Night Stretcher",
		'fr-fr': "Civière Nocturne",
		'es-es': "Camilla Nocturna",
		'it-it': "Barella Notturna",
		'pt-br': "Maca Noturna",
		'de-de': "Nachttrage"
	},

	rarity: "Hyper rare",
	category: "Trainer",

	effect: {
		'en-us': "Put a Pokémon or a Basic Energy card from your discard pile into your hand.",
		'fr-fr': "Ajoutez un Pokémon ou une carte Énergie de base de votre pile de défausse à votre main.",
		'es-es': "Pon 1 Pokémon o 1 carta de Energía Básica de tu pila de descartes en tu mano.",
		'it-it': "Prendi un Pokémon o una carta Energia base dalla tua pila degli scarti e aggiungi la carta a quelle che hai in mano.",
		'pt-br': "Coloque um Pokémon ou uma carta de Energia Básica da sua pilha de descarte na sua mão.",
		'de-de': "Nimm 1 Pokémon oder 1 Basis-Energiekarte aus deinem Ablagestapel auf deine Hand."
	},

	trainerType: "Item",
	regulationMark: "H",

	variants: [
	{
		type: "holo",
		foil: "gold",
		thirdParty: {
			cardmarket: 794624,
			tcgplayer: 593859
		}
	},
],

	illustrator: "Toyste Beach",

}

export default card
