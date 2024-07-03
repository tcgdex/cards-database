import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	set: Set,

	name: {
		fr: "Toutombe",
		en: "Greavard",
		es: "Greavard",
		it: "Greavard",
		pt: "Greavard",
		de: "Gruff"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			fr: "Câlinerie",
			en: "Play Rough",
			es: "Carantoña",
			it: "Carineria",
			pt: "Jogo Duro",
			de: "Knuddler"
		},

		effect: {
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
			pt: "Jogue uma moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card