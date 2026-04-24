import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [977],
	set: Set,

	name: {
		en: "Dondozo",
		fr: "Oyacata",
		es: "Dondozo",
		it: "Dondozo",
		pt: "Dondozo",
		de: "Heerashai"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Hammer In",
			fr: "Enfoncement",
			es: "Martillear",
			it: "Martello",
			pt: "Martelada",
			de: "Einhämmern"
		},

		damage: 60
	}, {
		cost: ["Water", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Dangerous Wave",
			fr: "Vague Dangereuse",
			es: "Ola Peligrosa",
			it: "Onda Pericolosa",
			pt: "Onda Perigosa",
			de: "Gefährliche Welle"
		},

		effect: {
			en: "Flip 2 coins. If both of them are heads, this attack does 100 more damage.",
			fr: "Lancez 2 pièces. Si vous obtenez 2 côtés face, cette attaque inflige 100 dégâts supplémentaires.",
			es: "Lanza 2 monedas. Si sale cara en ambas, este ataque hace 100 puntos de daño más.",
			it: "Lancia due volte una moneta. Se esce entrambe le volte testa, questo attacco infligge 100 danni in più.",
			pt: "Jogue 2 moedas. Se as duas saírem cara, este ataque causará 100 pontos de dano a mais.",
			de: "Wirf 2 Münzen. Zeigen beide Münzen Kopf, fügt diese Attacke 100 Schadenspunkte mehr zu."
		},

		damage: "100+"
	}],

	retreat: 4,
	regulationMark: "G",
	illustrator: "Shin Nagasawa"
}

export default card