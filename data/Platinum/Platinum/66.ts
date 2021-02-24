import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Zangoose",
		fr: "Mangriff",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		335,
	],
	hp: 80,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Thick Skin",
				fr: "Dur à cuir",
			},
			effect: {
				en: "Zangoose can't be affected by any Special Conditions.",
				fr: "Mangriff ne peut pas être affecté par des États Spéciaux.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Invite and Strike",
				fr: "Inviter et frapper",
			},
			effect: {
				en: "Switch the Defending Pokémon with 1 of your opponent's Benched Pokémon. This attack does 20 damage to the new Defending Pokémon.",
				fr: "Échangez le Pokémon Défenseur avec 1 des Pokémon de Banc de votre adversaire. Cette attaque inflige 20 dégâts au nouveau Pokémon Défenseur.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Chop Up",
				fr: "Découper",
			},
			effect: {
				en: "Does 10 damage to each of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire possédant des marqueurs de dégât. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
