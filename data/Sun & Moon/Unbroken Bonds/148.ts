import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Persian",
		fr: "Persian",
	},
	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		53,
	],
	hp: 100,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Meowth",
		fr: "Miaouss",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Gathering of Cats",
				fr: "Rassemblement de Chats",
			},
			effect: {
				en: "Ignore all Energy in the attack costs of each of your Pokémon in play that has the Caturday attack.",
				fr: "Ignorez toutes les Énergies dans le coût d’attaque de vos Pokémon en jeu qui ont l’attaque Chamedi.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Claw Slash",
				fr: "Tranch’Griffe",
			},

			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],





}

export default card
