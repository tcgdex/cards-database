import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Tyrogue",
		fr: "Debugant",
	},
	illustrator: "Mina Nakai",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		236,
	],
	hp: 60,
	types: [
		"Fightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Bratty Kick",
				fr: "Frappe Friponne",
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, put 3 damage counters on 1 of your opponent's Pokémon. If you use this Ability, your turn ends.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c’est face, placez 3 marqueurs de dégâts sur l’un des Pokémon de votre adversaire. Si vous utilisez ce talent, votre tour se termine.",
			},
		},
	],







}

export default card
