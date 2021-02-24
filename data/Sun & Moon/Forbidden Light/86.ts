import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Florges",
		fr: "Florges",
	},
	illustrator: "Satoshi Shirai",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		671,
	],
	hp: 120,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Floette",
		fr: "Floette",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Wondrous Gift",
				fr: "Cadeau Merveilleux",
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, put an Item card from your discard pile on top of your deck.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c’est face, placez une carte Objet de votre pile de défausse sur le dessus de votre deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fairy",
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Mist Guard",
				fr: "Bruine Gardienne",
			},
			effect: {
				en: "Prevent all damage done to this Pokémon by attacks from Dragon Pokémon during your opponent's next turn.",
				fr: "Évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon Dragon pendant le prochain tour de votre adversaire.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
