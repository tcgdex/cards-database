import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Rhyperior",
		fr: "Rhinastoc",
		de: "Rihornior"
	},

	illustrator: "Nakaoka",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		464,
	],

	hp: 140,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Rhydon",
		fr: "Rhinoféros",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Earth Fissure",
				fr: "Fissure terrestre",
				de: "Erdspalte"
			},
			effect: {
				en: "Once during your turn, when you play Rhyperior from your hand to evolve 1 of your Pokémon, you may discard the top 3 cards from your opponent's deck.",
				fr: "Une seule fois lors de votre tour, lorsque vous jouez Rhinastoc de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez défausser les 3 cartes du dessus du deck de votre adversaire.",
				de: "Einmal während deines Zuges, wenn du Rihornior von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du die obersten 3 Karten vom Deck deines Gegners auf seinen Ablagestapel legen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Rock Wrecker",
				fr: "Roc-Boulet",
				de: "Felswerfer"
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness or Resistance. Rhyperior can't attack during your next turn.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse et la Résistance. Rhinastoc ne pourra pas attaquer lors de votre prochain tour.",
				de: "Der Schaden dieses Angriffs wird durch die Schwäche und Resistenz des Verteidigenden Pokémon nicht verändert. Rihornior kann in deinem nächsten Zug nicht angreifen."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 4,

	description: {
		fr: "Il bande ses muscles pour projeter des pierres ou des Racaillou depuis le creux de ses paumes."
	}
}

export default card
