import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Volbeat",
		fr: "Muciole",
		de: "Volbeat",
		es: "Volbeat",
		it: "Volbeat",
		'es-mx': "Volbeat"
	},

	illustrator: "Yoriyuki Ikegami",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Luring Glow",
			fr: "Lueur Attrayante",
			de: "Lockendes Glühen",
			es: "Resplandor Atrayente",
			it: "Brillincanto",
			'es-mx': "Resplandor Atrayente"
		},

		effect: {
			en: "Switch in 1 of your opponent's Benched Pokémon to the Active Spot.",
			fr: "Envoyez l'un des Pokémon de Banc de votre adversaire sur le Poste Actif.",
			de: "Wechsle 1 Pokémon von der Bank deines Gegners in die Aktive Position ein.",
			es: "Cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo.",
			it: "Sostituisci uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon in posizione attiva.",
			'es-mx': "Cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo."
		},

		cost: ["Grass"]
	}, {
		name: {
			en: "Bug Buzz",
			fr: "Bourdon",
			de: "Käfergebrumm",
			es: "Zumbido",
			it: "Ronzio",
			'es-mx': "Zumbido"
		},

		damage: 90,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card