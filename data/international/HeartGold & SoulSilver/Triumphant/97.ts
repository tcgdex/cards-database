import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Mew",
		'fr-fr': "Mew",
		'de-de': "Mew"
	},

	illustrator: "Hideaki Hakozaki",
	rarity: "Rare PRIME",
	category: "Pokemon",
	set: Set,

	dexId: [151],

	hp: 60,

	types: [
		"Psychic"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Lost Link",
				'fr-fr': "Lien perdu",
				'de-de': "Nirgendwo-Verbindung"
			},
			effect: {
				'en-us': "Mew can use the attacks of all Pokémon in the Lost Zone (both yours and your opponent's). (You still need the necessary Energy to use each attack.)",
				'fr-fr': "Mew peut utiliser les attaques de tous les Pokémon dans la Zone Perdue (les vôtres et ceux de votre adversaire). (Vous devrez néanmoins avoir suffisamment d’Énergie pour utiliser chaque attaque.)",
				'de-de': "Mew kann die Angriffe aller Pokémon im Nirgendwo (deiner und der deines Gegners) einsetzen. (Die für den jeweiligen Angriff notwendige Energie ist trotzdem erforderlich.)"
			}
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "See Off",
				'fr-fr': "Perdu de vue",
				'de-de': "Abschied"
			},
			effect: {
				'en-us': "Search your deck for 1 Pokémon and put it in the Lost Zone. Shuffle your deck afterward.",
				'fr-fr': "Cherchez un Pokémon dans votre deck et placez-le dans la Zone Perdue. Mélangez ensuite votre deck.",
				'de-de': "Durchsuche dein Deck nach 1 Pokémon-Karte und lege sie ins Nirgendwo. Mische anschließend dein Deck."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 0,
	suffix: "Prime",

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 87405,
				cardmarket: 279627
			}
		},
	],

}

export default card
