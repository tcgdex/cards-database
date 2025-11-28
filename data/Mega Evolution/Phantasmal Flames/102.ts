import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Paldean Wooper",
		fr: "Axoloto de Paldea",
		es: "Wooper de Paldea",
		'es-mx': "Wooper de Paldea",
		de: "Paldea-Felino",
		it: "Wooper di Paldea",
		pt: "Wooper de Paldea"
	},

	rarity: "Illustration rare",
	category: "Pokemon",

	dexId: [194],
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",
	dexId: [194],

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Trip Over",
			fr: "Croche-Pied",
			es: "Tropezón",
			'es-mx': "Tropiezo",
			de: "Stolperer",
			it: "Inciampare",
			pt: "Tropeção"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			'es-mx': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
			pt: "Jogue uma moeda. Se sair cara, este ataque causará 20 pontos de dano a mais."
		},

		damage: "10+"
	}],

	retreat: 1,
	regulationMark: "H",

	thirdParty: {
		cardmarket: 857677
	}
}

export default card