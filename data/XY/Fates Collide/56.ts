import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Tyranitar",
		fr: "Tyranocif",
	},
	illustrator: "Satoshi Shirai",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		248,
	],
	hp: 160,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Pupitar",
		fr: "Ymphect",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Raging Roar",
				fr: "Rugissement Enragé",
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may attach 1 Darkness Energy from your discard pile to this Pokémon for each Prize card your opponent has taken.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon, vous pouvez attacher 1 Énergie Darkness de votre pile de défausse à ce Pokémon pour chaque carte Récompense que votre adversaire a récupérée.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Darkness",
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Dark Mountain",
				fr: "Montagne Obscure",
			},
			effect: {
				en: "Discard the top 2 cards of your deck. This attack does 50 more damage for each Supporter card discarded in this way.",
				fr: "Défaussez les 2 cartes du dessus de votre deck. Cette attaque inflige 50 dégâts supplémentaires pour chaque carte Supporter défaussée de cette façon.",
			},
			damage: "150+",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 4,



}

export default card
