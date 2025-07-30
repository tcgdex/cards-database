import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Sidney",
		fr: "Damien",
		es: "Sixto",
		it: "Fosco",
		pt: "Sidney",
		de: "Ulrich"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Your opponent reveals their hand. Discard up to 2 in any combination of Pokémon Tool cards, Special Energy cards, and Stadium cards from it.",
		fr: "Votre adversaire dévoile sa main. Défaussez-en une combinaison d'un maximum de 2 cartes Outil Pokémon, cartes Énergie spéciale ou cartes Stade.",
		es: "Tu rival enseña las cartas de su mano. Descarta, en cualquier combinación, hasta 2 cartas de Herramienta Pokémon, cartas de Energía Especial y cartas de Estadio de su mano.",
		it: "Il tuo avversario mostra le carte che ha in mano. Scarta fino a due carte Oggetto Pokémon, carte Energia speciale e carte Stadio presenti tra esse in qualsiasi combinazione.",
		pt: "Seu oponente revela a própria mão. Descarte até 2 cartas de Ferramenta Pokémon, cartas de Energia Especial e cartas de Estádio em qualquer combinação da mão dele(a).",
		de: "Dein Gegner zeigt dir seine Handkarten. Lege eine beliebige Kombination aus bis zu 2 Pokémon-Ausrüstungen, Spezial-Energiekarten und Stadionkarten aus seiner Hand auf seinen Ablagestapel."
	},

	trainerType: "Supporter",
	regulationMark: "E",
	illustrator: "Hideki Ishikawa",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582977
	}
}

export default card