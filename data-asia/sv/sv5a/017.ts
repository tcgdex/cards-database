import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "ゴウカザル"
	},

	illustrator: "Takumi Wada",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [392],
	hp: 140,
	types: ["Fire"],

	description: {
		ja: "頭で 燃える 炎の ように 激しい 性格の ポケモン。 素早さでは だれにも 負けない。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "かえんぶとう"
		},

		effect: {
			ja: "自分の番に1回使える。自分の手札から「基本エネルギー」と「基本エネルギー」をそれぞれ1枚まで選び、自分のポケモンに好きなようにつける。"
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			ja: "バーンアウト"
		},

		damage: 200,

		effect: {
			ja: "このポケモンについているエネルギーを1個選び、トラッシュする。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1
}

export default card