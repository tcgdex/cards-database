import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Trousselin",
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				fr: "Verrou Mémoire",
			},
			damage: "30",
			effect: {
				fr: "Choisissez l'une des attaques du Pokémon Actif de votre adversaire. Pendant le prochain tour de votre adversaire, ce Pokémon-là ne peut pas utiliser cette attaque.",
			},
		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "J",
	illustrator: "MINAMINAMI Take",

	thirdParty: {
		cardmarket: 877475
	}
}

export default card
