import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [6],
	set: Set,

	name: {
		fr: "Dracaufeu V",
		de: "Glurak V",
		es: "Charizard V",
		pt: "Charizard V",
		it: "Charizard V",
		en: "Charizard V"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 220,
	types: ["Fire"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			fr: "Calcination",
			de: "Einäschern",
			es: "Calcinación",
			pt: "Incinerar",
			it: "Bruciatutto",
			en: "Incinerate"
		},

		effect: {
			fr: "Avant d'infliger des dégâts, défaussez tous les Outils Pokémon du Pokémon Actif de votre adversaire.",
			de: "Bevor du Schaden zufügst, lege alle Pokémon-Ausrüstungen vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			es: "Antes de infligir daño, descarta todas las Herramientas Pokémon del Pokémon Activo de tu rival.",
			pt: "Antes de causar dano, descarte todas as Ferramentas Pokémon do Pokémon Ativo do seu oponente.",
			it: "Prima di infliggere danni, scarta tutte le carte Oggetto Pokémon dal Pokémon attivo del tuo avversario.",
			en: "Before doing damage, discard all Pokémon Tools from your opponent's Active Pokémon."
		},

		damage: 90
	}, {
		cost: ["Fire", "Fire", "Fire", "Colorless"],

		name: {
			fr: "Explosion de Chaleur",
			de: "Hitzestoß",
			es: "Explosión de Calor",
			pt: "Raio de Calor",
			it: "Caldobomba",
			en: "Heat Blast"
		},

		damage: 180
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card