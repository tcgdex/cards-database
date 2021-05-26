import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Nigosier"
	},

	illustrator: "Akira Komayama",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	attacks: [{
		name: {
			fr: "Plongée"
		},

		effect: {
			fr: "Lancez une pièce. Si c’est face, pendant le prochain tour de votre adversaire, évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon."
		},

		damage: 20,
		cost: ["Water"]
	}, {
		name: {
			fr: "Hydrocanon"
		},

		effect: {
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon."
		},

		damage: "50+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1
}

export default card