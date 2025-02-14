import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"
import { Palkia } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Armor Fossil"
	},

	illustrator: "Toyste Beach",
	rarity: "One Diamond",
	category: "Trainer",

	effect: {
		en: "Play this card as if it were a 40-HP Basic <span class=\"energy-text energy-text--type-colorless\"></span> Pokémon.<br />At any time during your turn, you may discard this card from play.<br />This card can't retreat."
	},

	trainerType: "Item",
		
	boosters: [Palkia]
}

export default card