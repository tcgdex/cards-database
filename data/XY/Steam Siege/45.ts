import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Nidoking",
		fr: "Nidoking",
		es: "Nidoking",
		it: "Nidoking",
		pt: "Nidoking",
		de: "Nidoking"
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
		en: "Nidorino",
		fr: "Nidorino",
		es: "Nidorino",
		it: "Nidorino",
		pt: "Nidorino",
		de: "Nidorino"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "King's Palace",
				fr: "Palais Royal",
				es: "Palacio del Rey",
				it: "Palazzo Reale",
				pt: "Palácio do Rei",
				de: "Königspalast"
			},
			effect: {
				en: "Your Nidoqueen's attacks do 20 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
				fr: "Les attaques de vos Nidoqueen infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
				es: "Los ataques de tus Nidoqueen hacen 20 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
				it: "Gli attacchi dei tuoi Nidoqueen infliggono 20 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
				pt: "Os ataques da sua Nidoqueen causam 20 de danos adicionais ao Pokémon Ativo do seu oponente (antes da aplicação de Fraqueza e Resistência).",
				de: "Die Angriffe deiner Nidoqueen fügen dem Aktiven Pokémon deines Gegners 20 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
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
				en: "Power Lariat",
				fr: "Lasso Puissant",
				es: "Lazo Poderoso",
				it: "Lazo del Potere",
				pt: "Lariat Poderoso",
				de: "Powerlasso"
			},
			effect: {
				en: "This attack does 30 more damage for each Evolution Pokémon on your Bench.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Pokémon Évolutif sur votre Banc.",
				es: "Este ataque hace 30 puntos de daño más por cada Pokémon Evolución en tu Banca.",
				it: "Questo attacco infligge 30 danni in più per ogni Pokémon Evoluzione nella tua panchina.",
				pt: "Este ataque causa 30 de danos adicionais para cada Pokémon de Evolução no seu Banco.",
				de: "Dieser Angriff fügt 30 weitere Schadenspunkte für jedes Entwicklungs-Pokémon auf deiner Bank zu."
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

	thirdParty: {
		cardmarket: 291621,
		tcgplayer: 121134
	}
}

export default card
