import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のヘルガー",
		'zh-tw': "<火箭隊的>黑魯加",
		'zh-cn': "<火箭隊的>黑魯加",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "口から 吹き出す 炎で 火傷すると いつまでたっても 傷口が うずいてしまう。",
		'zh-tw': "要是被牠口中噴出的火焰灼傷， 傷口的部分不管過了多久 都依舊會感到疼痛。",
		'zh-cn': "要是被牠口中噴出的火焰灼傷， 傷口的部分不管過了多久 都依舊會感到疼痛。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "あくのひだね",
				'zh-tw': "惡之火種",
				'zh-cn': "惡之火種",
			},
			cost: ["Fire"],
			effect: {
				ja: "相手のバトルポケモンをやけどとこんらんにする。",
				'zh-tw': "將對手的戰鬥寶可夢【灼傷】與【混亂】。",
				'zh-cn': "將對手的戰鬥寶可夢【灼傷】與【混亂】。",
			},
		},
		{
			name: {
				ja: "バーンアウト",
				'zh-tw': "燃燒殆盡",
				'zh-cn': "燃燒殆盡",
			},
			damage: 120,
			cost: ["Fire", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。",
				'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。",
				'zh-cn': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821848,
				tcgplayer: 628658,
			},
		},
	],

	evolveFrom: {
		ja: "ロケット団のデルビル",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [229],
};

export default card;
