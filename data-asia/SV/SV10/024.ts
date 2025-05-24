import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "獵斑魚",
		'zh-cn': "獵斑魚",
		ja: "ハンテール"
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		'zh-tw': "棲息在深海中。傳說如果 有獵斑魚被沖上沙灘， 就會有不好的事發生。",
		'zh-cn': "棲息在深海中。傳說如果 有獵斑魚被沖上沙灘， 就會有不好的事發生。",
		ja: "深海に 生息。 ハンテールが 浜に 打ちあがると 不吉なことが 起こるという 言い伝えが ある。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "潛者捕捉",
			'zh-cn': "潛者捕捉",
			ja: "ダイバーキャッチ"
		},

		effect: {
			'zh-tw': "每次當自己的【水】寶可夢受到對手的寶可夢招式的傷害而【昏厥】時，可使用1次。【昏厥】的寶可夢身上附加的「基本【水】能量」卡不丟棄，而是全部放回手牌。",
			'zh-cn': "每次當自己的【水】寶可夢受到對手的寶可夢招式的傷害而【昏厥】時，可使用1次。【昏厥】的寶可夢身上附加的「基本【水】能量」卡不丟棄，而是全部放回手牌。",
			ja: "自分のポケモンが、相手のポケモンからワザのダメージを受けてきぜつするたび、1回使える。きぜつしたポケモンについている「基本エネルギー」はトラッシュせず、すべて手札にもどす。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "飛濺",
			'zh-cn': "飛濺",
			ja: "スプラッシュ"
		},

		damage: 80,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [367]
}

export default card