import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Imakuni?'s Doduo",
		fr: "Doduo d’Imakuni?",
	},
	illustrator: "Imakuni?",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		84,
	],
	hp: 50,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Frenzied Escape",
			},
			effect: {
				en: "When this Doduo retreats, hold this card and throw it as hard as you can because Doduo is running away. Throw the card horizontally with a snap to get the farthest distance!",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Harmonize ",
				fr: "Pouvoir Pokémon : Sortie Précipitée",
			},
			effect: {
				en: "From the moment you use this attack, you must begin to sing a song. (While the song is being sung, the game continues.) When the song is finished, this attack does 30 damage.",
				fr: "Lorsque ce Doduo bat en retraite, saisissez cette carte et jetez-la aussi fort que possible car Doduo s’enfuit. Jetez la carte horizontalement et fort pour qu'elle aille le plus loin possible !",
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Harmoniser",
			},
			effect: {
				fr: "Dès que vous utilisez cette attaque, vous devez chanter une chanson. (Pendant ce temps, la partie continue.) Lorsque la chanson se termine, cette attaque inflige 30 dégâts.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],




}

export default card
