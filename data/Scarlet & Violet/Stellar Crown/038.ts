import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [565],
	set: Set,

	name: {
		en: "Carracosta",
		fr: "Mégapagos",
		es: "Carracosta",
		it: "Carracosta",
		pt: "Carracosta",
		de: "Karippas"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Water"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Primal Knowledge",
			fr: "Primo-Savoir",
			es: "Conocimiento Primigenio",
			it: "Sapienza Primordiale",
			pt: "Sabedoria Primitiva",
			de: "Urzeitwissen"
		},

		effect: {
			en: "Attacks used by your Pokémon do 30 more damage to your opponent's Active Evolution Pokémon (before applying Weakness and Resistance).",
			fr: "Les attaques utilisées par vos Pokémon infligent 30 dégâts supplémentaires au Pokémon Évolutif Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			es: "Los ataques usados por tus Pokémon hacen 30 puntos de daño más al Pokémon Evolución Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			it: "Gli attacchi usati dai tuoi Pokémon infliggono 30 danni in più al Pokémon Evoluzione attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			pt: "Os ataques usados pelos seus Pokémon causam 30 pontos de dano a mais ao Pokémon de Evolução Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
			de: "Die von deinen Pokémon eingesetzten Attacken fügen dem Aktiven Entwicklungs-Pokémon deines Gegners 30 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		}
	}],

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			en: "Tidal Wave",
			fr: "Raz-de-Marée",
			es: "Maremoto",
			it: "Mareggiata",
			pt: "Maremoto",
			de: "Flutwelle"
		},

		damage: 150
	}],

	retreat: 3,
	regulationMark: "H",

	variants: {
		normal: false
	},

	illustrator: "LINNE",

	thirdParty: {
		cardmarket: 785892
	}
}

export default card
