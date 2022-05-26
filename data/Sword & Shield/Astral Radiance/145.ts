import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Gutsy Pickaxe",
		fr: "Piolet Courageux",
		es: "Piqueta Atrevida",
		it: "Piccone Baldo",
		pt: "Picareta Corajosa",
		de: "Mutige Spitzhacke"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Reveal the top card of your deck. If that card is a Fighting Energy card, attach it to 1 of your Benched Pokémon. If it is not a Fighting Energy card, put it into your hand.",
		fr: "Montrez la carte du dessus de votre deck. Si cette carte-là est une carte Énergie Fighting, attachez-la à l'un de vos Pokémon de Banc. Si ce n'est pas une carte Énergie Fighting, ajoutez-la à votre main.",
		es: "Enseña la primera carta de tu baraja. Si es una carta de Energía Fighting, únela a 1 de tus Pokémon en Banca. Si no es una carta de Energía Fighting, ponla en tu mano.",
		it: "Mostra la prima carta del tuo mazzo. Se quella carta è una carta Energia Fighting, assegnala a uno dei tuoi Pokémon in panchina. Se non è una carta Energia Fighting, aggiungila alle carte che hai in mano.",
		pt: "Revele a carta de cima do seu baralho. Se aquela carta for uma carta de Energia Fighting, ligue-a a 1 dos seus Pokémon no Banco. Se não for uma carta de Energia Fighting, coloque-a na sua mão.",
		de: "Zeige deinem Gegner die oberste Karte deines Decks. Wenn jene Karte eine Fighting-Energiekarte ist, lege sie an 1 Pokémon auf deiner Bank an. Wenn jene Karte keine Fighting-Energiekarte ist, nimm sie auf deine Hand."
	},

	trainerType: "Item",
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card