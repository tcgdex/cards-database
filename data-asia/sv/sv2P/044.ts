import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "キラフロル"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [970],
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "危険を 察知すると 結晶の 花びらを 開いて 円錐形の 体から ビームを 発射する。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "くだけるけっしょう"
		},

		effect: {
			ja: "このポケモンがきぜつしたとき、自分はコインを1回投げる。オモテなら、相手はサイドをとれない。"
		}
	}],

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "どくのかべん"
		},

		effect: {
			ja: "相手のバトルポケモンをどくにする。このどくでのせるダメカンの数は6個になる。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3
}

export default card