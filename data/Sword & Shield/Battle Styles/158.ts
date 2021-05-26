import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Bruno",
		fr: "Aldo"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		en: "Shuffle your hand into your deck. Then, draw 4 cards. If any of your Pokémon were Knocked Out during your opponent’s last turn, draw 7 cards instead.",
		fr: "Mélangez votre main avec votre deck. Ensuite, piochez 4 cartes. Si au moins l’un de vos Pokémon a été mis K.O. pendant le dernier tour de votre adversaire, piochez 7 cartes à la place."
	},

	trainerType: "Supporter"
}

export default card