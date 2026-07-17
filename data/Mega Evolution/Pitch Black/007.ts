import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	description: {
		en: "It dwells in volcanic caves. It digs in with its cross-shaped feet to crawl on ceilings and walls.",
		de: "Es lebt in vulkanischen Höhlen. Mit seinen kreuzförmigen Klauen kann es sogar an der Decke laufen."
	},

	name: {
		en: "Heatran",
		fr: "Heatran",
		es: "Heatran",
		'es-mx': "Heatran",
		de: "Heatran"
	},

	illustrator: "Takeshi Nakamura",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [485],
	hp: 140,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Singe",
			de: "Versengung"
		},

		cost: ["Fire"],

		effect: {
			en: "Your opponent's Active Pokémon is now Burned",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
		}
	}, {
		name: {
			en: "Lava Wall",
			de: "Lavawand"
		},

		cost: ["Fire", "Fire", "Colorless"],

		damage: 120,

		effect: {
			en: "During your next turn, this Pokémon will receive no damage from attacks by your opponent's Burned Pokémon",
			de: "Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken von verbrannten Pokémon zugefügt wird."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895795,
				tcgplayer: 704764
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895795,
				tcgplayer: 704764
			}
		},
	],
}

export default card
