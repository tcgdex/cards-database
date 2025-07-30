import { Card } from "../../../interfaces"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [149],
	set: Set,

	name: {
		en: "Dragonite V",
		fr: "Dracolosse V",
		es: "Dragonite V",
		it: "Dragonite V",
		pt: "Dragonite V",
		de: "Dragoran V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 230,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Water", "Lightning"],

		name: {
			en: "Hyper Beam",
			fr: "Ultralaser",
			es: "Hiperrayo",
			it: "Iper Raggio",
			pt: "Hiper-raio",
			de: "Hyperstrahl"
		},

		effect: {
			en: "Discard an Energy from your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
			es: "Descarta 1 Energía del Pokémon Activo de tu rival.",
			it: "Scarta un'Energia dal Pokémon attivo del tuo avversario.",
			pt: "Descarte 1 Energia do Pokémon Ativo do seu oponente.",
			de: "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 60
	}, {
		cost: ["Water", "Lightning", "Colorless"],

		name: {
			en: "Buster Tail",
			fr: "Queue Destructrice",
			es: "Cola Destructora",
			it: "Coda Distruttrice",
			pt: "Cauda Aniquiladora",
			de: "Zertrümmernder Schweif"
		},

		damage: 160
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		"normal": false,
		"reverse": false,
		"holo": true
	},

	thirdParty: {
		cardmarket: 664592
	}
}

export default card