import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "M. Glaquette de Galar"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		fr: "M. Mime de Galar"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Danse Entraînante"
		},

		effect: {
			fr: "Une fois pendant votre tour, vous pouvez échanger l’une des cartes Récompense de votre adversaire (actuellement face cachée) contre la carte du dessus de son deck. (Les cartes restent face cachée.)"
		}
	}],

	attacks: [{
		name: {
			fr: "Folle Aventure"
		},

		effect: {
			fr: "Cette attaque inflige 20 dégâts pour chaque Pokémon dans votre pile de défausse qui a l’attaque Folle Aventure."
		},

		damage: "20×",
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2
}

export default card