import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Slowbro",
		fr: "Flagadoss",
		es: "Slowbro",
		'es-mx': "Slowbro",
		de: "Lahmus",
		it: "Slowbro",
		pt: "Slowbro"
	},

	illustrator: "Mékayu",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [80],
	hp: 130,
	types: ["Psychic"],

	evolveFrom: {
		en: "Slowpoke"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "All Out",
			fr: "À Fond",
			es: "A por Todas",
			'es-mx': "Sin Más",
			de: "Aufs Ganze gehen",
			it: "A Tutta Forza",
			pt: "Esgotado"
		},

		cost: ["Psychic"],

		damage: "50+",

		effect: {
			en: "If you have no cards in your hand, this attack does 160 more damage.",
			fr: "Si vous n'avez aucune carte dans votre main, cette attaque inflige 160 dégâts supplémentaires.",
			es: "Si no tienes ninguna carta en tu mano, este ataque hace 160 puntos de daño más.",
			'es-mx': "Si no tienes ninguna carta en tu mano, este ataque hace 160 puntos de daño más.",
			de: "Wenn du keine Karten auf deiner Hand hast, fügt diese Attacke 160 Schadenspunkte mehr zu.",
			it: "Se non hai carte in mano, questo attacco infligge 160 danni in più.",
			pt: "Se você não tiver cartas na sua mão, este ataque causará 160 pontos de dano a mais."
		}
	}, {
		name: {
			en: "Zen Headbutt",
			fr: "Psykoud'Boul",
			es: "Cabezazo Zen",
			'es-mx': "Cabezazo Zen",
			de: "Zen-Kopfstoß",
			it: "Cozzata Zen",
			pt: "Cabeçada Zen"
		},

		cost: ["Colorless", "Colorless", "Colorless"],

		damage: 110
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],
	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895874,
				tcgplayer: 704847
			}
		},
	],
}

export default card
