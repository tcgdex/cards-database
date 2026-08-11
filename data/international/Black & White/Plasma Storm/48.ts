import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Zapdos-EX",
		'fr-fr': "Électhor-EX",
		'es-es': "Zapdos-EX",
		'it-it': "Zapdos-EX",
		'pt-br': "Zapdos-EX",
		'de-de': "Zapdos-EX"
	},
	illustrator: "Eske Yoshinob",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		145,
	],
	hp: 170,
	types: [
		"Lightning",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Agility",
				'fr-fr': "Hâte",
			},
			effect: {
				'en-us': "Flip a coin. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn.",
				'fr-fr': "Lancez une pièce. Si c'est face, évitez tous les effets d'attaques (y compris les dégâts) infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
			},
			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Powervolt",
				'fr-fr': "Méga Voltage",
			},
			effect: {
				'en-us': "If this Pokémon has any Plasma Energy attached to it, this attack does 40 more damage.",
				'fr-fr': "Si de l'Énergie Plasma est attachée à ce Pokémon, cette attaque inflige 40 dégâts supplémentaires.",
			},
			damage: 80,

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
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
