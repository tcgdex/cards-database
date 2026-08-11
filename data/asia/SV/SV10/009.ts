import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のワナイダー",
		'zh-tw': "<火箭隊的>操陷蛛",
		'zh-cn': "<火箭隊的>操陷蛛",
	},

	illustrator: "Taiga Kasai",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "木の枝や 天井に 糸で 張りつき 音もなく 行動する。 獲物に 気づかれる前に 倒す。",
		'zh-tw': "用絲線吸附在樹枝或天花板上 無聲無息地移動。會在自己 被察覺到之前將獵物打倒。",
		'zh-cn': "用絲線吸附在樹枝或天花板上 無聲無息地移動。會在自己 被察覺到之前將獵物打倒。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "チャージアップ",
				'zh-tw': "充能",
				'zh-cn': "充能",
			},
			effect: {
				ja: "自分の番に1回使える。自分のトラッシュから基本エネルギーを1枚選び、このポケモンにつける。",
				'zh-tw': "在自己的回合時可使用1次。從自己的棄牌區選擇1張基本能量卡，附於這隻寶可夢身上。",
				'zh-cn': "在自己的回合時可使用1次。從自己的棄牌區選擇1張基本能量卡，附於這隻寶可夢身上。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ロケットラッシュ",
				'zh-tw': "火箭猛攻",
				'zh-cn': "火箭猛攻",
			},
			damage: "30×",
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "自分の場の「ロケット団のポケモン」の数×30ダメージ。",
				'zh-tw': "造成自己的場上「火箭隊的寶可夢」的數量×30點傷害。",
				'zh-cn': "造成自己的場上「火箭隊的寶可夢」的數量×30點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 821840,
				tcgplayer: 628650,
			},
		},
	],

	evolveFrom: {
		ja: "ロケット団のタマンチュラ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [918],
};

export default card;
