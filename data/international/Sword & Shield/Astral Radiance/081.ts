import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [701],
	set: Set,

	name: {
		'en-us': "Radiant Hawlucha",
		'fr-fr': "Brutalibré Radieux",
		'es-es': "Hawlucha Radiante",
		'it-it': "Hawlucha Lucente",
		'pt-br': "Hawlucha Radiante",
		'de-de': "Strahlendes Resladero"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Radiant Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Big Match",
			'fr-fr': "Combat Important",
			'es-es': "Gran Combate",
			'it-it': "Incontro Importante",
			'pt-br': "Grande Combate",
			'de-de': "Großes Match"
		},

		effect: {
			'en-us': "As long as this Pokémon is on your Bench, your Pokémon's attacks do 30 more damage to your opponent's Active Pokémon VMAX (before applying Weakness and Resistance).",
			'fr-fr': "Tant que ce Pokémon est sur votre Banc, les attaques de vos Pokémon infligent 30 dégâts supplémentaires au Pokémon-VMAX Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			'es-es': "Mientras este Pokémon esté en tu Banca, los ataques de tus Pokémon hacen 30 puntos de daño más al Pokémon VMAX Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			'it-it': "Fintanto che questo Pokémon è nella tua panchina, gli attacchi dei tuoi Pokémon infliggono 30 danni in più al Pokémon-VMAX attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			'pt-br': "Enquanto este Pokémon estiver no seu Banco, os ataques dos seus Pokémon causarão 30 pontos de dano a mais ao Pokémon VMAX Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
			'de-de': "Solange sich dieses Pokémon auf deiner Bank befindet, fügen die Attacken deiner Pokémon dem Aktiven Pokémon-VMAX deines Gegners 30 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Spiral Kick",
			'fr-fr': "Coup'd Pied en Spirale",
			'es-es': "Patada Espiral",
			'it-it': "Spiralcalcio",
			'pt-br': "Chute Espiral",
			'de-de': "Drehtritt"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "It drives its opponents to exhaustion with its agile maneuvers, then ends the fight with a flashy finishing move.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 658690,
				tcgplayer: 272282
			}
		},
	],
}

export default card
