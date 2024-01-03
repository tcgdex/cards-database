import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Nidoqueen",
		fr: "Nidoqueen",
		de: "Nidoqueen"
	},

	illustrator: "sui",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		31,
	],

	hp: 130,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Nidorina",
		fr: "Nidorina",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Return",
				fr: "Retour",
				de: "Rückkehr"
			},
			effect: {
				en: "Draw cards until you have 6 cards in your hand.",
				fr: "Piochez jusqu’à ce que vous ayez 6 cartes en main.",
				de: "Ziehe so viele Karten, bis du 6 Karten auf der Hand hast."
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Prize Count",
				fr: "Compteur de Récompense",
				de: "Preiszähler"
			},
			effect: {
				en: "If you have more Prize cards left than your opponent, this attack does 50 damage plus 30 more damage.",
				fr: "S’il vous reste plus de cartes Récompense que votre adversaire, cette attaque inflige 50 dégâts plus 30 dégâts supplémentaires.",
				de: "Wenn du mehr Preise übrig hast als dein Gegner, fügt dieser Angriff 50 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "It uses its scaly, rugged body to seal the entrance of its nest and protect its young from predators."
	},

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	}
}

export default card
