import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Nidoking",
		'fr-fr': "Nidoking",
		'es-es': "Nidoking",
		'it-it': "Nidoking",
		'pt-br': "Nidoking",
		'de-de': "Nidoking"
	},

	illustrator: "Mina Nakai",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		34,
	],

	hp: 150,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Nidorino",
		'fr-fr': "Nidorino",
		'es-es': "Nidorino",
		'it-it': "Nidorino",
		'pt-br': "Nidorino",
		'de-de': "Nidorino"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "King's Palace",
				'fr-fr': "Palais Royal",
				'es-es': "Palacio del Rey",
				'it-it': "Palazzo Reale",
				'pt-br': "Palácio do Rei",
				'de-de': "Königspalast"
			},
			effect: {
				'en-us': "Your Nidoqueen's attacks do 20 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
				'fr-fr': "Les attaques de vos Nidoqueen infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
				'es-es': "Los ataques de tus Nidoqueen hacen 20 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
				'it-it': "Gli attacchi dei tuoi Nidoqueen infliggono 20 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Os ataques da sua Nidoqueen causam 20 de danos adicionais ao Pokémon Ativo do seu oponente (antes da aplicação de Fraqueza e Resistência).",
				'de-de': "Die Angriffe deiner Nidoqueen fügen dem Aktiven Pokémon deines Gegners 20 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Power Lariat",
				'fr-fr': "Lasso Puissant",
				'es-es': "Lazo Poderoso",
				'it-it': "Lazo del Potere",
				'pt-br': "Lariat Poderoso",
				'de-de': "Powerlasso"
			},
			effect: {
				'en-us': "This attack does 30 more damage for each Evolution Pokémon on your Bench.",
				'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Pokémon Évolutif sur votre Banc.",
				'es-es': "Este ataque hace 30 puntos de daño más por cada Pokémon Evolución en tu Banca.",
				'it-it': "Questo attacco infligge 30 danni in più per ogni Pokémon Evoluzione nella tua panchina.",
				'pt-br': "Este ataque causa 30 de danos adicionais para cada Pokémon de Evolução no seu Banco.",
				'de-de': "Dieser Angriff fügt 30 weitere Schadenspunkte für jedes Entwicklungs-Pokémon auf deiner Bank zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "One swing of its mighty tail can snap a telephone pole as if it were a matchstick.",
	},

	thirdParty: {
		cardmarket: 291621,
		tcgplayer: 121134
	}
}

export default card
