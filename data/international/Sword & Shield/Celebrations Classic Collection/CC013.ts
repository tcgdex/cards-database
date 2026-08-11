import { Card } from 'models/database/card'
import Set from '../Celebrations Classic Collection'

const card: Card = {
	dexId: [151],
	set: Set,

	name: {
		'en-us': "Mew ex",
		'fr-fr': "Mew ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Poke-BODY",

		name: {
			'en-us': "Versatile",
			'fr-fr': "Polyvalent"
		},

		effect: {
			'en-us': "Mew ex can use the attacks of all Pokémon in play as its own. (You still need the necessary Energy to use each attack.)",
			'fr-fr': "Mew ex peut utiliser les attaques de tous les Pokémon en jeu à la place des siennes. (Vous devez toujours utiliser l'Énergie nécessaire pour chaque attaque.)"
		}
	}],

	attacks: [{
		name: {
			'en-us': "Power Move",
			'fr-fr': "Déplacement puissant"
		},

		effect: {
			'en-us': "Search your deck for an Energy card and attach it to Mew ex. Shuffle your deck afterward. Then, you may switch Mew ex with 1 of your Benched Pokémon.",
			'fr-fr': "Choisissez dans votre deck une carte Énergie et attachez-la à Mew ex. Ensuite, mélangez votre deck. Vous pouvez alors échanger Mew ex avec 1 des Pokémon de votre Banc."
		},

		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: ""
	}],

	retreat: 1,


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 576783,
				tcgplayer: 250330
			}
		},
	],
}

export default card
