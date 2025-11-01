import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Paldean Wooper",
		fr: "Axoloto de Paldea"
	},

	illustrator: "MAHOU",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 50,
	types: ["Darkness"],

	description: {
		en: "After losing a territorial struggle, Wooper began\nliving on land. The Pokémon changed over time,\ndeveloping a poisonous film to protect its body.",
		fr: "Depuis qu'une dispute territoriale l'a contraint à vivre sur la terre ferme, il protège son corps en le recouvrant d'un fluide toxique."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Poison Jab",
			fr: "Direct Toxik"
		},

		damage: 10,
		cost: ["Darkness"],

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card