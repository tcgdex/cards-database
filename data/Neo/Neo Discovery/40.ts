import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Igglybuff",
		fr: "Toudoudou"
	},

	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		174,
	],

	hp: 30,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Gaze",
				fr: "Regard"
			},
			effect: {
				en: "Once during your turn (before you attack), choose 1 of your opponent's Benched Pokémon that has a Pokémon Power. That power stops working until the end of this turn. This effect ends if that Pokémon leaves the Bench. (Pokémon Power)",
				fr: "Une fois pendant votre tour (avant votre attaque), choisissez 1 des Pokémon du Banc de votre adversaire qui a un Pouvoir Pokémon. Ce pouvoir cesse de fonctionner jusqu'à la fin du tour. L'effet de ce pouvoir cesse si le Pokémon quitte le Banc."
			},
		},
	],

	description: {
		fr: "Son corps extrêmement flexible et élastique le fait rebondir continuellement — tout le temps, et dans toutes les directions."
	}
}

export default card
