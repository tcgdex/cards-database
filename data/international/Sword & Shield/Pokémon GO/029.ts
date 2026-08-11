import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [145],
	set: Set,

	name: {
		'en-us': "Zapdos",
		'fr-fr': "Électhor",
		'es-es': "Zapdos",
		'it-it': "Zapdos",
		'pt-br': "Zapdos",
		'de-de': "Zapdos"
	},

	illustrator: "Yuya Oka",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Lightning Symbol",
			'fr-fr': "Symbole Foudroyant",
			'es-es': "Símbolo Relámpago",
			'it-it': "Simbolo Fulminante",
			'pt-br': "Símbolo de Relâmpago",
			'de-de': "Elektro-Symbol"
		},

		effect: {
			'en-us': "Your Basic Lightning Pokémon's attacks, except any Zapdos, do 10 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			'fr-fr': "Les attaques de vos Pokémon Lightning de base, à l'exception de celles d'un Électhor, infligent 10 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			'es-es': "Los ataques de tus Pokémon Lightning Básicos, excepto de los Zapdos, hacen 10 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			'it-it': "Gli attacchi dei tuoi Pokémon Base Lightning, a eccezione di qualsiasi Zapdos, infliggono 10 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			'pt-br': "Os ataques dos seus Pokémon Lightning Básicos, exceto por quaisquer Zapdos, causam 10 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
			'de-de': "Die Attacken deiner Basis-Lightning-Pokémon, außer Zapdos, fügen dem Aktiven Pokémon deines Gegners 10 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "Electric Ball",
			'fr-fr': "Boule de Foudre",
			'es-es': "Bola Eléctrica",
			'it-it': "Lamposfera",
			'pt-br': "Bola de Eletricidade",
			'de-de': "Stromball"
		},

		damage: 110
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "This Pokémon has complete control over electricity. There are tales of Zapdos nesting in the dark depths of pitch-black thunderclouds.",
	},



	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 665264,
				tcgplayer: 276954
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 665264,
				tcgplayer: 276954
			}
		},
		{
			type: 'normal',
			stamp: ['jesse-parker'],
			thirdParty: {
				cardmarket: 815464,
				tcgplayer: 637603
			}
		},
	],
}

export default card
