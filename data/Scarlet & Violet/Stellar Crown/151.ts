import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [807],
	set: Set,

	name: {
		en: "Zeraora",
		fr: "Zeraora",
		es: "Zeraora",
		it: "Zeraora",
		pt: "Zeraora",
		de: "Zeraora"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Combat Thunder",
			fr: "Tonnerre Combat",
			es: "Trueno Combativo",
			it: "Combattuono",
			pt: "Trovão Combatente",
			de: "Gefechtsdonner"
		},

		effect: {
			en: "This attack does 20 more damage for each of your opponent's Benched Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chacun des Pokémon de Banc de votre adversaire.",
			es: "Este ataque hace 20 puntos de daño más por cada uno de los Pokémon en Banca de tu rival.",
			it: "Questo attacco infligge 20 danni in più per ogni Pokémon nella panchina del tuo avversario.",
			pt: "Este ataque causa 20 pontos de dano a mais para cada Pokémon no Banco do seu oponente.",
			de: "Diese Attacke fügt für jedes Pokémon auf der Bank deines Gegners 20 Schadenspunkte mehr zu."
		},

		damage: "20+"
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "Kazumasa Yasukuni",

	thirdParty: {
		cardmarket: 786005
	}
}

export default card
