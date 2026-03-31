import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Binacle",
		fr: "Opermine",
		es: "Binacle",
		de: "Bithora",
		it: "Binacle",
		pt: "Binacle"
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		688
	],
	hp: 80,
	types: [
		"Fighting"
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Fighting"
			],
			name: {
				en: "Double Draw",
				fr: "Double Pioche",
				es: "Roba Doble",
				de: "Zweifachzug",
				it: "Pescata Doppia",
				pt: "Compra Dupla"
			},
			effect: {
				en: "Draw 2 cards.",
				fr: "Piochez 2 cartes.",
				es: "Roba 2 cartas.",
				de: "Ziehe 2 Karten.",
				it: "Pesca due carte.",
				pt: "Compre 2 cartas."
			}
		},
		{
			cost: [
				"Fighting",
				"Fighting"
			],
			name: {
				en: "Scratch",
				fr: "Griffe",
				es: "Arañazo",
				de: "Kratzer",
				it: "Graffio",
				pt: "Arranhão"
			},
			damage: "30"
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],
	retreat: 2,
	regulationMark: "J",
	illustrator: "nagimiso",
	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],
	thirdParty: {
		tcgplayer: 684334,
		cardmarket: 877456
	}
}

export default card
