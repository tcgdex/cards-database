import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [250],
	set: Set,

	name: {
		en: "Ho-Oh",
		fr: "Ho-Oh",
		es: "Ho-Oh",
		it: "Ho-Oh",
		pt: "Ho-Oh",
		de: "Ho-Oh"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			en: "Flap",
			fr: "Battement",
			es: "Aleteo",
			it: "Alabattito",
			pt: "Asa",
			de: "Flattern"
		},

		damage: 50
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Shining Blaze",
			fr: "Brasier Brillant",
			es: "Llamarada Radiante",
			it: "Fiammata Luminosa",
			pt: "Incêndio Brilhante",
			de: "Glühender Glanz"
		},

		effect: {
			en: "If you have any Tera Pokémon on your Bench, this attack does 100 more damage.",
			fr: "Si vous avez au moins un Pokémon Téracristal sur votre Banc, cette attaque inflige 100 dégâts supplémentaires.",
			es: "Si tienes algún Pokémon Teracristal en tu Banca, este ataque hace 100 puntos de daño más.",
			it: "Se hai dei Pokémon Teracristal in panchina, questo attacco infligge 100 danni in più.",
			pt: "Se você tiver algum Pokémon Tera no seu Banco, este ataque causará 100 pontos de dano a mais.",
			de: "Wenn du mindestens 1 Terakristall-Pokémon auf deiner Bank hast, fügt diese Attacke 100 Schadenspunkte mehr zu."
		},

		damage: "100+"
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "kodama",

	thirdParty: {
		cardmarket: 794274
	}
}

export default card
