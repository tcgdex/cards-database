import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Garganacl",
		'fr-fr': "Gigansel",
		'de-de': "Saltigant",
		'it-it': "Garganacl",
		'es-es': "Garganacl",
		'pt-br': "Garganacl",
		'es-mx': "Garganacl"
	},

	illustrator: "Yano Keiji",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 180,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Naclstack",
		'fr-fr': "Amassel",
		'de-de': "Sedisal",
		'it-it': "Naclstack",
		'es-es': "Naclstack",
		'pt-br': "Naclstack",
		'es-mx': "Naclstack"
	},
	stage: "Stage2",
	dexId: [934],

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Powerful a-Salt",
			'fr-fr': "Puissance Univer-Sel",
			'de-de': "Kräftig versalzen",
			'it-it': "Sale Portentoso",
			'es-es': "A-Sal-to Poderoso",
			'pt-br': "Agressal Potente",
			'es-mx': "A-sal-to Poderoso"
		},

		effect: {
			'en-us': "Attacks used by your {F} Pokémon do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			'fr-fr': "Les attaques utilisées par vos Pokémon {F} infligent 30 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			'de-de': "Die von deinen {F}-Pokémon eingesetzten Attacken fügen dem Aktiven Pokémon deines Gegners 30 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden).",
			'it-it': "Gli attacchi usati dai tuoi Pokémon {F} infliggono 30 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			'es-es': "Los ataques usados por tus Pokémon {F} hacen 30 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			'pt-br': "Os ataques usados pelos seus Pokémon {F} causam 30 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
			'es-mx': "Los ataques usados por tus Pokémon {F} hacen 30 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia)."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Hammer In",
			'fr-fr': "Enfoncement",
			'de-de': "Einhämmern",
			'it-it': "Martello",
			'es-es': "Martillear",
			'pt-br': "Martelada",
			'es-mx': "Martillar"
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 851218,
				tcgplayer: 654486
			}
		},
	],
}

export default card
