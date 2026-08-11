import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [942],
	set: Set,

	name: {
		'en-us': "Maschiff",
		'fr-fr': "Grondogue",
		'es-es': "Maschiff",
		'it-it': "Maschiff",
		'pt-br': "Maschiff",
		'de-de': "Mobtiff"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Ambush",
			'fr-fr': "Embuscade",
			'es-es': "Emboscada",
			'it-it': "Imboscata",
			'pt-br': "Emboscada",
			'de-de': "Hinterhalt"
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
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",
	illustrator: "Kagemaru Himeno",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 751795,
				tcgplayer: 536075
			},
		}
	],
}

export default card
