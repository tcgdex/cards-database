import { Card } from "models/database/card";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "グライオン",
		'zh-tw': "天蠍王",
	},

	illustrator: "SATOSHI NAKAI",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		'ja-jp': "羽音を 立てずに 空を 飛ぶ。 長い 尻尾で 獲物を 捕まえ キバで 急所を 一突き。",
		'zh-tw': "可不發出振翅聲而在空中飛行。先用長長的尾巴攫住獵物，再用牙齒朝弱點給予一刺。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "きりおとす",
				'zh-tw': "切落",
			},
			damage: 30,
			cost: ["Fighting", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
				'zh-tw': "選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。",
			},
		},
		{
			name: {
				'ja-jp': "ベノムヒット",
				'zh-tw': "毒液一擊",
			},
			damage: 100,
			cost: ["Fighting", "Fighting", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンをどくにする。",
				'zh-tw': "將對手的戰鬥寶可夢【中毒】。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 571603,
				tcgplayer: 569344,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "グライガー",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [472],
};

export default card;
