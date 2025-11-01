import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Chatot",
		fr: "Pijako"
	},

	illustrator: "Akira Komayama",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		en: "It mimics the cries of other Pokémon to trick them\ninto thinking it's one of them. This way they won't\nattack it.",
		fr: "Il reproduit le cri de ses ennemis pour faire croire qu'il est des leurs et éviter d'être attaqué."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Tone-Deaf",
			fr: "Dur d'Oreille"
		},

		damage: 10,
		cost: ["Colorless"],

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card