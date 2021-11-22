import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Alakazam",
		fr: "Alakazam"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		65,
	],

	hp: 100,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Kadabra",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Power Cancel",
				fr: "Annulation de pouvoir"
			},
			effect: {
				en: "Once during your opponent's turn, when your opponent's Pokémon uses any Poké-Power, you may discard 2 cards from your hand and prevent all effects of that Poké-Power. (This counts as that Pokémon using its Poké-Power.) This power can't be used if Alakazam is affected by a Special Condition.",
				fr: "Une seule fois lors du tour de votre adversaire, lorsque celui-ci utilise un Poké-Power, vous pouvez défausser 2 cartes de votre main et prévenir les effets de ce Poké-Power. (C'est ce Pokémon qui utilise ce Poké-Power.) Ce pouvoir ne peut pas être utilisé si Alakazam possède un État Spécial."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psychic Guard",
				fr: "Barrière psy"
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Alakazam by attacks from your opponent's Stage 2 Evolved Pokémon is reduced by 30 (after applying Weakness and Resistance).",
				fr: "Lors du prochain tour de votre adversaire, tous dégâts infligés à Alakazam par des attaques de Pokémon de Niveau 2 de votre adversaire sont réduits de 30 (après application de la Faiblesse et de la Résistance)."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+30"
		},
	],

	description: {
		fr: "Grâce à sa mémoire exceptionnelle, il n'a rien oublié depuis sa naissance. Il a un Q.I. de 5 000."
	}
}

export default card
