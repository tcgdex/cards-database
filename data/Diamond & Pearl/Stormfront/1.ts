import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Dusknoir",
		fr: "Dusknoir",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		477,
	],
	hp: 120,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Dusclops",
		fr: "Teraclope",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Shadow Command",
				fr: "Pouvoir ombre",
			},
			effect: {
				en: "Once during your turn (before your attack), you may draw 2 cards. If you have 7 or more cards in your hand, discard a number of cards until you have 6 cards in your hand. Then, put 2 damage counters on Dusknoir. This power can't be used if Dusknoir is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez piocher 2 cartes. Si vous avez au moins 7 cartes en main, défaussez des cartes jusqu'à ce que vous n'ayez plus que 6 cartes en main. Ensuite, placez 2 marqueurs de dégât sur Noctunoir. Ce pouvoir ne peut pas être utilisé si Noctunoir est affecté par un État Spécial.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Damage Even",
				fr: "Dégâts équilibrés",
			},
			effect: {
				en: "Count the number of damage counters on Dusknoir. Put that many damage counters on 1 of your opponent's Pokémon.",
				fr: "Comptabilisez le nombre de marqueurs de dégât sur Noctunoir. Placez autant de marqueurs de dégât sur 1 des Pokémon de votre adversaire.",
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Night Spin",
				fr: "Tour nocturne",
			},
			effect: {
				en: "Prevent all effects of an attack, including damage, done to Dusknoir by your opponent's Pokémon that has 2 or less Energy attached to it during your opponent's next turn.",
				fr: "Prévenez tous les effets d'une attaque, dégâts inclus, infligés à Noctunoir par les Pokémon de votre adversaire possédant un maximum de 2 Énergies lors du prochain tour de votre adversaire.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "+30"
		},
	],
	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
