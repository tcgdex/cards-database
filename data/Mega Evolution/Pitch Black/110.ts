import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Iron Defender",
		fr: "Défense de Fer",
		es: "Defensor Férreo",
		'es-mx': "Defensa Férrea",
		de: "Eisendefensive"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Ultra Rare",
	category: "Trainer",
	trainerType: "Item",
	regulationMark: "I",

	effect: {
		en: "During your opponent's next turn, your Metal type Pokémon take 30 less damage from attacks from your opponent's Pokémon (including Pokémon put in play after you play this card)."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895895,
				tcgplayer: 704867
			}
		},
	],
}

export default card
