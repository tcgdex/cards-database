import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Zoroark",
		fr: "Zoroark",
		de: "Zoroark",
		es: "Zoroark",
		it: "Zoroark",
		'es-mx': "Zoroark"
	},

	illustrator: "Shiburingaru",
	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Nighttime Byway",
			fr: "Chemin de Traverse Nocturne",
			de: "Nächtlicher Schleichweg",
			es: "Desvío Nocturno",
			it: "Scorciatoia nell'Oscurità",
			'es-mx': "Atajo Nocturno"
		},

		effect: {
			en: "As long as this Pokémon is on your Bench, your Active Pokémon's Retreat Cost is ColorlessColorless less.",
			fr: "Tant que ce Pokémon est sur votre Banc, le Coût de Retraite de votre Pokémon Actif est diminué de ColorlessColorless.",
			de: "Solange sich dieses Pokémon auf deiner Bank befindet, verringern sich die Rückzugskosten deines Aktiven Pokémon um ColorlessColorless.",
			es: "Mientras este Pokémon esté en tu Banca, el Coste de Retirada de tu Pokémon Activo es de ColorlessColorless menos.",
			it: "Fintanto che questo Pokémon è nella tua panchina, il costo di ritirata del tuo Pokémon attivo è ridotto di ColorlessColorless.",
			'es-mx': "Mientras este Pokémon esté en tu Banca, el Costo de Retirada de tu Pokémon Activo es de ColorlessColorless menos."
		}
	}],

	attacks: [{
		name: {
			en: "Slashing Claw",
			fr: "Griffe Taillante",
			de: "Schlitzende Klaue",
			es: "Garra Cuchillazo",
			it: "Artigli Laceranti",
			'es-mx': "Garra Cortante"
		},

		damage: 90,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1
}

export default card