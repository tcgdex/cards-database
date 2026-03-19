import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Paradise Resort",
		fr: "Hôtel « Au paradis des Pokémon »"
	},
	rarity: "None",
	category: "Trainer",
	illustrator: "Naoki Saito",

	effect: {
		en: "The Retreat Cost of each Psyduck in play (both yours and your opponent's) is Colorless less.",
		fr: "Le Coût de Retraite de chacun des Psykokwak en jeu (les vôtres et ceux de votre adversaire) est diminué de ."
	},

	regulationMark: "I",

	variants: [
		{
			type: "normal",
			stamp: ["worlds-2025"]
		},
		{
			type: "normal",
			stamp: ["worlds-2025","staff"]
		},
		{
			type: "normal",
			stamp: ["worlds-2025","top-thirty-two"]
		},
		{
			type: "normal",
			stamp: ["worlds-2025","top-sixteen"]
		},
		{
			type: "normal",
			stamp: ["worlds-2025","top-eight"]
		},
		{
			type: "normal",
			stamp: ["worlds-2025","semi-finalist"]
		},
		{
			type: "normal",
			stamp: ["worlds-2025","finalist"]
		},
	]
}

export default card
