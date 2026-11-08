import { Card } from "models/database/card"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Slowbro",
		'fr-fr': "Flagadoss",
		'es-es': "Slowbro",
		'it-it': "Slowbro",
		'pt-br': "Slowbro",
		'de-de': "Lahmus"
	},

	illustrator: "Yuriko Akase",
	rarity: "Promo",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	stage: "Stage1",
	dexId: [80],

	evolveFrom: {
		'en-us': "Slowpoke",
		'fr-fr': "Ramoloss",
		'es-es': "Slowpoke",
		'it-it': "Slowpoke",
		'pt-br': "Slowpoke",
		'de-de': "Flegmon"
	},

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "All Out",
			'fr-fr': "À Fond",
			'es-es': "A por Todas",
			'it-it': "A Tutta Forza",
			'pt-br': "Esgotado",
			'de-de': "Aufs Ganze gehen"
		},

		effect: {
			'en-us': "If you have no cards in your hand, this attack does 160 more damage.",
			'fr-fr': "Si vous n’avez aucune carte dans votre main, cette attaque inflige 160 dégâts supplémentaires.",
			'es-es': "Si no tienes ninguna carta en tu mano, este ataque hace 160 puntos de daño más.",
			'it-it': "Se non hai carte in mano, questo attacco infligge 160 danni in più.",
			'pt-br': "Se você não tiver cartas na sua mão, este ataque causará 160 pontos de dano a mais.",
			'de-de': "Wenn du keine Karten auf deiner Hand hast, fügt diese Attacke 160 Schadenspunkte mehr zu."
		},

		damage: "50+"
	}, {
      		cost: ["Colorless", "Colorless", "Colorless"],

			name: {
				'en-us': "Zen Headbutt",
				'fr-fr': "Psykoud'Boul",
				'es-es': "Cabezazo Zen",
				'it-it': "Cozzata Zen",
				'pt-br': "Cabeçada Zen",
				'de-de': "Zen-Kopfstoß"
			},

      		damage: "110"
    }],

	retreat: 3,
	regulationMark: "J",

	weaknesses: [{
		type: "Darkness",
		value: "x2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	variants: [
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 894262,
				tcgplayer: 706129

			}
		},
	],
}

export default card
