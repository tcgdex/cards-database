import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Pelipper",
		fr: "Bekipan",
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		279,
	],
	hp: 100,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Wingull",
		fr: "Goélise",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Courier",
				fr: "Coursier",
			},
			effect: {
				en: "Put 1 of your Benched Pokémon and all cards attached to it into your hand.",
				fr: "Placez l'un de vos Pokémon de Banc et toutes les cartes qui lui sont attachées dans votre main.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fly",
				fr: "Vol",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn.",
				fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien. Si c’est face, évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
