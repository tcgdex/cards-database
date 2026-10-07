import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	illustrator: "PLANETA Mochizuki",
	dexId: [823],
	evolveFrom: { ja: "アーマーガアV" },
	rarity: "Secret Rare",
	set: Set,

	name: {
		ja: "アーマーガアVMAX"
	},
	category: "Pokemon",
	hp: 320,
	types: ["Metal"],
	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ラスターボディ"
		},

		effect: {
			ja: "このポケモンは、相手のポケモンから特性の効果を受けない。"
		}
	}],

	attacks: [{
		name: {
			ja: "キョダイハリケーン"
		},

		effect: {
			ja: "次の自分の番、このポケモンは「キョダイハリケーン」が使えない。"
		},

		damage: 240,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 0,
	regulationMark: "E",
	variants: [
		{ type: "holo", thirdParty: { cardmarket: 538733, tcgplayer: 569126, cardtrader: 240097 } }
	]
}

export default card