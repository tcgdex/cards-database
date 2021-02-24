import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Sableye",
		fr: "Ténéfix",
	},
	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		302,
	],
	hp: 70,
	types: [
		"Darkness",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Excavate",
				fr: "Déterrer",
			},
			effect: {
				en: "Once during your turn (before your attack), you may look at the top card of your deck. You may discard that card.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez regarder la carte du dessus de votre deck. Vous pouvez défausser cette carte.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Disable",
				fr: "Entrave",
			},
			effect: {
				en: "Choose 1 of your opponent's Active Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn.",
				fr: "Choisissez l’une des attaques du Pokémon Actif de votre adversaire. Ce Pokémon ne peut pas utiliser cette attaque pendant le prochain tour de votre adversaire.",
			},
			damage: 10,

		},
	],


	retreat: 1,



}

export default card
