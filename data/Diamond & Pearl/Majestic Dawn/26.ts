import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Omastar",
		fr: "Amonistar",
		de: "Amoroso"
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
		en: "Omanyte",
		fr: "Amonita",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Primal Swirl",
				fr: "Tourbillon primitif",
				de: "Urzeit-Strudel"
			},
			effect: {
				en: "Once during your turn, when you play Omastar from your hand to evolve 1 of your Pokémon, you may remove the highest Stage Evolution card from each of your opponent's Benched Evolved Pokémon and put those cards back into his or her hand. You can't use more than 1 Primal Swirl Poké-Power each turn.",
				fr: "Une seule fois lors de votre tour, lorsque vous jouez Amonistar de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez retirer à chacun des Pokémon Évolués sur le Banc de votre adversaire sa carte au niveau Évolution le plus élevé et replacez ces cartes dans la main de votre adversaire. Vous ne pouvez pas utiliser plus d'1 Poké-Power Tourbillon primitif par tour.",
				de: "Einmal während deines Zuges, wenn du Amoroso von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du die höchste Evolutionskarte von jedem entwickelten Pokémon auf der Bank deines Gegners entfernen. Dein Gegner nimmt diese Karten auf seine Hand zurück. Du kannst nicht mehr als 1 Urzeit-Strudel Poké-Power pro Zug benutzen."
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
				en: "Send Back",
				fr: "Renvoyer",
				de: "Zurückschicken"
			},
			effect: {
				en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Votre adversaire échange le Défenseur Pokémon avec 1 de ses Pokémon de Banc.",
				de: "Dein Gegner tauscht das Verteidigende Pokémon gegen 1 Pokémon auf seiner Bank aus."
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



}

export default card
