import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "ポリゴンＺ",
		'zh-tw': "多邊獸Ｚ",
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	description: {
		ja: "追加した プログラムが まずかった。 おかしな 挙動が 目立つので 実験失敗 なのかも しれない。",
		'zh-tw': "新追加的程式大有問題，做出的動作明顯地有些怪異。實驗或許可說是失敗了。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "バグそうしん",
				'zh-tw': "漏洞傳輸",
			},
			effect: {
				ja: "自分の番に、自分の手札からエネルギーをこのポケモンにつけるたび、1回使える。相手のバトルポケモンをこんらんにする。",
				'zh-tw': "在自己的回合，每次從自己的手牌將能量附於這隻寶可夢身上時，都可使用1次。將對手的戰鬥寶可夢【混亂】。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "スーパービーム",
				'zh-tw': "超級光束",
			},
			damage: 170,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを2個選び、トラッシュする。",
				'zh-tw': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560698,
				tcgplayer: 569186,
			},
		},
	],

	evolveFrom: {
		ja: "ポリゴン２",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Rare",
	dexId: [474],
};

export default card;
