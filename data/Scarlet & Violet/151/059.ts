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
			fr: "Attachez jusqu'à 2 cartes Énergie Fire de base de votre pile de défausse à ce Pokémon.",
			en: "Attach up to 2 Basic Fire Energy cards from your discard pile to this Pokémon.",
			es: "Une hasta 2 cartas de Energía Fire Básica de tu pila de descartes a este Pokémon.",
			it: "Assegna a questo Pokémon fino a due carte Energia base Fire dalla tua pila degli scarti.",
			pt: "Ligue até 2 cartas de Energia Fire Básica da sua pilha de descarte a este Pokémon.",
			de: "Lege bis zu 2 Basis-Fire-Energiekarten aus deinem Ablagestapel an dieses Pokémon an."
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
			fr: "Défaussez 2 Énergies Fire de ce Pokémon.",
			en: "Discard 2 Fire Energy from this Pokémon.",
			es: "Descarta 2 Energías Fire de este Pokémon.",
			it: "Scarta due Energie Fire da questo Pokémon.",
			pt: "Descarte 2 Energias Fire deste Pokémon.",
			de: "Lege 2 Fire-Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 240
	}],

	retreat: 4,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card