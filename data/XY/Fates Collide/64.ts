import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Genesect EX",
		fr: "Genesect-EX",
	},
	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		649,
	],
	hp: 180,
	types: [
		"Metal",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Drive Change",
				fr: "Change Module",
			},
			effect: {
				en: "Once during your turn (before your attack), you may put a Pokémon Tool card attached to this Pokémon into your hand.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez placer une carte Outil Pokémon attachée à ce Pokémon dans votre main.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Metal",
			],
			name: {
				en: "Rapid Blaster",
				fr: "Canon Rapide",
			},
			effect: {
				en: "Discard as many Metal Energy attached to this Pokémon as you like. This attack does 20 more damage for each Energy card discarded in this way.",
				fr: "Défaussez autant d'Énergies Metal attachées à ce Pokémon que vous voulez. Cette attaque inflige 20 dégâts supplémentaires pour chaque carte Énergie défaussée de cette façon.",
			},
			damage: "100+",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
