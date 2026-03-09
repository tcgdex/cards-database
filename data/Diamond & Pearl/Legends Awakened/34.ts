import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Mesprit",
		fr: "Créfollet",
		de: "Vesprit"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		481,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Psychic Bind",
				fr: "Attache psy",
				de: "Psychobindung"
			},
			effect: {
				en: "Once during your turn, when you put Mesprit from your hand onto your Bench, you may use this power. Your opponent can't use any Poké-Powers on his or her Pokémon during your opponent's next turn.",
				fr: "Une seule fois lors de votre tour, lorsque vous placez Créfollet de votre main sur votre Banc, vous pouvez utiliser ce pouvoir. Votre adversaire ne peut pas utiliser de Poké-Powers de son Pokémon lors du prochain tour de votre adversaire.",
				de: "Einmal während deines Zuges kannst du, wenn du Vesprit von deiner Hand auf deine Bank legst, diese Poké-Power benutzen. Während des nächsten Zuges deines Gegners können gegnerische Pokémon keine Poké-Power benutzen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Extrasensory",
				fr: "Extrasenseur",
				de: "Sondersensor"
			},
			effect: {
				en: "If you have the same number of cards in your hand as your opponent, this attack does 20 damage plus 50 more damage.",
				fr: "Si vous avez autant de cartes en main que votre adversaire, cette attaque inflige 20 dégâts plus 50 dégâts supplémentaires.",
				de: "Wenn du die gleiche Anzahl Karten auf der Hand hast wie dein Gegner, fügt dieser Angriff 20 Schadenspunkte plus 50 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		fr: "On l'appelle \"être de l'émotion\". Il enseigne aux hommes la beauté de la tristesse, la douleur de la joie."
	},

	thirdParty: {
		cardmarket: 278183,
		tcgplayer: 87332
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
