import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Igglybuff",
		fr: "Toudoudou",
		de: "Fluffeluff"
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
				fr: "Regard",
				de: "Anstarren"
			},
			effect: {
				en: "Once during your turn (before you attack), choose 1 of your opponent's Benched Pokémon that has a Pokémon Power. That power stops working until the end of this turn. This effect ends if that Pokémon leaves the Bench. (Pokémon Power)",
				fr: "Une fois pendant votre tour (avant votre attaque), choisissez 1 des Pokémon du Banc de votre adversaire qui a un Pouvoir Pokémon. Ce pouvoir cesse de fonctionner jusqu'à la fin du tour. L'effet de ce pouvoir cesse si le Pokémon quitte le Banc.",
				de: "Wähle einmal während deines Zuges (vor deinem Angriff) eines der Pokémon auf der Bank deines Gegners, dass eine Pokémon-Power hat. Diese Power verliert bis zum Ende dieses Zuges ihre Wirkung. Dieser Effekt endet, wenn dieses Pokémon die Bank verlässt.\n\nWenn dieses Baby-Pokémon dein aktives Pokémon ist und dein Gegner einen Angriff ankündigt, wirft dein Gegner eine Münze (noch bevor er alles andere tut). Bei \"Zahl\" endet der Zug deines Gegners."
			},
		},
	],

	description: {
		fr: "Son corps extrêmement flexible et élastique le fait rebondir continuellement — tout le temps, et dans toutes les directions."
	},

	thirdParty: {
		cardmarket: 274551,
		tcgplayer: 86257
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st edition"]
		}
	]
}

export default card

