import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Single Strike Style Mustard",
		fr: "Mustar Style Poing Final"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "You can play this card only when it is the last card in your hand.\nSearch your deck for a Single Strike Pokémon and put it onto your Bench. Then, shuffle your deck. If you searched your deck in this way, draw 5 cards.",
		fr: "Vous ne pouvez jouer cette carte que si c’est votre dernière carte en main.\nCherchez dans votre deck un Pokémon Poing Final, puis placez-le sur votre Banc. Mélangez ensuite votre deck. Si vous avez cherché dans votre deck de cette façon, piochez 5 cartes."
	},

	trainerType: "Supporter"
}

export default card