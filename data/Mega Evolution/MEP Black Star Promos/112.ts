import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Magmortar",
		fr: "Maganon"
	},

	illustrator: "Kazumasa Yasukuni",
	rarity: "Promo",
	category: "Pokemon",
	dexId: [467],
	hp: 140,
	types: ["Fire"],
	stage: "Stage1",

	evolveFrom: {
		en: "Magmar",
		fr: "Magmar"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Buddy Boost",
			fr: "Boost Partenaire"
		},

		effect: {
			en: "Once during your turn, you may use this Ability. Attach a Basic {R} Energy card, a Basic {L} Energy card, or 1 of each from your hand to your Electivire and Magmortar in any way you like.",
			fr: "Une fois pendant votre tour, vous pouvez utiliser ce talent. Attachez une carte Énergie {R} de base, une carte Énergie {L} de base, ou une de chaque de votre main à vos Élekable et Maganon comme il vous plaît."
		}
	}],

	attacks: [{
		name: {
			en: "Heat Crash",
			fr: "Tacle Feu"
		},

		cost: ["Fire", "Fire", "Colorless"],

		damage: 80
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "J",

	description: {
		en: "They dwell in volcanic craters. It's said that only a single pair of Magmortar will inhabit any given volcano.",
		fr: "Il vit dans les cratères volcaniques. On dit que chaque volcan ne peut abriter qu'un seul couple de Maganon."
	},

	variants: [
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	],
}

export default card
