import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Hitting Hammer",
		fr: "Maillet Cognant"
	},

	illustrator: "Toyste Beach",
	rarity: "Two Diamond",
	category: "Trainer",

	effect: {
		en: "Flip 2 coins. If both of them are heads, discard a random Energy from your opponent's Active Pokémon.",
		fr: "Lancez 2 pièces. Si toutes sont côté face, défaussez au hasard une Énergie attachée au Pokémon Actif de votre adversaire."
	},

	trainerType: "Item",

	boosters: ["mega-gyarados"]
}

export default card