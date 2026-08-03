import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のサンダー",
		'zh-tw': "<火箭隊的>閃電鳥",
		'zh-cn': "<火箭隊的>閃電鳥",
	},

	illustrator: "Nurikabe",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "羽根を こすり合わせると たちまち 雷が 落ちると 言われている 伝説の 鳥ポケモン。",
		'zh-tw': "傳說的鳥寶可夢。 據說只要牠磨蹭翅膀， 立刻就會有雷電劈下。",
		'zh-cn': "傳說的鳥寶可夢。 據說只要牠磨蹭翅膀， 立刻就會有雷電劈下。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ジャミングウイング",
				'zh-tw': "阻礙之翼",
				'zh-cn': "阻礙之翼",
			},
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "のぞむなら、相手のバトルポケモンについているエネルギーを1個選び、相手のベンチポケモンにつけ替える。",
				'zh-tw': "若希望，選擇1個對手的戰鬥寶可夢身上附加的能量，改附於對手的備戰寶可夢身上。",
				'zh-cn': "若希望，選擇1個對手的戰鬥寶可夢身上附加的能量，改附於對手的備戰寶可夢身上。",
			},
		},
		{
			name: {
				ja: "バッドサンダー",
				'zh-tw': "惡棍閃電",
				'zh-cn': "惡棍閃電",
			},
			damage: "60+",
			cost: ["Lightning", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンに「ロケット団エネルギー」がついているなら、60ダメージ追加。",
				'zh-tw': "若這隻寶可夢身上附有「火箭隊能量」，則增加60點傷害。",
				'zh-cn': "若這隻寶可夢身上附有「火箭隊能量」，則增加60點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 821865,
				tcgplayer: 628674,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [145],
};

export default card;
