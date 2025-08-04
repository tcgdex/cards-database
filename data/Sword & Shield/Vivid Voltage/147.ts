import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Bea",
		fr: "Faïza",
		es: "Judith",
		it: "Fabia",
		pt: "Bia",
		de: "Saida"
	},

	illustrator: "take",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Discard the top 5 cards of your deck, and attach any Energy cards you discarded in this way to your Benched Fighting Pokémon in any way you like.",
		fr: "Défaussez les 5 cartes du dessus de votre deck et attachez les cartes Énergie défaussées de cette façon à vos Pokémon Fighting de Banc comme il vous plaît.",
		es: "Descarta las 5 primeras cartas de tu baraja y une cualquier carta de Energía que hayas descartado de esta manera a tus Pokémon Fighting en Banca de la manera que desees.",
		it: "Scarta le prime cinque carte del tuo mazzo e assegna ai tuoi Pokémon Fighting in panchina le carte Energia che hai appena scartato nel modo che preferisci.",
		pt: "Descarte as 5 cartas de cima do seu baralho e ligue quaisquer cartas de Energia que você descartou desta forma aos seus Pokémon Fighting no Banco como desejar.",
		de: "Lege die obersten 5 Karten deines Decks auf deinen Ablagestapel und lege alle Energiekarten, die du auf diese Weise auf deinen Ablagestapel gelegt hast, beliebig an die Fighting-Pokémon auf deiner Bank an."
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
		cardmarket: 512445,
		tcgplayer: 226498
	}
}

export default card
