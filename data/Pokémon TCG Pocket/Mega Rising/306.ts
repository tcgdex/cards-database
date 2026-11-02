import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Hypno",
		fr: "Hypnomade"
	},

	illustrator: "Taiga Kasai",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [97],
	hp: 100,
	types: ["Psychic"],

	evolveFrom: {
		en: "Drowzee",
		fr: "Soporifik"
	},

	description: {
		en: "When it locks eyes with an enemy, it will use\na mix of psi moves, such as Hypnosis and\nConfusion.",
		fr: "Lorsqu'il croise le regard de son adversaire, il utilise\\nde nombreux pouvoirs surnaturels comme l'hypnose."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Sleep Pendulum",
			fr: "Pendulo Dodo"
		},

		effect: {
			en: "Once during your turn, you may flip a coin. If heads, your opponent's Active Pokémon is now Asleep.",
			fr: "Une fois pendant votre tour, vous pouvez lancer une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Endormi."
		}
	}],

	attacks: [{
		name: {
			en: "Psypunch",
			fr: "Coup de Poing Psy"
		},

		damage: 50,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["mega-gyarados"]
}

export default card