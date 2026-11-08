import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [149],
	set: Set,

	name: {
		'fr-fr': "Dracolosse V",
		'de-de': "Dragoran V",
		'es-es': "Dragonite V",
		'pt-br': "Dragonite V",
		'it-it': "Dragonite V",
		'en-us': "Dragonite V"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 230,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Water", "Lightning"],

		name: {
			'fr-fr': "Ultralaser",
			'de-de': "Hyperstrahl",
			'es-es': "Hiperrayo",
			'pt-br': "Hiper-raio",
			'it-it': "Iper Raggio",
			'en-us': "Hyper Beam"
		},

		effect: {
			'fr-fr': "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
			'de-de': "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			'es-es': "Descarta 1 Energía del Pokémon Activo de tu rival.",
			'pt-br': "Descarte 1 Energia do Pokémon Ativo do seu oponente.",
			'it-it': "Scarta un'Energia dal Pokémon attivo del tuo avversario.",
			'en-us': "Discard an Energy from your opponent's Active Pokémon."
		},

		damage: 60
	}, {
		cost: ["Water", "Lightning", "Colorless"],

		name: {
			'fr-fr': "Queue Destructrice",
			'de-de': "Zertrümmernder Schweif",
			'es-es': "Cola Destructora",
			'pt-br': "Cauda Aniquiladora",
			'it-it': "Coda Distruttrice",
			'en-us': "Buster Tail"
		},

		damage: 160
	}],

	retreat: 2,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 576501
	}
}

export default card
