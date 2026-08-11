import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Diancie ◇",
		'fr-fr': "Diancie ◇",
		'es-es': "Diancie ◇",
		'it-it': "Diancie ◇",
		'pt-br': "Diancie ◇",
		'de-de': "Diancie ◇"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		719,
	],

	hp: 120,

	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Princess’s Cheers",
				'fr-fr': "Vivats de Princesse",
				'es-es': "Ovación de la Princesa",
				'it-it': "Incitamento della Principessa",
				'pt-br': "Torcida da Princesa",
				'de-de': "Zuspruch der Prinzessin"
			},
			effect: {
				'en-us': "As long as this Pokémon is on your Bench, your Fighting Pokémon’s attacks do 20 more damage to your opponent’s Active Pokémon (before applying Weakness and Resistance).",
				'fr-fr': "Tant que ce Pokémon est sur votre Banc, les attaques de vos Pokémon Fighting infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
				'es-es': "Mientras este Pokémon esté en tu Banca, los ataques de tus Pokémon Fighting hacen 20 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
				'it-it': "Fintanto che questo Pokémon è nella tua panchina, gli attacchi dei tuoi Pokémon Fighting infliggono 20 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Enquanto este Pokémon estiver no seu Banco, os ataques dos seus Pokémon Fighting causam 20 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
				'de-de': "Solang sich dieses Pokémon auf deiner Bank befindet, fügen die Attacken deiner Fighting-Pokémon dem Aktiven Pokémon deines Gegners 20 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Diamond Rain",
				'fr-fr': "Pluie de Diamants",
				'es-es': "Lluvia de Diamantes",
				'it-it': "Pioggia di Diamanti",
				'pt-br': "Chuva de Diamantes",
				'de-de': "Diamantregen"
			},
			effect: {
				'en-us': "Heal 30 damage from each of your Benched Pokémon.",
				'fr-fr': "Soignez 30 dégâts à chacun de vos Pokémon de Banc.",
				'es-es': "Cura 30 puntos de daño a cada uno de tus Pokémon en Banca.",
				'it-it': "Cura ciascuno dei tuoi Pokémon in panchina da 30 danni.",
				'pt-br': "Cure 30 pontos de dano de cada um dos seus Pokémon no Banco.",
				'de-de': "Heile 30 Schadenspunkte bei jedem Pokémon auf deiner Bank."
			},
			damage: 90,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				'fr-fr': "Pluie de Diamants",
			},
			effect: {
				'fr-fr': "Soignez 30 dégâts à chacun de vos Pokémon de Banc.",
			},
			damage: 90,

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
		'en-us': "It can instantly create many diamonds by compressing the carbon in the air between its hands.",
	},

	thirdParty: {
		cardmarket: 327208
	}
}

export default card
