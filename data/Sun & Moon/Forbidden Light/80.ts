import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Guzzlord",
		fr: "Engloutyran",
		es: "Guzzlord",
		it: "Guzzlord",
		pt: "Guzzlord",
		de: "Schlingking"
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
				en: "Lord’s Valley",
				fr: "Vallée du Tyran",
				es: "Valle del Lord",
				it: "Signore della Valle",
				pt: "Vale do Lorde",
				de: "Tal des Königs"
			},
			effect: {
				en: "If you have exactly 2, 4, or 6 Prize cards remaining, discard the top 10 cards of your deck.",
				fr: "S’il vous reste exactement 2, 4 ou 6 cartes Récompense, défaussez les 10 cartes du dessus de votre deck.",
				es: "Si te quedan exactamente 2, 4 o 6 cartas de Premio, descarta las 10 primeras cartas de tu baraja.",
				it: "Se hai esattamente due, quattro o sei carte Premio rimanenti, scarta le prime dieci carte del tuo mazzo.",
				pt: "Se você tiver exatamente 2,4 ou 6 cartas de Prêmio restantes, descarte as 10 primeiras cartas do seu baralho.",
				de: "Wenn du genau 2, 4 oder 6 verbleibende Preiskarten hast, lege die obersten 10 Karten deines Decks auf deinen Ablagestapel."
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

	thirdParty: {
		cardmarket: 320584
	}
}

export default card
