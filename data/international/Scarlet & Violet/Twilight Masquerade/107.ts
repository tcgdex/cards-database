import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [701],
	set: Set,

	name: {
		'en-us': "Hawlucha",
		'fr-fr': "Brutalibré",
		'es-es': "Hawlucha",
		'it-it': "Hawlucha",
		'pt-br': "Hawlucha",
		'de-de': "Resladero"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			'en-us': "Prize Count",
			'fr-fr': "Compteur de Récompense",
			'es-es': "Cuenta de Premios",
			'it-it': "Contapremi",
			'pt-br': "Contagem de Prêmios",
			'de-de': "Preiszähler"
		},

		effect: {
			'en-us': "If you have more Prize cards remaining than your opponent, this attack does 90 more damage.",
			'fr-fr': "S'il vous reste plus de cartes Récompense qu'à votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
			'es-es': "Si te quedan más cartas de Premio que a tu rival, este ataque hace 90 puntos de daño más.",
			'it-it': "Se hai più carte Premio rimanenti del tuo avversario, questo attacco infligge 90 danni in più.",
			'pt-br': "Se você tiver mais cartas de Prêmio restantes do que seu oponente, este ataque causará 90 pontos de dano a mais.",
			'de-de': "Wenn du mehr verbleibende Preiskarten hast als dein Gegner, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "50+"
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "Hawlucha live quietly without flocking together. They fight constantly with their natural enemies: noisy groups of Primeape.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769281,
				tcgplayer: 550151
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769281,
				tcgplayer: 550151
			}
		},
	],

	illustrator: "Shigenori Negishi",

}

export default card