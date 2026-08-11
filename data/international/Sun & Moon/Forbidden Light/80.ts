import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Guzzlord",
		'fr-fr': "Engloutyran",
		'es-es': "Guzzlord",
		'it-it': "Guzzlord",
		'pt-br': "Guzzlord",
		'de-de': "Schlingking"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		799,
	],

	hp: 160,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Darkness",
				"Darkness",
			],
			name: {
				'en-us': "Lord’s Valley",
				'fr-fr': "Vallée du Tyran",
				'es-es': "Valle del Lord",
				'it-it': "Signore della Valle",
				'pt-br': "Vale do Lorde",
				'de-de': "Tal des Königs"
			},
			effect: {
				'en-us': "If you have exactly 2, 4, or 6 Prize cards remaining, discard the top 10 cards of your deck.",
				'fr-fr': "S’il vous reste exactement 2, 4 ou 6 cartes Récompense, défaussez les 10 cartes du dessus de votre deck.",
				'es-es': "Si te quedan exactamente 2, 4 o 6 cartas de Premio, descarta las 10 primeras cartas de tu baraja.",
				'it-it': "Se hai esattamente due, quattro o sei carte Premio rimanenti, scarta le prime dieci carte del tuo mazzo.",
				'pt-br': "Se você tiver exatamente 2,4 ou 6 cartas de Prêmio restantes, descarte as 10 primeiras cartas do seu baralho.",
				'de-de': "Wenn du genau 2, 4 oder 6 verbleibende Preiskarten hast, lege die obersten 10 Karten deines Decks auf deinen Ablagestapel."
			},
			damage: 160,

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

	retreat: 4,

	description: {
		'en-us': "A dangerous Ultra Beast, it appears to be eating constantly, but for some reason its droppings have never been found.",
	},

	thirdParty: {
		cardmarket: 320584,
		tcgplayer: 165736
	}
}

export default card
