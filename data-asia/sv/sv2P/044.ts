import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "キラフロル",
		'zh-tw': "晶光花"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [970],
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "危険を 察知すると 結晶の 花びらを 開いて 円錐形の 体から ビームを 発射する。",
		'zh-tw': "只要察覺到危險，就會張開結晶的花瓣， 從圓錐形的身體發射光束。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "くだけるけっしょう",
			'zh-tw': "碎裂結晶"
		},

		effect: {
			ja: "このポケモンがきぜつしたとき、自分はコインを1回投げる。オモテなら、相手はサイドをとれない。",
			'zh-tw': "這隻寶可夢【昏厥】時，自己擲1次硬幣。若為正面，則對手無法獲得獎賞卡。"
		}
	}],

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "どくのかべん",
			'zh-tw': "毒花瓣"
		},

		effect: {
			ja: "相手のバトルポケモンをどくにする。このどくでのせるダメカンの数は6個になる。",
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。因這個【中毒】而放置的傷害指示物的數量改為6個。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card