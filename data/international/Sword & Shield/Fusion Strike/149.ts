import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [674],
	set: Set,

	name: {
		'en-us': "Pancham",
		'fr-fr': "Pandespiègle",
		'es-es': "Pancham",
		'it-it': "Pancham",
		'pt-br': "Pancham",
		'de-de': "Pam-Pam"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "Mina Nakai",

	description: {
		'en-us': "Wanting to make sure it's taken seriously, Pancham's always giving others a glare. But if it's not focusing, it ends up smiling."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Raised Bad",
			'fr-fr': "Mauvaise Éducation",
			'de-de': "Verzogen",
			'es-es': "Malcriado",
			'pt-br': "Maldade de Berço",
			'it-it': "Maleducato"
		},

		effect: {
			'en-us': "Search your deck for up to 2 {D} Energy cards and attach them to this Pokémon. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes Énergie {D}, puis attachez-les à ce Pokémon. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 {D}-Energiekarten und lege sie an dieses Pokémon an. Mische anschließend dein Deck.",
			'es-es': "Busca en tu baraja hasta 2 cartas de Energía {D} y únelas a este Pokémon. Después, baraja las cartas de tu baraja.",
			'pt-br': "Procure por até 2 cartas de Energia {D} no seu baralho e ligue-as a este Pokémon. Em seguida, embaralhe o seu baralho.",
			'it-it': "Cerca nel tuo mazzo fino a due carte Energia {D} e assegnale a questo Pokémon. Poi rimischia le carte del tuo mazzo."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Smash Kick",
			'fr-fr': "Coud'Pattes",
			'de-de': "Schmetterkick",
			'es-es': "Patada Destrucción",
			'pt-br': "Chute Poderoso",
			'it-it': "Calcio Esplosivo"
		},

		damage: 30
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582777,
				tcgplayer: 253363
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582777,
				tcgplayer: 253363
			}
		},
	],
}

export default card
