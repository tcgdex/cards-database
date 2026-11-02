import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のサナギラス",
		'zh-tw': "<火箭隊的>沙基拉斯",
		'zh-cn': "<火箭隊的>沙基拉斯",
	},

	illustrator: "Izucch",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	description: {
		ja: "体内で 圧縮させた ガスを 勢いよく 噴出させ 飛んで 暴れまわる サナギだ。",
		'zh-tw': "會以強勁的力道噴出在體內 壓縮好的氣體，好讓自己 能飛在空中大搞破壞的蛹。",
		'zh-cn': "會以強勁的力道噴出在體內 壓縮好的氣體，好讓自己 能飛在空中大搞破壞的蛹。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "ばくれつかくせい",
				'zh-tw': "爆裂覺醒",
				'zh-cn': "爆裂覺醒",
			},
			damage: 30,
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンから進化するカードを、自分の山札から1枚選び、このポケモンにのせて進化させる。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇1張從這隻寶可夢進化而來的卡，放置於這隻寶可夢身上完成進化。並且重洗牌庫。",
				'zh-cn': "從自己的牌庫選擇1張從這隻寶可夢進化而來的卡，放置於這隻寶可夢身上完成進化。並且重洗牌庫。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821881,
				tcgplayer: 628690,
			},
		},
	],

	evolveFrom: {
		ja: "ロケット団のヨーギラス",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [247],
};

export default card;
