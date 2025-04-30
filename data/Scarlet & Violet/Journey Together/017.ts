import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Floragato",
		fr: "Matourgeon",
		es: "Floragato",
		de: "Feliospa",
		it: "Floragato",
		pt: "Floragato",
		'es-mx': "Floragato"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Magical Leaf",
			fr: "Feuille Magik",
			es: "Hoja Mágica",
			de: "Zauberblatt",
			it: "Fogliamagica",
			pt: "Folha Mágica",
			'es-mx': "Hojas Mágicas"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 30 more damage, and heal 30 damage from this Pokémon.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires et vous soignez 30 dégâts de ce Pokémon.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más y cura 30 puntos de daño a este Pokémon.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu, und du heilst 30 Schadenspunkte bei diesem Pokémon.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più e curi questo Pokémon da 30 danni.",
			pt: "Jogue uma moeda. Se sair cara, este ataque causará 30 pontos de dano a mais, e cure 30 pontos de dano deste Pokémon.",
			'es-mx': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más, y cura 30 puntos de daño a este Pokémon."
		},

		damage: "30+"
	}],

	retreat: 1,
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
