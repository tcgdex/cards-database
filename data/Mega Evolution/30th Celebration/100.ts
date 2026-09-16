import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Yveltal",
		fr: "Yveltal",
		de: "Yveltal",
		es: "Yveltal",
		it: "Yveltal",
		'es-mx': "Yveltal"
	},

	illustrator: "hncl",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Life-Locked",
			fr: "Vitalité Entravée",
			de: "Lebenssperre",
			es: "Bloqueo Vital",
			it: "Vitalblocco",
			'es-mx': "Bloqueo Vital"
		},

		effect: {
			en: "Your opponent's Active Pokémon can't be healed.",
			fr: "Le Pokémon Actif de votre adversaire ne peut pas être soigné.",
			de: "Das Aktive Pokémon deines Gegners kann nicht geheilt werden.",
			es: "El Pokémon Activo de tu rival no puede ser curado.",
			it: "Il Pokémon attivo del tuo avversario non può essere curato.",
			'es-mx': "El Pokémon Activo de tu rival no puede ser curado."
		}
	}],

	attacks: [{
		name: {
			en: "Dark Cutter",
			fr: "Tranch'Obscur",
			de: "Dunkler Zerschneider",
			es: "Cuchilla Oscura",
			it: "Oscurotaglio",
			'es-mx': "Corte Oscuro"
		},

		damage: 90,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1
}

export default card