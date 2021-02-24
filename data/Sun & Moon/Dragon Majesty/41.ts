import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Altaria-GX",
		fr: "Altaria-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		334,
	],
	hp: 200,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Swablu",
		fr: "Tylton",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Bright Tone",
				fr: "Tonalité Claire",
			},
			effect: {
				en: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Pokémon-GX and Pokémon-EX.",
				fr: "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon-GX ou de Pokémon-EX.",
			},
			damage: 50,

		},
		{
			cost: [
				"Water",
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Sonic Edge",
				fr: "Tranchant Sonique",
			},
			effect: {
				en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
				fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			},
			damage: 110,

		},
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Euphoria-GX",
				fr: "Euphorie-GX",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep. Heal all damage from all of your Pokémon. (You can't use more than 1 GX attack in a game.)",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi. Soignez tous les dégâts de vos Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
