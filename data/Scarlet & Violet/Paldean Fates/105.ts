import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Toedscool",
		fr: "Terracool",
		es: "Toedscool",
		it: "Toedscool",
		pt: "Toedscool"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Furious Kicks",
			fr: "Coups de Pied Rageurs",
			es: "Patadas Furiosas",
			it: "Calci Furiosi",
			pt: "Chutes de Fúria"
		},

		effect: {
			en: "Flip 3 coins. This attack does 10 damage for each heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			es: "Lanza 3 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			it: "Lancia tre volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
			pt: "Jogue 3 moedas. Este ataque causa 10 pontos de dano para cada cara."
		},

		damage: "10×"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card