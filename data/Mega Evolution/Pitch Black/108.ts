import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Gladion's Final Battle",
		fr: "Combat Final de Gladio",
		es: "Combate Final de Gladio",
		'es-mx': "Combate Final de Gladion",
		de: "Gladios Finalkampf"
	},

	illustrator: "akagi",
	rarity: "Ultra Rare",
	category: "Trainer",
	trainerType: "Supporter",
	regulationMark: "J",

	effect: {
		en: "You can play this card only if it is the last card in your hand. During this turn, attacks used by your Pokémon that do not have a Rule Box do 80 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance) (Pokémon ex, Pokémon V etc. have Rule Boxes)"
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895893,
				tcgplayer: 704865
			}
		},
	],
}

export default card
