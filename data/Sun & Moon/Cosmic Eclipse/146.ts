import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Azurill",
		fr: "Azurill",
	},
	illustrator: "Asako Ito",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		298,
	],
	hp: 60,
	types: [
		"Fairy",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Growing Up",
				fr: "Maturation",
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, attach a basic Energy card from your discard pile to your Active Pokémon. If you use this Ability, your turn ends.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c’est face, attachez une carte Énergie de base de votre pile de défausse à votre Pokémon Actif. Si vous utilisez ce talent, votre tour se termine.",
			},
		},
	],







}

export default card
