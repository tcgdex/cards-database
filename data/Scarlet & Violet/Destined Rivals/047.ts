import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Floatzel",
		fr: "Mustéflott",
		de: "Bojelin",
		it: "Floatzel",
		es: "Floatzel",
		pt: "Floatzel"
	},

	illustrator: "Gemi",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Hydro Pump",
			fr: "Hydrocanon",
			de: "Hydropumpe",
			it: "Idropompa",
			es: "Hidrobomba",
			pt: "Jato d'Água"
		},

		effect: {
			en: "This attack does 20 more damage for each {W} Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie {W} attachée à ce Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte {W}-Energie 20 Schadenspunkte mehr zu.",
			it: "Questo attacco infligge 20 danni in più per ogni Energia {W} assegnata a questo Pokémon.",
			es: "Este ataque hace 20 puntos de daño más por cada Energía {W} unida a este Pokémon.",
			pt: "Este ataque causa 20 pontos de dano a mais para cada Energia {W} ligada a este Pokémon."
		},

		damage: "50+"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card