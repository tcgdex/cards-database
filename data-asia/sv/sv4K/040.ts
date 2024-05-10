import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "キョジオーン",
		'zh-tw': "鹽石巨靈"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [934],
	hp: 160,
	types: ["Fighting"],

	description: {
		ja: "指先を 擦りあわせて 塩を ケガした ポケモンに 振りかけると ひどい 傷も たちまち 治る。",
		'zh-tw': "只要合起指尖，搓出鹽來灑在受傷的寶可夢身上， 就算再重的傷都會瞬間痊癒。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "エナジーがんえん",
			'zh-tw': "能量岩鹽"
		},

		effect: {
			ja: "自分の番に1回使える。自分のトラッシュから「基本エネルギー」を1枚選び、自分のポケモンにつける。その後、つけたポケモンのHPを「30」回復する。",
			'zh-tw': "在自己的回合時可使用1次。從自己的棄牌區選擇1張「基本【鬥】能量」卡，附於自己的寶可夢身上。然後，將附上那張卡的寶可夢恢復「30」HP。"
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			ja: "ランドクラッシュ",
			'zh-tw': "大地粉碎"
		},

		damage: 140
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card