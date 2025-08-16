import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [467],
	set: Set,

	name: {
		en: "Magmortar",
		fr: "Maganon",
		es: "Magmortar",
		it: "Magmortar",
		pt: "Magmortar",
		de: "Magbrant"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	evolveFrom: {
		en: "Magmar",
		fr: "Magmar",
		es: "Magmar",
		it: "Magmar",
		pt: "Magmar",
		de: "Magmar"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Mega Punch",
			fr: "Ultimapoing",
			es: "Megapuño",
			it: "Megapugno",
			pt: "Megassoco",
			de: "Megahieb"
		},

		damage: 50
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Boltsplosion",
			fr: "Explofoudre",
			es: "Rayoexplosión",
			it: "Esplodifulmine",
			pt: "Explorraio",
			de: "Blitzplosion"
		},

		effect: {
			en: "If Electivire is on your Bench, this attack does 120 more damage.",
			fr: "Si Élekable est sur votre Banc, cette attaque inflige 120 dégâts supplémentaires.",
			es: "Si Electivire está en tu Banca, este ataque hace 120 puntos de daño más.",
			it: "Se Electivire è nella tua panchina, questo attacco infligge 120 danni in più.",
			pt: "Se Electivire estiver no seu Banco, este ataque causará 120 pontos de dano a mais.",
			de: "Wenn sich Elevoltek auf deiner Bank befindet, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "120+"
	}],

	retreat: 3,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 608470,
		tcgplayer: 263708
	}
}

export default card