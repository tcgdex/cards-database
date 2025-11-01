import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Togedemaru",
		fr: "Togedemaru"
	},

	illustrator: "Oswaldo KATO",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Metal"],

	description: {
		en: "With the long hairs on its back, this Pokémon\ntakes in electricity from other electric Pokémon.\nIt stores what it absorbs in an electric sac.",
		fr: "Grâce à sa longue épine dorsale, il capte le tonnerre et les attaques des Pokémon Électrik, puis stocke leur courant dans sa poche électrique."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Bristling Spikes",
			fr: "Épines Hérissées"
		},

		damage: 30,
		cost: ["Metal", "Metal"],

		effect: {
			en: "During your opponent's next turn, if this Pokémon is damaged by an attack, do 30 damage to the Attacking Pokémon.",
			fr: "Pendant le prochain tour de votre adversaire, si ce Pokémon subit les dégâts d'une attaque, le Pokémon Attaquant subit 30 dégâts."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card