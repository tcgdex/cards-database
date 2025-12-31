import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Nidoqueen",
		fr: "Nidoqueen"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [31],
	hp: 140,
	types: ["Darkness"],

	evolveFrom: {
		en: "Nidorina"
	},

	description: {
		en: "Nidoqueen is better at defense than offense.\nWith scales like armor, this Pokémon will shield\nits children from any kind of attack.",
		fr: "Il est plus doué pour se défendre que pour attaquer. Grâce à son blindage d'écailles, il protège ses petits de toute agression."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Lovestrike",
			fr: "Coup de Foudre"
		},

		damage: 80,
		cost: ["Darkness", "Darkness", "Colorless"],

		effect: {
			en: "This attack does 50 more damage for each of your Benched Nidoking.",
			fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque Nidoking sur votre Banc."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["lugia"]
}

export default card