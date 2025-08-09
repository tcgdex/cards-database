import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [193],
	set: Set,

	name: {
		en: "Yanma",
		fr: "Yanma",
		de: "Yanma",
		it: "Yanma",
		es: "Yanma",
		pt: "Yanma",
		'es-mx': "Yanma"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Whirlwind",
			fr: "Cyclone",
			de: "Wirbelwind",
			it: "Turbine",
			es: "Remolino",
			pt: "Ataque de Vento",
			'es-mx': "Torbellino"
		},

		effect: {
			en: "Switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
			fr: "Envoyez le Pokémon Actif de l'adversaire sur le Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
			de: "Wechsle das Aktive Pokémon deines Gegners auf seine Bank aus. (Dein Gegner wählt das neue Aktive Pokémon.)",
			it: "Sposta il Pokémon attivo del tuo avversario nella sua panchina. Il tuo avversario sceglie il nuovo Pokémon attivo.",
			es: "Mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).",
			pt: "Mande o Pokémon Ativo do seu oponente para o Banco. (O seu oponente escolhe o novo Pokémon Ativo.)",
			'es-mx': "Mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo)."
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "Razor Wing",
			fr: "Aile Tranchante",
			de: "Rasierflügel",
			it: "Ala Tagliente",
			es: "Ala Cortante",
			pt: "Asa Cortante",
			'es-mx': "Ala Cortante"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",

	variants: {
		holo: false
	}
}

export default card