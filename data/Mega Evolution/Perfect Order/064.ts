import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Bunnelby",
		fr: "Sapereau",
		es: "Bunnelby",
		de: "Scoppel",
		it: "Bunnelby",
		pt: "Bunnelby"
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		659
	],
	hp: 70,
	types: [
		"Colorless"
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Colorless"
			],
			name: {
				en: "Smash Kick",
				fr: "Coud'Pattes",
				es: "Patada Destrucción",
				de: "Schmetterkick",
				it: "Calcio Esplosivo",
				pt: "Chute Poderoso"
			},
			damage: "10"
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 1,
	regulationMark: "J",
	illustrator: "MINAMINAMI Take",
	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],
	thirdParty: {
		tcgplayer: 684441,
		cardmarket: 877480
	}
}

export default card
