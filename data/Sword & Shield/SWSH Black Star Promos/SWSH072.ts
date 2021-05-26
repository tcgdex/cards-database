import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Vaporeon",
		fr: "Aquali"
	},

	illustrator: "so-taro",
	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Watery Shroud",
			fr: "Voile Aquatique"
		},

		effect: {
			en: "As long as this Pokémon is on your Bench, prevent all damage done to this Pokémon by attacks (both yours and your opponent’s).",
			fr: "Tant que ce Pokémon est sur votre Banc, évitez tous les dégâts infligés à ce Pokémon par des attaques (les vôtres et celles de votre adversaire)."
		}
	}],

	attacks: [{
		name: {
			en: "Hydro Pump",
			fr: "Hydrocanon"
		},

		effect: {
			en: "This attack does 20 more damage for each Water Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon."
		},

		damage: "60+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2
}

export default card