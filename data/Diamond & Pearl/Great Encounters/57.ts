import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Unown G",
		fr: "Zarbi G",
	},
	illustrator: "Daisuke Ito",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		201,
	],
	hp: 50,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "GUARD",
				fr: "GARDIEN",
			},
			effect: {
				en: "Once during your turn (before your attack), if Unown G is on your Bench, you may discard all cards attached to Unown G and attach Unown G to 1 of your Pokémon as a Pokémon Tool card. As long as Unown G is attached to a Pokémon, prevent all effects of attacks, excluding damage, done to that Pokémon.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Zarbi G est sur votre Banc, vous pouvez défausser toutes les cartes qui lui sont attachées et attacher Zarbi G à 1 de vos Pokémon comme carte Outil Pokémon. Tant que Zarbi G est attachée à 1 Pokémon, prévenez tous les effets d'attaques, dégâts exclus, infligés à ce Pokémon par des Pokémon de votre adversaire.",
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
				en: "Hidden Power",
				fr: "Puissance cachée",
			},
			effect: {
				en: "If Unown G has any damage counters on it, this attack's base damage is 10.",
				fr: "Si Zarbi G possède des marqueurs de dégât, les dégâts de base de cette attaque sont de 10.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 1,



}

export default card
