import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Fantyrm",
		en: "Dreepy",
		es: "Dreepy",
		it: "Dreepy",
		pt: "Dreepy",
		de: "Grolldra"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	attacks: [{
		name: {
			fr: "Vive-Attaque",
			en: "Quick Attack",
			es: "Ataque Rápido",
			it: "Attacco Rapido",
			pt: "Ataque Rápido",
			de: "Ruckzuckhieb"
		},

		effect: {
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 10 dégâts supplémentaires.",
			en: "Flip a coin. If heads, this attack does 10 more damage.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 10 puntos de daño más.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 10 danni in più.",
			pt: "Jogue 1 moeda. Se sair cara, este ataque causará 10 pontos de dano a mais.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 10 Schadenspunkte mehr zu."
		},

		damage: "10+",
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Basic",

	description: {
		en: "After being reborn as a ghost Pokémon, Dreepy wanders the areas it used to inhabit back when it was alive in prehistoric seas."
	}
}

export default card