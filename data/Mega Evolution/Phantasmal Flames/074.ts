import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Duraludon",
		fr: "Duralugon",
		es: "Duraludon",
		'es-mx': "Duraludon",
		de: "Duraludon",
		it: "Duraludon",
		pt: "Duraludon"
	},

	rarity: "Common",
	category: "Pokemon",

	dexId: [884],
	hp: 130,
	types: ["Metal"],
	stage: "Basic",
	dexId: [884],

	attacks: [{
		cost: ["Metal", "Metal", "Metal"],

		name: {
			en: "Hyper Beam",
			fr: "Ultralaser",
			es: "Hiperrayo",
			'es-mx': "Hiperrayo",
			de: "Hyperstrahl",
			it: "Iper Raggio",
			pt: "Hiper-raio"
		},

		effect: {
			en: "Discard an Energy from your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
			es: "Descarta 1 Energía del Pokémon Activo de tu rival.",
			'es-mx': "Descarta 1 Energía del Pokémon Activo de tu rival.",
			de: "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			it: "Scarta un'Energia dal Pokémon attivo del tuo avversario.",
			pt: "Descarte uma Energia do Pokémon Ativo do seu oponente."
		},

		damage: 70
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 857649
	}
}

export default card