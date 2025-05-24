import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		fr: "Dracolosse V",
		de: "Dragoran V",
		es: "Dragonite V",
		pt: "Dragonite V",
		it: "Dragonite V",
		en: "Dragonite V"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 230,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Water", "Lightning"],

		name: {
			fr: "Ultralaser",
			de: "Hyperstrahl",
			es: "Hiperrayo",
			pt: "Hiper-raio",
			it: "Iper Raggio",
			en: "Hyper Beam"
		},

		effect: {
			fr: "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
			de: "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			es: "Descarta 1 Energía del Pokémon Activo de tu rival.",
			pt: "Descarte 1 Energia do Pokémon Ativo do seu oponente.",
			it: "Scarta un'Energia dal Pokémon attivo del tuo avversario.",
			en: "Discard an Energy from your opponent's Active Pokémon."
		},

		damage: 60
	}, {
		cost: ["Water", "Lightning", "Colorless"],

		name: {
			fr: "Queue Destructrice",
			de: "Zertrümmernder Schweif",
			es: "Cola Destructora",
			pt: "Cauda Aniquiladora",
			it: "Coda Distruttrice",
			en: "Buster Tail"
		},

		damage: 160
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card