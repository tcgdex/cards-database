import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Vileplume",
		fr: "Rafflesia"
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],
	stage: "Stage2",
	evolveFrom: {
		en: "Gloom",
		fr: "Ortide"
	},

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			en: "Soothing Scent",
			fr: "Senteur Apaisante"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi"
		},

		damage: "80"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3,
	rarity: "Three Diamond",

	description: {
		en: "It has the world's largest petals. With every step, the petals shake out heavy clouds of toxic pollen.",
		fr: "Il possède les plus gros pétales du monde qui sèment d'épais nuages de pollen toxique à chacun de ses pas."
	}
}

export default card
