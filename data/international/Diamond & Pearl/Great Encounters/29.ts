import { Card } from 'models/database/card'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		'en-us': "Unown H",
		'fr-fr': "Zarbi H",
		'de-de': "Icognito H"
	},
	illustrator: "Daisuke Ito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		201,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "HEAL",
				'fr-fr': "HEAL",
				'de-de': "HEAL"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if you have Unown H, Unown E, Unown A, and Unown L on your Bench, you may remove all Special Conditions from 1 of your Active Pokémon.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), si Zarbi H, Zarbi E, Zarbi A et Zarbi L se trouvent sur votre Banc, vous pouvez retirer à 1 de vos Pokémon Actifs tous ses États Spéciaux.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn Icognito H, Icognito E, Icognito A und Icognito L auf deiner Bank sind, alle Speziellen Zustände von 1 deiner Aktiven Pokémon entfernen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Hidden Power",
				'fr-fr': "Puissance cachée",
				'de-de': "Kraftreserve"
			},
			effect: {
				'en-us': "Discard a card from your hand. (If you can't discard a card from your hand, this attack does nothing.)",
				'fr-fr': "Défaussez une carte de votre main. (Si vous ne pouvez pas défausser de carte de votre main, cette attaque est sans effet.)",
				'de-de': "Lege 1 Karte von deiner Hand auf deinen Ablagestapel. (Wenn du das nicht machen kannst, hat dieser Angriff keine Auswirkungen.)"
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Shaped like ancient writing, it is a huge mystery whether language or UNOWN came first.",
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
