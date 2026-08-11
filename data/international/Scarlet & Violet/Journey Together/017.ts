import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [907],
	set: Set,

	name: {
		'en-us': "Floragato",
		'fr-fr': "Matourgeon",
		'es-es': "Floragato",
		'de-de': "Feliospa",
		'it-it': "Floragato",
		'pt-br': "Floragato",
		'es-mx': "Floragato"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Sprigatito",
		'fr-fr': "Poussacha",
		'es-es': "Sprigatito",
		'de-de': "Felori",
		'it-it': "Sprigatito",
		'pt-br': "Sprigatito",
		'es-mx': "Sprigatito"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Magical Leaf",
			'fr-fr': "Feuille Magik",
			'es-es': "Hoja Mágica",
			'de-de': "Zauberblatt",
			'it-it': "Fogliamagica",
			'pt-br': "Folha Mágica",
			'es-mx': "Hojas Mágicas"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 30 more damage, and heal 30 damage from this Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires et vous soignez 30 dégâts de ce Pokémon.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más y cura 30 puntos de daño a este Pokémon.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu, und du heilst 30 Schadenspunkte bei diesem Pokémon.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più e curi questo Pokémon da 30 danni.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 30 pontos de dano a mais, e cure 30 pontos de dano deste Pokémon.",
			'es-mx': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más, y cura 30 puntos de daño a este Pokémon."
		},

		damage: "30+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",
	illustrator: "Felicia Chen",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817169,
				tcgplayer: 623444
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817169,
				tcgplayer: 623444
			}
		},
	],
}

export default card
