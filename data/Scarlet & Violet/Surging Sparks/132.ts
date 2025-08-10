import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [1023],
	set: Set,

	name: {
		en: "Iron Crown",
		fr: "Chef-de-Fer",
		es: "Ferrotesta",
		it: "Capoferreo",
		pt: "Chifres Férreos",
		de: "Eisenhaupt"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			en: "Deleting Slash",
			fr: "Tranche Suppression",
			es: "Tajo Formateo",
			it: "Lacerosgombro",
			pt: "Talho Apagador",
			de: "Destruktorschnitt"
		},

		effect: {
			en: "If your opponent has 3 or more Benched Pokémon, this attack does 80 more damage.",
			fr: "Si votre adversaire a 3 Pokémon de Banc ou plus, cette attaque inflige 80 dégâts supplémentaires.",
			es: "Si tu rival tiene 3 Pokémon en Banca o más, este ataque hace 80 puntos de daño más.",
			it: "Se il tuo avversario ha tre o più Pokémon in panchina, questo attacco infligge 80 danni in più.",
			pt: "Se o seu oponente tiver 3 ou mais Pokémon no Banco, este ataque causará 80 pontos de dano a mais.",
			de: "Wenn dein Gegner 3 oder mehr Pokémon auf seiner Bank hat, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "40+"
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			en: "Slicing Blade",
			fr: "Lame Tranchante",
			es: "Cuchilla Cortante",
			it: "Affettalama",
			pt: "Lâmina Fatiante",
			de: "Schwertschneide"
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		normal: false
	},

	illustrator: "akagi"
}

export default card
