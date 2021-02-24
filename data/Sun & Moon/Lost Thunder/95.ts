import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Shedinja",
		fr: "Munja",
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		292,
	],
	hp: 40,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Nincada",
		fr: "Ningale",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Vessel of Life",
				fr: "Vaisseau Vital",
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard all cards attached to this Pokémon and attach it to 1 of your Pokémon as a Pokémon Tool card. When the Pokémon this card is attached to is Knocked Out, your opponent takes 1 fewer Prize card.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser toutes les cartes attachées à ce Pokémon et l’attacher à l’un de vos Pokémon comme carte Outil Pokémon. Lorsque le Pokémon auquel cette carte est attachée est mis K.O., votre adversaire récupère une carte Récompense de moins.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Haunt",
				fr: "Hanter",
			},
			effect: {
				en: "Put 3 damage counters on your opponent's Active Pokémon.",
				fr: "Placez 3 marqueurs de dégâts sur le Pokémon Actif de votre adversaire.",
			},

		},
	],


	retreat: 1,



}

export default card
