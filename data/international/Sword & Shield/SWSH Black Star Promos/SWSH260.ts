import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [6],
	set: Set,

	name: {
		'fr-fr': "Dracaufeu V",
		'de-de': "Glurak V",
		'es-es': "Charizard V",
		'pt-br': "Charizard V",
		'it-it': "Charizard V",
		'en-us': "Charizard V"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 220,
	types: ["Fire"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'fr-fr': "Calcination",
			'de-de': "Einäschern",
			'es-es': "Calcinación",
			'pt-br': "Incinerar",
			'it-it': "Bruciatutto",
			'en-us': "Incinerate"
		},

		effect: {
			'fr-fr': "Avant d'infliger des dégâts, défaussez tous les Outils Pokémon du Pokémon Actif de votre adversaire.",
			'de-de': "Bevor du Schaden zufügst, lege alle Pokémon-Ausrüstungen vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			'es-es': "Antes de infligir daño, descarta todas las Herramientas Pokémon del Pokémon Activo de tu rival.",
			'pt-br': "Antes de causar dano, descarte todas as Ferramentas Pokémon do Pokémon Ativo do seu oponente.",
			'it-it': "Prima di infliggere danni, scarta tutte le carte Oggetto Pokémon dal Pokémon attivo del tuo avversario.",
			'en-us': "Before doing damage, discard all Pokémon Tools from your opponent's Active Pokémon."
		},

		damage: 90
	}, {
		cost: ["Fire", "Fire", "Fire", "Colorless"],

		name: {
			'fr-fr': "Explosion de Chaleur",
			'de-de': "Hitzestoß",
			'es-es': "Explosión de Calor",
			'pt-br': "Raio de Calor",
			'it-it': "Caldobomba",
			'en-us': "Heat Blast"
		},

		damage: 180
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 505255
	}
}

export default card
