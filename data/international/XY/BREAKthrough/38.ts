import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Empoleon",
		'fr-fr': "Pingoléon",
		'es-es': "Empoleon",
		'it-it': "Empoleon",
		'pt-br': "Empoleon",
		'de-de': "Impoleon"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		395,
	],

	hp: 140,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Prinplup",
		'fr-fr': "Prinplouf",
		'es-es': "Prinplup",
		'it-it': "Prinplup",
		'pt-br': "Prinplup",
		'de-de': "Pliprin"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Dignified Fighter",
				'fr-fr': "Combattant Estimé",
				'es-es': "Luchador Digno",
				'it-it': "Cavaliere Coraggioso",
				'pt-br': "Lutador Dignificado",
				'de-de': "Würdevoller Kämpfer"
			},
			effect: {
				'en-us': "Each of your Basic Pokémon's attacks does 20 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
				'fr-fr': "Les attaques de vos Pokémon de base infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
				'es-es': "Los ataques de tus Pokémon Básicos hacen 20 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
				'it-it': "Ciascuno degli attacchi dei tuoi Pokémon Base infligge 20 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Cada um dos ataques dos seus Pokémon Básicos causam 20 de danos adicionais ao Pokémon Ativo do seu oponente (antes da aplicação de Fraqueza e Resistência).",
				'de-de': "Jeder Angriff deiner Basis-Pokémon fügt dem Aktiven Pokémon deines Gegners 20 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Hydro Splash",
				'fr-fr': "Hydro-Éclaboussure",
				'es-es': "Hidroestallido",
				'it-it': "Idrosplash",
				'pt-br': "Hidro Borrifada",
				'de-de': "Hydroplatscher"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "The three horns that extend from its beak attest to its power. The leader has the biggest horns.",
	},

	thirdParty: {
		cardmarket: 286284,
		tcgplayer: 107157
	}
}

export default card
