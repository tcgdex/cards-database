import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [950],
	set: Set,

	name: {
		'en-us': "Klawf",
		'fr-fr': "Craparoi",
		'es-es': "Klawf",
		'it-it': "Klawf",
		'pt-br': "Klawf",
		'de-de': "Klibbe"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Unhinged Scissors",
			'fr-fr': "Ciseaux Déjantés",
			'es-es': "Tijeras Desquiciadas",
			'it-it': "Forbici Scatenate",
			'pt-br': "Tesouras Ensandecidas",
			'de-de': "Tobende Scheren"
		},

		effect: {
			'en-us': "If this Pokémon is affected by a Special Condition, this attack does 160 more damage.",
			'fr-fr': "Si ce Pokémon est affecté par un État Spécial, cette attaque inflige 160 dégâts supplémentaires.",
			'es-es': "Si este Pokémon se ve afectado por una Condición Especial, este ataque hace 160 puntos de daño más.",
			'it-it': "Se questo Pokémon è influenzato da una condizione speciale, questo attacco infligge 160 danni in più.",
			'pt-br': "Se este Pokémon estiver afetado por uma Condição Especial, este ataque causará 160 pontos de dano a mais.",
			'de-de': "Wenn dieses Pokémon von einem Speziellen Zustand betroffen ist, fügt diese Attacke 160 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			'en-us': "Boiled Press",
			'fr-fr': "Pression Bouillonnante",
			'es-es': "Presión Hirviente",
			'it-it': "Bollipressa",
			'pt-br': "Compressão Escaldante",
			'de-de': "Kochdruck"
		},

		effect: {
			'en-us': "This Pokémon is now Burned.",
			'fr-fr': "Ce Pokémon est maintenant Brûlé.",
			'es-es': "Este Pokémon pasa a estar Quemado.",
			'it-it': "Questo Pokémon viene bruciato.",
			'pt-br': "Este Pokémon agora está Queimado.",
			'de-de': "Dieses Pokémon ist jetzt verbrannt."
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	description: {
		'en-us': "Klawf hangs upside-down from cliffs, waiting for prey. But Klawf can't remain in this position for long because its blood rushes to its head.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740620,
				tcgplayer: 523777,
				cardtrader: 265216
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740620,
				tcgplayer: 523777,
				cardtrader: 265216
			}
		},
	],

	illustrator: "Yuya Oka",

	
}

export default card
