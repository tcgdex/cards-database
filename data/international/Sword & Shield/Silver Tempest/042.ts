import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [362],
	set: Set,

	name: {
		'en-us': "Glalie",
		'fr-fr': "Oniglali",
		'es-es': "Glalie",
		'it-it': "Glalie",
		'pt-br': "Glalie",
		'de-de': "Firnontor"
	},

	illustrator: "Scav",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Snorunt",
		'fr-fr': "Stalgamin",
		'es-es': "Snorunt",
		'it-it': "Snorunt",
		'pt-br': "Snorunt",
		'de-de': "Schneppke"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure",
			'es-es': "Mordisco",
			'it-it': "Morso",
			'pt-br': "Mordida",
			'de-de': "Biss"
		},

		damage: 60
	}, {
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Big Mouth",
			'fr-fr': "Grande Bouche",
			'es-es': "Boca Grande",
			'it-it': "Granbocca",
			'pt-br': "Bocão",
			'de-de': "Großmaul"
		},

		effect: {
			'en-us': "If you played Candice from your hand during this turn, this attack does 130 more damage.",
			'fr-fr': "Si vous avez joué Gladys de votre main pendant ce tour, cette attaque inflige 130 dégâts supplémentaires.",
			'es-es': "Si has jugado 1 carta de Inverna de tu mano durante este turno, este ataque hace 130 puntos de daño más.",
			'it-it': "Se hai giocato Bianca dalla tua mano durante questo turno, questo attacco infligge 130 danni in più.",
			'pt-br': "Se você jogou Candice da sua mão durante este turno, este ataque causará 130 pontos de dano a mais.",
			'de-de': "Wenn du Frida während dieses Zuges aus deiner Hand gespielt hast, fügt diese Attacke 130 Schadenspunkte mehr zu."
		},

		damage: "130+"
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "It has a body of ice that won't melt, even with fire. It can instantly freeze moisture in the atmosphere.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682087,
				tcgplayer: 451679
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682087,
				tcgplayer: 451679
			}
		},
	],
}

export default card
