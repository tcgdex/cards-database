import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Raikou",
		fr: "Raikou",
		de: "Raikou"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		243,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Lightning Burst",
				fr: "Explosion d'éclairs",
				de: "Blitzbogen"
			},
			effect: {
				en: "Whenever you attach a Lightning Energy card from your hand to Raikou, if your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon. This power stops working while Raikou is Asleep, Confused, or Paralyzed.",
				fr: "Lorsque vous attachez une carte Énergie  à Raikou depuis votre main, si votre adversaire à des Pokémon sur son Banc, il choisit l'un d'entre eux et l'échange avec le Pokémon Défenseur. Ce pouvoir cesse de fonctionner si Raikou est Endormi, Confus ou Paralysé.",
				de: "Immer wenn du eine {L}-Energiekarte aus deiner Hand an Raikou anlegst und dein Gegner mindestens ein Pokémon auf der Bank hat, wählt er eines von ihnen und tauscht es mit seinem aktiven Pokémon aus. Diese Fähigkeit verliert ihre Wirkung, solange Raikou schläft, verwirrt oder gelähmt ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Lightning Tackle",
				fr: "Charge éclair",
				de: "Blitztackle"
			},
			effect: {
				en: "Flip a coin. If tails, Raikou does 20 damage to itself.",
				fr: "Lancez une pièce. Si c'est pile, Raikou s'inflige 20 dégâts.",
				de: "Wirf eine Münze. Bei „Zahl“ fügt sich Raikou selber 20 Schadenspunkte zu."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "The rain clouds it carries let it fire thunderbolts at will. They say that it descended with lightning.",
		fr: "Les nuages gorgés de pluie qui l'accompagnent lui permettent de lancer des éclairs à volonté. On raconte qu'il est issu de la foudre.",
		de: "Dank der Regenwolken, die es mit sich herumträgt, kann es jederzeit Blitze schleudern. Es wird gesagt, dass es in einem Gewitter entstanden ist."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274599,
				tcgplayer: 88529
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274599,
				tcgplayer: 88529
			}
		}
	]
}

export default card
