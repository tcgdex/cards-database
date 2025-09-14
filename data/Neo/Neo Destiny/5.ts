import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dark Feraligatr",
		fr: "Aligatueur obscur",
		de: "Dunkles Impergator"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		160,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Croconaw",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Scare",
				fr: "Frayeur",
				de: "Scare"
			},
			effect: {
				en: "As long as Dark Feraligatr is your Active Pokémon, all of your opponent's Baby Pokémon Powers stop working and your opponent's Baby Pokémon can't attack. This power stops working while Dark Feraligatr is Asleep, Confused, or Paralyzed.",
				fr: "Tant qu'Aligatueur obscur reste votre Pokémon Actif, tous les Pouvoirs des Bébés Pokémon de votre adversaire cessent de fonctionner et les Bébés Pokémon de votre adversaire ne peuvent pas attaquer. Ce pouvoir cesse de fonctionner si Aligatueur obscur est Endormi, Confus ou Paralysé.",
				de: "As long as Dark Feraligatr is your Active Pokémon, all of your opponent's Baby Pokémon Powers stop working and your opponent's Baby Pokémon can't attack. This power stops working while Dark Feraligatr is Asleep, Confused, or Paralyzed."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Crushing Blow",
				fr: "Koud'dent",
				de: "Crushing Blow"
			},
			effect: {
				en: "If the Defending Pokémon has any Energy cards attached to it, flip a coin. If heads, choose 1 of those cards and discard it.",
				fr: "Si des cartes Énergie sont attachées au Pokémon Défenseur, lancez une pièce. Si c'est face, choisissez-en une et obligez votre adversaire à s'en défausser.",
				de: "If the Defending Pokémon has any Energy cards attached to it, flip a coin. If heads, choose 1 of those cards and discard it."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	description: {
		fr: "Ses muscles surpuissants lui permettent de se déplacer très vite et ce, malgré sa forte corpulence."
	},

	thirdParty: {
		cardmarket: 274657,
		tcgplayer: 84594
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["1st edition"]
		}
	]
}

export default card
