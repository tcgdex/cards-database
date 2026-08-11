import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [494],
	set: Set,

	name: {
		'en-us': "Victini",
		'fr-fr': "Victini",
		'es-es': "Victini",
		'it-it': "Victini",
		'pt-br': "Victini",
		'de-de': "Victini"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Victory Cheer",
			'fr-fr': "Cri de Victoire",
			'es-es': "Ovación de Victoria",
			'it-it': "Incitamento Vittorioso",
			'pt-br': "Grito de Vitória",
			'de-de': "Triumphjubel"
		},

		effect: {
			'en-us': "Attacks used by your Evolution {R} Pokémon do 10 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			'fr-fr': "Les attaques utilisées par vos Pokémon {R} Évolutifs infligent 10 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			'es-es': "Los ataques usados por tus Pokémon {R} Evolución hacen 10 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			'it-it': "Gli attacchi usati dai tuoi Pokémon Evoluzione {R} infliggono 10 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			'pt-br': "Os ataques usados pelos seus Pokémon {R} de Evolução causam 10 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
			'de-de': "Die von deinen Entwicklungs-{R}-Pokémon eingesetzten Attacken fügen dem Aktiven Pokémon deines Gegners 10 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Flare",
			'fr-fr': "Flamboiement",
			'es-es': "Llama",
			'it-it': "Fiammata",
			'pt-br': "Chama",
			'de-de': "Flackern"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794276,
				tcgplayer: 590087
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794276,
				tcgplayer: 590087
			}
		},
	],

	illustrator: "0313",
	
}

export default card
