import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Wobbuffet",
		fr: "Qulbutoké"
	},

	illustrator: "GOTO minori",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [202],
	hp: 90,
	types: ["Psychic"],

	description: {
		en: "It hates light and shock. If attacked, it inflates its\nbody to pump up its counterstrike.",
		fr: "Il déteste la lumière et les chocs. S'il est attaqué, il se gonfle pour riposter violemment."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Reply Strongly",
			fr: "Puissante Réplique"
		},

		damage: 30,
		cost: ["Psychic", "Colorless"],

		effect: {
			en: "If this Pokémon was damaged by an attack during your opponent's last turn while it was in the Active Spot, this attack does 50 more damage.",
			fr: "Si ce Pokémon a subi les dégâts d'une attaque pendant le dernier tour de votre adversaire alors qu'il était sur le Poste Actif, cette attaque inflige 50 dégâts supplémentaires."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["lugia"]
}

export default card