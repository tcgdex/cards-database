import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Grimmsnarl",
		fr: "Angoliath",
		es: "Grimmsnarl",
		it: "Grimmsnarl",
		pt: "Grimmsnarl",
		de: "Olangaar"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],

	evolveFrom: {
		en: "Morgrem",
		fr: "Fourbelin",
		es: "Morgrem",
		it: "Morgrem",
		pt: "Morgrem",
		de: "Pelzebub"
	},

	stage: "Stage2",
	retreat: 3,
	regulationMark: "E",
	illustrator: "kawayoo",

	description: {
		en: "Its hairs work like muscle fibers. When its hairs unfurl, they latch on to opponents, ensnaring them as tentacles would."
	},

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Bite",
			fr: "Morsure",
			es: "Mordisco",
			it: "Morso",
			de: "Biss",
			pt: "Mordida"
		},

		damage: 60
	}, {
		cost: ["Darkness", "Darkness"],

		name: {
			en: "Rear Attack",
			fr: "Attaque Arrière",
			es: "Ataque por la Retaguardia",
			it: "Retroattacco",
			de: "Rückenstärkung",
			pt: "Retaguarda"
		},

		damage: "100+",

		effect: {
			en: "If you have 2 or fewer Benched Pokémon, this attack does 140 more damage.",
			fr: "Si vous avez 2 Pokémon de Banc ou moins, cette attaque inflige 140 dégâts supplémentaires.",
			es: "Si tienes 2 o menos Pokémon en Banca, este ataque hace 140 puntos de daño más.",
			it: "Se hai due o meno Pokémon in panchina, questo attacco infligge 140 danni in più.",
			de: "Wenn du 2 oder weniger Pokémon auf deiner Bank hast, fügt diese Attacke 140 Schadenspunkte mehr zu.",
			pt: "Se você tiver 2 ou menos Pokémon no seu Banco, este ataque causará 140 pontos de dano a mais."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	}
}

export default card
