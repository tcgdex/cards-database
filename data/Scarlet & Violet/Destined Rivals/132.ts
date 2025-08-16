import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [559],
	set: Set,

	name: {
		en: "Marnie's Scraggy",
		fr: "Baggiguane de Rosemary",
		de: "Marys Zurrokex",
		it: "Scraggy di Mary",
		es: "Scraggy de Roxy",
		pt: "Scraggy da Marine",
		'es-mx': "Scraggy de Marnie"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Crunch",
			fr: "Mâchouille",
			de: "Knirscher",
			it: "Sgranocchio",
			es: "Triturar",
			pt: "Mastigada",
			'es-mx': "Triturar"
		},

		effect: {
			en: "Discard an Energy from your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
			de: "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			it: "Scarta un'Energia dal Pokémon attivo del tuo avversario.",
			es: "Descarta 1 Energía del Pokémon Activo de tu rival.",
			pt: "Descarte uma Energia do Pokémon Ativo do seu oponente.",
			'es-mx': "Descarta 1 Energía del Pokémon Activo de tu rival."
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "I",

	variants: {
		holo: false
	}
}

export default card