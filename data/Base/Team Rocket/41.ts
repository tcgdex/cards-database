import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Dark Muk",
		fr: "Grotadmorv obscur",
		de: "Dunkles Sleimok"
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
				fr: "Boue collante",
				de: "Sticky Goo"
			},
			effect: {
				en: "As long as Dark Muk is your Active Pokémon, your opponent pays 2 more to retreat his or her Active Pokémon. This power stops working while Dark Muk is Asleep, Confused, or Paralyzed.",
				fr: "Tant que Grotadmorv obscur est votre Pokémon Actif, votre adversaire paye  supplémentaires pour faire battre en retraite son Pokémon Actif. Ce pouvoir cesse de fonctionner quand Grotadmorv obscur est Endormi, Confus ou Paralysé.",
				de: "As long as Dark Muk is your Active Pokémon, your opponent pays   more to retreat his or her Active Pokémon. This power stops working while Dark Muk is Asleep, Confused,or Paralyed."
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
				fr: "Point gadoue",
				de: "Sludge Punch"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
				de: "The Defending Pokémon is now Poisoned."
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
	},

	thirdParty: {
		cardmarket: 274094,
		tcgplayer: 84630
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"]
		}
	]
}

export default card
