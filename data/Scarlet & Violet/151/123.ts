import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [123],
	set: Set,

	name: {
		fr: "Insécateur",
		en: "Scyther",
		es: "Scyther",
		it: "Scyther",
		pt: "Scyther",
		de: "Sichlor"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			fr: "Tranche Alliée",
			en: "Helpful Slash",
			es: "Tajo Útil",
			it: "Lacerazione Altruista",
			pt: "Talho de Apoio",
			de: "Hilfreicher Schlitzer"
		},

		effect: {
			fr: "Attachez une carte Énergie {G} de base de votre pile de défausse à l'un de vos Pokémon de Banc.",
			en: "Attach a Basic {G} Energy card from your discard pile to 1 of your Benched Pokémon.",
			es: "Une 1 carta de Energía {G} Básica de tu pila de descartes a uno de tus Pokémon en Banca.",
			it: "Assegna a uno dei tuoi Pokémon in panchina una carta Energia base {G} dalla tua pila degli scarti.",
			pt: "Ligue uma carta de Energia {G} Básica da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
			de: "Lege 1 Basis-{G}-Energiekarte aus deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
		},

		damage: 20
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			fr: "Lame Tranchante",
			en: "Slicing Blade",
			es: "Cuchilla Cortante",
			it: "Affettalama",
			pt: "Lâmina Fatiante",
			de: "Schwertschneide"
		},

		damage: 70
	}],

	retreat: 0,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Hideki Ishikawa"
}

export default card