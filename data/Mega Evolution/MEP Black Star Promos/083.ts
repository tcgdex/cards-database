import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Slowbro",
		fr: "Flagadoss",
		es: "Slowbro",
		it: "Slowbro",
		pt: "Slowbro",
		de: "Lahmus"
	},

	illustrator: "Yuriko Akase",
	rarity: "Promo",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	stage: "Stage1",
	dexId: [80],

	evolveFrom: {
		en: "Slowpoke",
		fr: "Ramoloss",
		es: "Slowpoke",
		it: "Slowpoke",
		pt: "Slowpoke",
		de: "Flegmon"
	},

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "All Out",
			fr: "À Fond",
			es: "A por Todas",
			it: "A Tutta Forza",
			pt: "Esgotado",
			de: "Aufs Ganze gehen"
		},

		effect: {
			en: "If you have no cards in your hand, this attack does 160 more damage.",
			fr: "Si vous n’avez aucune carte dans votre main, cette attaque inflige 160 dégâts supplémentaires.",
			es: "Si no tienes ninguna carta en tu mano, este ataque hace 160 puntos de daño más.",
			it: "Se non hai carte in mano, questo attacco infligge 160 danni in più.",
			pt: "Se você não tiver cartas na sua mão, este ataque causará 160 pontos de dano a mais.",
			de: "Wenn du keine Karten auf deiner Hand hast, fügt diese Attacke 160 Schadenspunkte mehr zu."
		},

		damage: "50+"
	}, {
      		cost: ["Colorless", "Colorless", "Colorless"],

			name: {
				en: "Zen Headbutt",
				fr: "Psykoud'Boul",
				es: "Cabezazo Zen",
				it: "Cozzata Zen",
				pt: "Cabeçada Zen",
				de: "Zen-Kopfstoß"
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
