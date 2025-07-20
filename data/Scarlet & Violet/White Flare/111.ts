import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	set: Set,

	name: {
		en: "Vanillite",
		fr: "Sorbébé",
		de: "Gelatini",
		it: "Vanillite",
		pt: "Vanillite",
		es: "Vanillite",
		'es-mx': "Vanillite"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Beat",
			fr: "Bataille",
			de: "Verprügler",
			it: "Battuta",
			pt: "Pulso",
			es: "Toque",
			'es-mx': "Golpeteo"
		},

		damage: 10
	}, {
		cost: ["Water", "Colorless"],

		name: {
			en: "Ice Edge",
			fr: "Lame de Givre",
			de: "Eisiger Abgrund",
			it: "Fendighiaccio",
			pt: "Gume de Gelo",
			es: "Hielo Afilado",
			'es-mx': "Filo Gélido"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
			pt: "Jogue uma moeda. Se sair cara, este ataque causará 20 pontos de dano a mais.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			'es-mx': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más."
		},

		damage: "20+"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card