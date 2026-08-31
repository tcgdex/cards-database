import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Alcremie",
		es: "Alcremie",
		de: "Pokusan"
	},

	illustrator: "Tika Matsuno",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [869],
	hp: 80,
	types: ["Psychic"],

	evolveFrom: {
		en: "Milcery",
		es: "Milcery",
		de: "Hokumil"
	},

	description: {
		en: "When it trusts a Trainer, it will treat them\nto berries it's decorated with cream.",
		es: "Obsequia bayas decoradas con nata a\naquellos Entrenadores en los que confía.",
		de: "Es macht einem Trainer, dem es vertraut, mit Beeren samt Sahnedekoration eine Freude."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Sweets Overload",
			es: "Dulzor Extremo",
			de: "Süßer Überfluss"
		},

		damage: 40,
		cost: ["Colorless"],

		effect: {
			en: "This attack does 40 damage for each time your Pokémon used Sweets Relay during this game.",
			es: "Este ataque hace 40 puntos de daño por cada vez que tus Pokémon hayan usado Relevo Dulce durante esta partida.",
			de: "Diese Attacke fügt für jedes Mal, wenn deine Pokémon in diesem Spiel Süße Staffel eingesetzt haben, 40 Schadenspunkte zu."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["vol10"]
}

export default card