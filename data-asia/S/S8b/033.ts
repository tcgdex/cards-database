import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ポワルン ゆきぐものすがた",
		'zh-tw': "飄浮泡泡 雪雲的樣子",
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "霰に 打たれると この 姿に 変化する。 全身 冷たく 皮膚は 少し 凍っているぞ。",
		'zh-tw': "被冰雹打到時就會變成這個樣子。全身上下冷冰冰的，皮膚有一點結冰。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "てんきよみ",
				'zh-tw': "看天",
			},
			effect: {
				ja: "自分のトラッシュに「スタジアム」が8枚以上あるなら、このポケモンがワザを使うためのエネルギーは、すべてなくなる。",
				'zh-tw': "若自己的棄牌區有8張以上的「競技場」卡，則這隻寶可夢使用招式所需的能量全部消除。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "フロストタイフーン",
				'zh-tw': "冰霜颱風",
			},
			damage: 120,
			cost: ["Water", "Water", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンは「フロストタイフーン」が使えない。",
				'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「冰霜颱風」。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586548,
				tcgplayer: 571286,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578372,
			},
		},
	],

	retreat: 0,
	regulationMark: "E",
	rarity: "None",
	dexId: [351],
};

export default card;
