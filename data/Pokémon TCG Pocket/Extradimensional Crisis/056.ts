import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Stoutland",
		fr: "Mastouffe"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [508],
	hp: 140,
	types: ["Colorless"],

	evolveFrom: {
		en: "Herdier"
	},

	description: {
		en: "These Pokémon seem to enjoy living with humans.\nEven a Stoutland caught in the wild will warm up\nto people in about three days.",
		fr: "Il apprécierait tant la compagnie des êtres humains qu'il ne faudrait pas plus de trois jours pour apprivoiser un Mastouffe sauvage."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Guard Dog Visage",
			fr: "Surveillance Canine"
		},

		effect: {
			en: "As long as this Pokémon is in the Active Spot, attacks used by your opponent's Active Pokémon cost 1 {C} more.",
			fr: "Tant que ce Pokémon est sur le Poste Actif, les attaques utilisées par le Pokémon Actif de votre adversaire coûtent une Énergie {C} de plus."
		}
	}],

	attacks: [{
		name: {
			en: "Sharp Fang",
			fr: "Croc Aiguisé"
		},

		damage: 70,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card
