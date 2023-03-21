import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Claydol",
		fr: "Kaorine",
		es: "Claydol",
		it: "Claydol",
		pt: "Claydol",
		de: "Lepumentas"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	evolveFrom: {
		en: "Baltoy",
		fr: "Balbuto",
		es: "Baltoy",
		it: "Baltoy",
		pt: "Baltoy",
		de: "Puppance"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Spinning Attack",
			fr: "Attaque Tournante",
			es: "Ataque Giratorio",
			it: "Attacco Rotante",
			pt: "Ataque Giratório",
			de: "Rundumangriff"
		},

		damage: 40
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Coinciding Figures",
			fr: "Caractères Correspondants",
			es: "Figuras Coincidentes",
			it: "Statue Identiche",
			pt: "Figuras Espelhadas",
			de: "Übereinstimmende Zahlen"
		},

		effect: {
			en: "If you and your opponent have the same number of Benched Pokémon, this attack does 90 more damage.",
			fr: "Si vous avez le même nombre de Pokémon de Banc que votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
			es: "Si tu rival y tú tenéis la misma cantidad de Pokémon en Banca, este ataque hace 90 puntos de daño más.",
			it: "Se tu e il tuo avversario avete lo stesso numero di Pokémon in panchina, questo attacco infligge 90 danni in più.",
			pt: "Se você e o seu oponente tiverem o mesmo número de Pokémon no Banco, este ataque causará 90 pontos de dano a mais.",
			de: "Wenn du genauso viele Pokémon auf der Bank hast wie dein Gegner, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "90+"
	}],

	retreat: 2,
	regulationMark: "F",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card