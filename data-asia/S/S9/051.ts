import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "象徵鳥",
		ja: "シンボラー"
	},

	illustrator: "Sumiyoshi Kizuki",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		'zh-tw': "利用精神力量在空中飛翔，被稱為古代都市的守護神。 也有人認為牠是守護神的使者。",
		ja: "サイコパワーで 空を 飛ぶ。 古代都市の 守り神 とも その遣いとも いわれている。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "三重裝填",
			ja: "トライリチャージ"
		},

		effect: {
			'zh-tw': "擲3次硬幣，從自己的棄牌區選擇最多與正面出現的次數相同數量的基本能量卡，以任意方式附於備戰寶可夢身上。",
			ja: "コインを3回投げ、オモテの数ぶんまで、自分のトラッシュから基本エネルギーを選び、ベンチポケモンに好きなようにつける。"
		},

		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "精神強念",
			ja: "サイコキネシス"
		},

		effect: {
			'zh-tw': "增加對手的戰鬥寶可夢身上附加的能量的數量×30點傷害。",
			ja: "相手のバトルポケモンについているエネルギーの数×30ダメージ追加。"
		},

		damage: "10＋",
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [561],

	thirdParty: {
		cardmarket: 605902
	}
}

export default card