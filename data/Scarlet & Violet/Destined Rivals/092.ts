import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Floette",
		fr: "Floette",
		de: "Floette",
		it: "Floette",
		es: "Floette",
		pt: "Floette"
	},

	illustrator: "saino misaki",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Magical Leaf",
			fr: "Feuille Magik",
			de: "Zauberblatt",
			it: "Fogliamagica",
			es: "Hoja Mágica",
			pt: "Folha Mágica"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 30 more damage, and heal 30 damage from this Pokémon.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires et vous soignez 30 dégâts de ce Pokémon.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu, und du heilst 30 Schadenspunkte bei diesem Pokémon.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più e curi questo Pokémon da 30 danni.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más y cura 30 puntos de daño a este Pokémon.",
			pt: "Jogue uma moeda. Se sair cara, este ataque causará 30 pontos de dano a mais, e cure 30 pontos de dano deste Pokémon."
		},

		damage: "30+"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card