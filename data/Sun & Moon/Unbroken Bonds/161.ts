import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Happiny",
		fr: "Ptiravi",
	},
	illustrator: "Eri Yamaki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		440,
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
				en: "Playhouse Heal",
				fr: "Soins Maisonjouet",
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, heal 60 damage from 1 of your Pokémon. If you use this Ability, your turn ends.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c’est face, soignez 60 dégâts à l’un de vos Pokémon. Si vous utilisez ce talent, votre tour se termine.",
			},
		},
	],







}

export default card
