import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Alolan Persian-GX",
		fr: "Persian d’Alola-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		53,
	],
	hp: 200,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Alolan Meowth",
		fr: "Miaouss d’Alola",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Smug Face",
				fr: "Gros Malin",
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to this Pokémon by your opponent's TAG TEAM Pokémon and Ultra Beasts, and by your opponent's Pokémon that have any Special Energy attached to them.",
				fr: "Évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon par les Pokémon ESCOUADE et Ultra-Chimères de votre adversaire, et par les Pokémon de votre adversaire auxquels de l’Énergie spéciale est attachée.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Claw Slash",
				fr: "Tranch’Griffe",
			},

			damage: 120,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Stalking Claws-GX",
				fr: "Griffes Traquantes-GX",
			},
			effect: {
				en: "This attack does 120 damage to 1 of your opponent's Pokémon. This damage isn't affected by Weakness, Resistance, or any other effects on that Pokémon. (You can't use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 120 dégâts à l’un des Pokémon de votre adversaire. Ces dégâts ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur ce Pokémon-là. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

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
	retreat: 2,



}

export default card
