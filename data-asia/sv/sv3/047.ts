import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "ルナトーン"
	},

	illustrator: "Tetsu Kayama",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [337],
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "４０年前に 隕石の 落ちた 場所で 初めて 見つかった。 にらむ だけで 敵を 眠らせる。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "しんげつ"
		},

		effect: {
			ja: "自分の場に「ソルロック」がいるなら、はたらく。このポケモンがいるかぎり、自分のポケモン全員は、スタジアムの効果を受けない。"
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "ムーンプレス"
		},

		damage: 100
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1
}

export default card