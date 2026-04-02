import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Bunnelby",
		fr: "Sapereau",
		es: "Bunnelby",
		'es-mx': "Bunnelby",
		de: "Scoppel",
		it: "Bunnelby",
		pt: "Bunnelby"
	},

	illustrator: "MINAMINAMI Take",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Smash Kick",
			fr: "Coud'Pattes",
			es: "Patada Destrucción",
			'es-mx': "Patada Devastadora",
			de: "Schmetterkick",
			it: "Calcio Esplosivo",
			pt: "Chute Poderoso"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		tcgplayer: 684441,
		cardmarket: 877480
	}
}

export default card
