import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Torkoal",
		fr: "Chartor",
		de: "Qurtel"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [324],

	hp: 80,

	types: [
		"Fire"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Super Singe",
				fr: "Ça sent le roussi!",
				de: "Super-Versengung"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Burned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Brûlé.",
				de: "Wirf 1 Münze. Bei „Kopf“ ist das Verteidigende Pokémon jetzt verbrannt."
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flame Ball",
				fr: "Boule de feu",
				de: "Flammender Ball"
			},
			effect: {
				en: "Move an Energy card attached to Torkoal to 1 of your Benched Pokémon.",
				fr: "Déplacez une carte Énergie attachée à Charcor sur 1 des Pokémon de votre Banc.",
				de: "Entferne 1 an Qurtel angelegte Energiekarte und lege sie an 1 Pokémon auf deiner Bank an."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	retreat: 2,

	description: {
		en: "It burns coal inside its shell for energy. It blows out black soot if it is endangered.",
		de: "In seinem Panzer verbrennt es Kohle und gewinnt daraus Energie. Bei Gefahr sondert es Ruß ab."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 89971,
				cardmarket: 278521
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278521,
				tcgplayer: 89971
			}
		}
	],

}

export default card
