import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [401],
	set: Set,

	name: {
		'en-us': "Kricketot",
		'fr-fr': "Crikzik",
		'es-es': "Kricketot",
		'it-it': "Kricketot",
		'pt-br': "Kricketot",
		'de-de': "Zirpurze"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Trip Over",
			'fr-fr': "Croche-Pied",
			'es-es': "Tropezón",
			'it-it': "Inciampare",
			'pt-br': "Tropeção",
			'de-de': "Stolperer"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
			'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 20 pontos de dano a mais.",
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
	regulationMark: "F",


	description: {
		'en-us': "When its antennae hit each other, it sounds like the music of a xylophone.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691727,
				tcgplayer: 478057
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691727,
				tcgplayer: 478057
			}
		},
	],
}

export default card
