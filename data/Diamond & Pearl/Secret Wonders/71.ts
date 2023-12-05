import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Unown X",
		fr: "Zarbi X",
		de: "Icognito X"
	},
	illustrator: "Kazuyuki Kano",
	rarity: "Uncommon",
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
				en: "X-RAY",
				fr: "X-RAY",
				de: "X-RAY"
			},
			effect: {
				en: "Once during your turn (before your attack), if you have Unown X on your Bench, you may look at the top card of your opponent's deck and put it back on top of his or her deck.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Zarbi X est sur votre Banc, vous pouvez regarder la carte du dessus du deck de votre adversaire et la replacer au dessus de son deck.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn Icognito X auf deiner Bank ist, die oberste Karte des Decks deines Gegners anschauen und auf sein Deck zurücklegen."
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
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 1,



}

export default card
