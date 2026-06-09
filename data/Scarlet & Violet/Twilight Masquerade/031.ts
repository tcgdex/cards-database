import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [390],
	set: Set,

	name: {
		en: "Chimchar",
		fr: "Ouisticram",
		es: "Chimchar",
		it: "Chimchar",
		pt: "Chimchar",
		de: "Panflam"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			en: "Firebreathing",
			fr: "Souffle-Feu",
			es: "Aliento de Fuego",
			it: "Fuocospiro",
			pt: "Hálito de Fogo",
			de: "Feuerhauch"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
			pt: "Jogue uma moeda. Se sair cara, este ataque causará 20 pontos de dano a mais.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu."
		},

		damage: "20+"
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		en: "Its fiery rear end is fueled by gas made in its belly. Even rain can't extinguish the fire.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769205,
				tcgplayer: 550075
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769205,
				tcgplayer: 550075
			}
		},
	],

	illustrator: "Jerky",

}

export default card