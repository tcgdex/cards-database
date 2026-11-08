import { Card } from 'models/database/card'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		'en-us': "Omastar",
		'fr-fr': "Amonistar",
		'de-de': "Amoroso"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		139,
	],

	hp: 110,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Omanyte",
		'fr-fr': "Amonita",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Primal Swirl",
				'fr-fr': "Tourbillon primitif",
				'de-de': "Urzeit-Strudel"
			},
			effect: {
				'en-us': "Once during your turn, when you play Omastar from your hand to evolve 1 of your Pokémon, you may remove the highest Stage Evolution card from each of your opponent's Benched Evolved Pokémon and put those cards back into his or her hand. You can't use more than 1 Primal Swirl Poké-Power each turn.",
				'fr-fr': "Une seule fois lors de votre tour, lorsque vous jouez Amonistar de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez retirer à chacun des Pokémon Évolués sur le Banc de votre adversaire sa carte au niveau Évolution le plus élevé et replacez ces cartes dans la main de votre adversaire. Vous ne pouvez pas utiliser plus d'1 Poké-Power Tourbillon primitif par tour.",
				'de-de': "Einmal während deines Zuges, wenn du Amoroso von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du die höchste Evolutionskarte von jedem entwickelten Pokémon auf der Bank deines Gegners entfernen. Dein Gegner nimmt diese Karten auf seine Hand zurück. Du kannst nicht mehr als 1 Urzeit-Strudel Poké-Power pro Zug benutzen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Send Back",
				'fr-fr': "Renvoyer",
				'de-de': "Zurückschicken"
			},
			effect: {
				'en-us': "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				'fr-fr': "Votre adversaire échange le Défenseur Pokémon avec 1 de ses Pokémon de Banc.",
				'de-de': "Dein Gegner tauscht das Verteidigende Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+30"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It is thought that this Pokémon became extinct because its spiral shell grew too large.",
	},

	thirdParty: {
		cardmarket: 278075,
		tcgplayer: 87870
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
