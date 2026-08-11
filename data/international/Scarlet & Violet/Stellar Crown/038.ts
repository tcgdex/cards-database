import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [565],
	set: Set,

	name: {
		'en-us': "Carracosta",
		'fr-fr': "Mégapagos",
		'es-es': "Carracosta",
		'it-it': "Carracosta",
		'pt-br': "Carracosta",
		'de-de': "Karippas"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Tirtouga",
		'fr-fr': "Carapagos",
		'es-es': "Tirtouga",
		'it-it': "Tirtouga",
		'pt-br': "Tirtouga",
		'de-de': "Galapaflos"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Primal Knowledge",
			'fr-fr': "Primo-Savoir",
			'es-es': "Conocimiento Primigenio",
			'it-it': "Sapienza Primordiale",
			'pt-br': "Sabedoria Primitiva",
			'de-de': "Urzeitwissen"
		},

		effect: {
			'en-us': "Attacks used by your Pokémon do 30 more damage to your opponent's Active Evolution Pokémon (before applying Weakness and Resistance).",
			'fr-fr': "Les attaques utilisées par vos Pokémon infligent 30 dégâts supplémentaires au Pokémon Évolutif Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			'es-es': "Los ataques usados por tus Pokémon hacen 30 puntos de daño más al Pokémon Evolución Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			'it-it': "Gli attacchi usati dai tuoi Pokémon infliggono 30 danni in più al Pokémon Evoluzione attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			'pt-br': "Os ataques usados pelos seus Pokémon causam 30 pontos de dano a mais ao Pokémon de Evolução Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
			'de-de': "Die von deinen Pokémon eingesetzten Attacken fügen dem Aktiven Entwicklungs-Pokémon deines Gegners 30 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		}
	}],

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			'en-us': "Tidal Wave",
			'fr-fr': "Raz-de-Marée",
			'es-es': "Maremoto",
			'it-it': "Mareggiata",
			'pt-br': "Maremoto",
			'de-de': "Flutwelle"
		},

		damage: 150
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785892,
				tcgplayer: 567264
			}
		},
		{
			type: "holo",
			thirdParty: {
				cardmarket: 785892,
				tcgplayer: 567264
			}
		},
	],

	illustrator: "LINNE",

}

export default card
