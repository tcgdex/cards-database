import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [840],
	set: Set,

	name: {
		'en-us': "Applin",
		'fr-fr': "Verpom",
		'es-es': "Applin",
		'it-it': "Applin",
		'pt-br': "Applin",
		'de-de': "Knapfel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Tumbling Attack",
			'fr-fr': "Attaque Trébuchante",
			'es-es': "Ataque Tambaleante",
			'it-it': "Attacco Capriola",
			'pt-br': "Ataque Cambalhota",
			'de-de': "Taumler"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 20 pontos de dano a mais.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "Applin lives inside an apple. When an Applin is separated from its apple, its body loses moisture and the Pokémon grows weak.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769191,
				tcgplayer: 550061
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769191,
				tcgplayer: 550061
			}
		},
	],

	illustrator: "OKUBO",

}

export default card