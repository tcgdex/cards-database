import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Unown I",
		fr: "Zarbi",
		de: "Icognito I"
	},

	illustrator: "Daisuke Ito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		201,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "ITEM",
				fr: "INVENTAIRE",
				de: "ITEM"
			},
			effect: {
				en: "Once during your turn (before your attack), if you have Unown I, Unown T, Unown E, and Unown M on your Bench, you may search your deck for a Trainer card, show it to your opponent, and put it into your hand. Shuffle your deck afterward. You can't use more than 1 ITEM Poké-Power each turn.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si vous avez Zarbi I, Zarbi T, Zarbi E, et Zarbi M sur votre Banc, vous pouvez choisir dans votre deck une carte Dresseur. Montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck. Vous ne pouvez pas utiliser plus d'1 Poké-Power INVENTAIRE par tour.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn sich Icognito I, Icognito T, Icognito E und Icognito M auf deiner Bank befinden, dein Deck nach einer Trainerkarte durchsuchen. Zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach. Du kannst nicht mehr als 1 ITEM Poké-Power pro Zug einsetzen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hidden Power",
				fr: "Puissance cachée",
				de: "Kraftreserve"
			},
			effect: {
				en: "Choose an Energy card attached to the Defending Pokémon and put it face down. Treat that card as a Special Energy card that provides Colorless Energy and doesn't have any effect other than providing Energy. Put that card face up at the end of your opponent's next turn.",
				fr: "Choisissez une carte Énergie attachée au Pokémon Défenseur et placez-la face cachée. Traitez cette carte comme une carte Énergie Spéciale qui fournit de l'Énergie Colorless et qui n'a pas d'autre effet que de fournir de l'Énergie. Retournez cette carte à la fin du prochain tour de votre adversaire.",
				de: "Wähle eine Energiekarte, die am Verteidigenden Pokémon angelegt ist, und verdecke sie. Behandle diese Karte wie eine Spezialenergiekarte, die -Energie liefert und keinen anderen Effekt hat, als Energie zu liefern. Decke die Karte am Ende des nächsten Zuges deines Gegners wieder auf."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	description: {
		fr: "Il rappelle une écriture ancienne. Reste à savoir qui du langage ou du Zarbi est apparu en premier."
	}
}

export default card
