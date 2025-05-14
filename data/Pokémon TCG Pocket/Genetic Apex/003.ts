import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Venusaur",
		fr: "Florizarre"
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 160,
	types: ["Grass"],
	stage: "Stage2",
	evolveFrom: {
		en: "Ivysaur",
		fr: "Herbizarre"
	},

	attacks: [{
		cost: ["Grass", "Grass", "Colorless", "Colorless"],

		name: {
			en: "Mega Drain",
			fr: "Méga-Sangsue"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon."
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
		en: "Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
		fr: "Sa plante donne une grosse fleur quand elle absorbe les rayons du soleil. Il est toujours à la recherche des endroits les plus ensoleillés."
	}
}

export default card
