import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Smeargle",
		fr: "Queulorior"
	},

	illustrator: "MINAMINAMI Take",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [235],
	hp: 70,
	types: ["Colorless"],

	description: {
		en: "The fluid of Smeargle's tail secretions changes\nin the intensity of its hue as the Pokémon's\nemotions change.",
		fr: "La teinte du liquide qui coule de sa queue varie en fonction de son humeur."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Splatter Coating",
			fr: "Surcouche Épaisse"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"],

		effect: {
			en: "Change the type of a random Energy attached to your opponent's Active Pokémon to 1 of the following at random: {G}, {R}, {W}, {L}, {P}, {F}, {D}, or {M}.",
			fr: "Une des Énergies attachée au Pokémon Actif de votre adversaire est choisie au hasard pour être remplacée par une Énergie choisie au hasard parmi les types suivants : {G}, {R}, {W}, {L}, {P}, {F}, {D} et {M}."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card