import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Glaceon",
		fr: "Givrali"
	},

	illustrator: "Fujimoto Gold",
	rarity: "One Star",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	evolveFrom: {
		en: "Eevee"
	},

	description: {
		en: "It can control its body temperature at will.\nThis enables it to freeze the moisture in the\natmosphere, creating flurries of diamond dust.",
		fr: "Il peut contrôler la température de son corps à volonté et créer des cristaux de glace en gelant l'humidité de l'air."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Ice Blade",
			fr: "Lame de Glace"
		},

		cost: ["Water", "Water"],

		effect: {
			en: "This attack does 50 damage to 1 of your opponent's Pokémon.",
			fr: "Cette attaque inflige 50 dégâts à l'un des Pokémon de votre adversaire."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 2
}

export default card