import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Arven's Skwovet",
		fr: "Rongourmand de Pepper",
		de: "Peppers Raffel",
		it: "Skwovet di Pepe",
		es: "Skwovet de Damián",
		pt: "Skwovet do Arven",
		'es-mx': "Skwovet de Damián"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Gnaw Through",
			fr: "Grignotage",
			de: "Durchnagen",
			it: "Rosicchiadentro",
			es: "Roedura Perforante",
			pt: "Roída Interrupta",
			'es-mx': "Roedura Perforante"
		},

		effect: {
			en: "Before doing damage, discard all Pokémon Tools from your opponent's Active Pokémon.",
			fr: "Avant d'infliger des dégâts, défaussez tous les Outils Pokémon du Pokémon Actif de votre adversaire.",
			de: "Bevor du Schaden zufügst, lege alle Pokémon-Ausrüstungen vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			it: "Prima di infliggere danni, scarta tutte le carte Oggetto Pokémon dal Pokémon attivo del tuo avversario.",
			es: "Antes de infligir daño, descarta todas las Herramientas Pokémon del Pokémon Activo de tu rival.",
			pt: "Antes de causar dano, descarte todas as Ferramentas Pokémon do Pokémon Ativo do seu oponente.",
			'es-mx': "Antes de infligir daño, descarta todas las Herramientas Pokémon del Pokémon Activo de tu rival."
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card