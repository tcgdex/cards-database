import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [701],
	set: Set,

	name: {
		en: "Hawlucha",
		fr: "Brutalibré",
		es: "Hawlucha",
		it: "Hawlucha",
		pt: "Hawlucha",
		de: "Resladero"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Taira Akitsu",

	description: {
		en: "It always strikes a pose before going for its finishing move. Sometimes opponents take advantage of that time to counterattack."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Flying Stomp",
			fr: "Écrasement Aérien",
			de: "Flying Stomp",
			es: "Pisotón Volador",
			pt: "Pisoteada Voadora",
			it: "Pestone Volante"
		},

		damage: 20,

		effect: {
			en: "Discard a Special Energy from your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie spéciale du Pokémon Actif de votre adversaire.",
			de: "Lege 1 Spezial-Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			es: "Descarta 1 Energía Especial del Pokémon Activo de tu rival.",
			pt: "Descarte 1 Energia Especial do Pokémon Ativo do seu oponente.",
			it: "Scarta un'Energia speciale dal Pokémon attivo del tuo avversario."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582952,
		tcgplayer: 253315
	}
}

export default card