import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ジュカイン"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [254],
	hp: 130,
	types: ["Grass"],

	evolveFrom: {
		ja: "ジュプトル"
	},

	description: {
		ja: "腕に 生えた 葉っぱは 大木も スッパリ 切り倒す 切れ味。 密林の 戦いでは 無敵。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			ja: "シザークロス"
		},

		effect: {
			ja: "コインを1回投げオモテなら、40ダメージを追加。"
		},

		damage: "30+",
		cost: ["Grass", "Colorless"]
	}, {
		name: {
			ja: "エナジーブルーム"
		},

		effect: {
			ja: "エネルギーがついている自分のポケモン全員のHPを、それぞれ「20」回復する。"
		},

		damage: 80,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Water",
		value: "-20"
	}],

	retreat: 2,
	variants: [
		{ type: "holo", thirdParty: { cardmarket: 567840, tcgplayer: 602236, cardtrader: 142980 }, stamp: ["1st-edition"] }
	]
}

export default card
