import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Bibichut",
		en: "Hatenna"
	},

	illustrator: "otumami",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	attacks: [{
		name: {
			fr: "Trouver un Ami",
			en: "Find a Friend"
		},

		effect: {
			fr: "Cherchez dans votre deck un Pokémon, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
			en: "Search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			fr: "Piqûre Psy",
			en: "Psyshot"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card