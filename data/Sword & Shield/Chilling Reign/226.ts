import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Fan of Waves",
		fr: "Éventail Houleux",
		es: "Abanico de Olas",
		it: "Ventaglio delle Onde",
		pt: "Leque de Ondas",
		de: "Wellenfächer"
	},

	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		en: "Put a Special Energy attached to 1 of your opponent's Pokémon on the bottom of their deck.",
		fr: "Placez une Énergie spéciale attachée à l'un des Pokémon de votre adversaire en dessous du deck de celui-ci.",
		es: "Pon 1 Energía Especial unida a 1 de los Pokémon de tu rival en la parte inferior de su baraja.",
		it: "Prendi un'Energia speciale assegnata a uno dei Pokémon del tuo avversario e mettila in fondo al suo mazzo.",
		pt: "Coloque 1 Energia Especial ligada a 1 dos Pokémon do seu oponente como a carta de baixo do baralho dele(a).",
		de: "Lege 1 an ein Pokémon deines Gegners angelegte Spezial-Energie unter sein Deck."
	},

	trainerType: "Item",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	illustrator: "sadaji",
	regulationMark: "E",

	thirdParty: {
		cardmarket: 567334,
		tcgplayer: 241876
	}
}

export default card
