import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [6],
	set: Set,

	name: {
		'en-us': "Charizard V",
		'fr-fr': "Dracaufeu V",
		'es-es': "Charizard V",
		'it-it': "Charizard V",
		'pt-br': "Charizard V",
		'de-de': "Glurak V"
	},

	illustrator: "Ryota Murayama",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Fire"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Incinerate",
			'fr-fr': "Calcination",
			'es-es': "Calcinación",
			'it-it': "Bruciatutto",
			'pt-br': "Incinerar",
			'de-de': "Einäschern"
		},

		effect: {
			'en-us': "Before doing damage, discard all Pokémon Tools from your opponent's Active Pokémon.",
			'fr-fr': "Avant d'infliger des dégâts, défaussez tous les Outils Pokémon du Pokémon Actif de votre adversaire.",
			'es-es': "Antes de infligir daño, descarta todas las Herramientas Pokémon del Pokémon Activo de tu rival.",
			'it-it': "Prima di infliggere danni, scarta tutte le carte Oggetto Pokémon dal Pokémon attivo del tuo avversario.",
			'pt-br': "Antes de causar dano, descarte todas as Ferramentas Pokémon do Pokémon Ativo do seu oponente.",
			'de-de': "Bevor du Schaden zufügst, lege alle Pokémon-Ausrüstungen vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 90
	}, {
		cost: ["Fire", "Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Heat Blast",
			'fr-fr': "Explosion de Chaleur",
			'es-es': "Explosión de Calor",
			'it-it': "Caldobomba",
			'pt-br': "Raio de Calor",
			'de-de': "Hitzestoß"
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


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 608700,
				tcgplayer: 263873
			}
		},
	],
}

export default card
