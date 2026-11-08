import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Topi Patroli"
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'id-id': "Selama Pokémon yang mengenakan kartu ini ada di Arena Bertarung, Deck sendiri tidak menerima efek kartu untuk membuang Deck ke Trash akibat serangan, Ability, Item, Pokémon Tool, atau Supporter lawan."
	},

	trainerType: "Tool",
	regulationMark: "G"
}

export default card