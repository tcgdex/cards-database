import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Passimian ex",
		fr: "Quartermac-ex"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Two Shiny",
	category: "Pokemon",

	dexId: [766],
	hp: 130,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Offload Pass",
			fr: "Passe Latérale"
		},

		effect: {
			en: "If this Pokémon is in the Active Spot and is Knocked Out by damage from an attack from your opponent's Pokémon, move all {F} Energy from this Pokémon to 1 of your Benched Pokémon.",
			fr: "Si ce Pokémon est sur le Poste Actif et qu'il est mis K.O. par les dégâts d'une attaque d'un Pokémon de votre adversaire, déplacez toute l'Énergie {F} de ce Pokémon vers l'un de vos Pokémon de Banc."
		}
	}],

	attacks: [{
		name: {
			en: "Seismic Toss",
			fr: "Frappe Atlas"
		},

		damage: 60,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["mega-altaria"]
}

export default card