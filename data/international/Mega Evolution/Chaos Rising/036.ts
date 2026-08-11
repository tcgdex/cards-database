import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		'en-us': "It keeps its intense psychic power from leaking out by using its ears to cover the organs emitting that power.",
	},


	name: {
		'en-us': "Espurr",
		'fr-fr': "Psystigri",
		'es-es': "Espurr",
		'es-mx': "Espurr",
		'de-de': "Psiau",
		'it-it': "Espurr",
		'pt-br': "Espurr"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	dexId: [677],
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Buddy Attack",
			'fr-fr': "Attaque Partenaire",
			'es-es': "Ataque Amigo",
			'es-mx': "Ataque Amistoso",
			'de-de': "Kumpelattacke",
			'it-it': "Attacco Amico",
			'pt-br': "Golpe Amigo"
		},

		cost: ["Psychic"],
		damage: "10+",

		effect: {
			'en-us': "If you played Emma from your hand during this turn, this attack does 60 more damage.",
			'fr-fr': "Si vous avez joué Millie de votre main pendant ce tour, cette attaque inflige 60 dégâts supplémentaires.",
			'es-es': "Si has jugado Matière de tu mano durante este turno, este ataque hace 60 puntos de daño más.",
			'es-mx': "Si jugaste Matière de tu mano durante este turno, este ataque hace 60 puntos de daño más.",
			'de-de': "Wenn du Matière während dieses Zuges aus deiner Hand gespielt hast, fügt diese Attacke 60 Schadenspunkte mehr zu.",
			'it-it': "Se hai giocato Matière dalla tua mano durante questo turno, questo attacco infligge 60 danni in più.",
			'pt-br': "Se você jogou Emma da sua mão durante este turno, este ataque causará 60 pontos de dano a mais."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886428,
				tcgplayer: 693483
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 886428,
				tcgplayer: 693483
			}
		},
	],
}

export default card
