import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [670],
	set: Set,

	name: {
		en: "Floette",
		fr: "Floette",
		es: "Floette",
		it: "Floette",
		pt: "Floette",
		de: "Floette"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	evolveFrom: {
		en: "Flabébé",
		fr: "Flabébé",
		es: "Flabébé",
		it: "Flabébé",
		pt: "Flabébé",
		de: "Flabébé"
	},


	stage: "Stage1",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Magical Leaf",
			fr: "Feuille Magik",
			es: "Hoja Mágica",
			it: "Fogliamagica",
			pt: "Folha Mágica",
			de: "Zauberblatt"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 30 more damage, and heal 30 damage from this Pokémon.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires et vous soignez 30 dégâts de ce Pokémon.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más y cura 30 puntos de daño a este Pokémon.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più e curi questo Pokémon da 30 danni.",
			pt: "Jogue uma moeda. Se sair cara, este ataque causará 30 pontos de dano a mais, e cure 30 pontos de dano deste Pokémon.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu, und du heilst 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: "30+"
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "saino misaki",

	thirdParty: {
		cardmarket: 702388
	}
}

export default card