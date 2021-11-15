import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Mew ex",
		fr: "Mew ex"
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		151,
	],
	hp: 90,
	types: [
		"Psychic",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Versatile",
				fr: "Polyvalent"
			},
			effect: {
				en: "Mew ex can use the attacks of all Pokémon in play as its own. (You still need the necessary Energy to use each attack.)",
				fr: "Mew ex peut utiliser les attaques de tous les Pokémon en jeu à la place des siennes. (Vous devez toujours utiliser l'Énergie nécessaire pour chaque attaque.)"
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
				en: "Power Move",
				fr: "Déplacement puissant"
			},
			effect: {
				en: "Search your deck for an Energy card and attach it to Mew ex. Shuffle your deck afterward. Then, you may switch Mew ex with 1 of your Benched Pokémon.",
				fr: "Choisissez dans votre deck une carte Énergie et attachez-la à Mew ex. Ensuite, mélangez votre deck. Vous pouvez alors échanger Mew ex avec 1 des Pokémon de votre Banc."
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
