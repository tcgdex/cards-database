import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Dark Muk",
		fr: "Grotadmorv obscur"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		89,
	],

	hp: 60,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Grimer",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Sticky Goo",
				fr: "Boue collante"
			},
			effect: {
				en: "As long as Dark Muk is your Active Pokémon, your opponent pays 2 more to retreat his or her Active Pokémon. This power stops working while Dark Muk is Asleep, Confused, or Paralyzed.",
				fr: "Tant que Grotadmorv obscur est votre Pokémon Actif, votre adversaire paye  supplémentaires pour faire battre en retraite son Pokémon Actif. Ce pouvoir cesse de fonctionner quand Grotadmorv obscur est Endormi, Confus ou Paralysé."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Sludge Punch",
				fr: "Point gadoue"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Les Grotadmorv apparaissent sans prévenir, répandant de la gadoue partout. À chaque fois qu'ils apparaissent dans une cité, la panique s'ensuit."
	}
}

export default card
