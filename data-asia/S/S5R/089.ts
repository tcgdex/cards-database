import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	illustrator: "PLANETA Mochizuki",
	evolveFrom: { ja: "テッポウオ" },
	dexId: [224],
	rarity: "Secret Rare",
	set: Set,

	name: {
		ja: "オクタン"
	},
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		ja: "頑丈な 石頭。 吸盤つきの 脚を 絡ませ ひたすら 頭で 打ちすえる。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "れんげきサーチ"
		},

		effect: {
			ja: "自分の番に1回使える。自分の山札から「れんげき」のカードを1枚選び、相手に見せて、手札に加える。そして山札を切る。この番、すでに別の「れんげきサーチ」を使っていたなら、この特性は使えない。"
		}
	}],

	attacks: [{
		name: {
			ja: "たきのぼり"
		},

		damage: 50,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",
	variants: [
		{ type: "holo", thirdParty: { cardmarket: 538753, tcgplayer: 569129, cardtrader: 240101 } }
	]
}

export default card