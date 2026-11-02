import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Gothitelle",
		fr: "Sidérella"
	},

	illustrator: "Eri Yamaki",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [576],
	hp: 130,
	types: ["Psychic"],

	evolveFrom: {
		en: "Gothorita",
		fr: "Mesmérella"
	},

	description: {
		en: "It gazes at the stars to predict the future. It acts\nsomewhat detached because it has seen the end\nof all existence."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Stellar Cradle",
			fr: "Berceau des Étoiles"
		},

		damage: 70,
		cost: ["Psychic", "Psychic"],

		effect: {
			en: "During your opponent's next turn, if they attach Energy from their Energy Zone to the Defending Pokémon, that Pokémon will be Asleep.",
			fr: "Pendant le prochain tour de votre adversaire, s'il attache une Énergie de sa zone Énergie au Pokémon Défenseur, ce Pokémon sera Endormi."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-altaria"]
}

export default card