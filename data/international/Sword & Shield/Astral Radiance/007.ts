import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [469],
	set: Set,

	name: {
		'en-us': "Yanmega",
		'fr-fr': "Yanmega",
		'es-es': "Yanmega",
		'it-it': "Yanmega",
		'pt-br': "Yanmega",
		'de-de': "Yanmega"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Yanma",
		'fr-fr': "Yanma",
		'es-es': "Yanma",
		'it-it': "Yanma",
		'pt-br': "Yanma",
		'de-de': "Yanma"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Razor Wing",
			'fr-fr': "Aile Tranchante",
			'es-es': "Ala Cortante",
			'it-it': "Ala Tagliente",
			'pt-br': "Asa Cortante",
			'de-de': "Rasierflügel"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Wide Wing",
			'fr-fr': "Larges Ailes",
			'es-es': "Ala Ancha",
			'it-it': "Grande Ala",
			'pt-br': "Asa Larga",
			'de-de': "Breite Flügel"
		},

		effect: {
			'en-us': "If you have more cards in your hand than your opponent, this attack does 80 more damage.",
			'fr-fr': "Si vous avez plus de cartes dans votre main que votre adversaire, cette attaque inflige 80 dégâts supplémentaires.",
			'es-es': "Si tienes más cartas en tu mano que tu rival, este ataque hace 80 puntos de daño más.",
			'it-it': "Se hai più carte in mano del tuo avversario, questo attacco infligge 80 danni in più.",
			'pt-br': "Se você tiver mais cartas na sua mão do que seu oponente, este ataque causará 80 pontos de dano a mais.",
			'de-de': "Wenn du mehr Karten auf der Hand hast als dein Gegner, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "40+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "F",


	description: {
		'en-us': "This six-legged Pokémon is easily capable of transporting an adult in flight. The wings on its tail help it stay balanced.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658498,
				tcgplayer: 272207
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658498,
				tcgplayer: 272207
			}
		},
	],
}

export default card
