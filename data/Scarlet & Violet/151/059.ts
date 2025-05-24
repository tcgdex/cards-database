import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [59],
	set: Set,

	name: {
		fr: "Arcanin",
		en: "Arcanine",
		es: "Arcanine",
		it: "Arcanine",
		pt: "Arcanine",
		de: "Arkani"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			fr: "Torrent Torride",
			en: "Torrid Torrent",
			es: "Torrente Tórrido",
			it: "Torrente Ardente",
			pt: "Dilúvio Tórrido",
			de: "Heiße Flut"
		},

		effect: {
			fr: "Attachez jusqu'à 2 cartes Énergie {R} de base de votre pile de défausse à ce Pokémon.",
			en: "Attach up to 2 Basic {R} Energy cards from your discard pile to this Pokémon.",
			es: "Une hasta 2 cartas de Energía {R} Básica de tu pila de descartes a este Pokémon.",
			it: "Assegna a questo Pokémon fino a due carte Energia base {R} dalla tua pila degli scarti.",
			pt: "Ligue até 2 cartas de Energia {R} Básica da sua pilha de descarte a este Pokémon.",
			de: "Lege bis zu 2 Basis-{R}-Energiekarten aus deinem Ablagestapel an dieses Pokémon an."
		},

		damage: 30
	}, {
		cost: ["Fire", "Fire", "Colorless", "Colorless"],

		name: {
			fr: "Croc Dynamite",
			en: "Dynamite Fang",
			es: "Colmillo Dinamita",
			it: "Zannadinamite",
			pt: "Presa Dinamite",
			de: "Dynamitfänge"
		},

		effect: {
			fr: "Défaussez 2 Énergies {R} de ce Pokémon.",
			en: "Discard 2 {R} Energy from this Pokémon.",
			es: "Descarta 2 Energías {R} de este Pokémon.",
			it: "Scarta due Energie {R} da questo Pokémon.",
			pt: "Descarte 2 Energias {R} deste Pokémon.",
			de: "Lege 2 {R}-Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 240
	}],

	retreat: 4,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Atsushi Furusawa"
}

export default card