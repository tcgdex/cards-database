import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Igglybuff",
		fr: "Toudoudou",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		174,
	],
	hp: 60,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Sleepy Voice",
				fr: "Voix Endormie",
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, your opponent's Active Pokémon is now Asleep. If you use this Ability, your turn ends.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Endormi. Si vous utilisez ce talent, votre tour se termine.",
			},
		},
	],







}

export default card
