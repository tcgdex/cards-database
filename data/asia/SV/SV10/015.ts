import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のファイヤーex",
		'zh-tw': "<火箭隊的>火焰鳥ex",
		'zh-cn': "<火箭隊的>火焰鳥ex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 220,
	types: ["Fire"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "フレイムバリア",
				'zh-tw': "火焰屏障",
				'zh-cn': "火焰屏障",
			},
			damage: 110,
			cost: ["Fire", "Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-50」される。",
				'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-50」點。",
				'zh-cn': "在下個對手的回合，這隻寶可夢受到招式的傷害「-50」點。",
			},
		},
		{
			name: {
				ja: "イビルバーン",
				'zh-tw': "邪惡灼燒",
				'zh-cn': "邪惡灼燒",
			},
			cost: ["Fire", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについている「ロケット団エネルギー」を1枚選び、トラッシュする。その場合、相手のバトルポケモンと、ついているすべてのカードを、トラッシュする。",
				'zh-tw': "選擇1張這隻寶可夢身上附加的「火箭隊能量」，將其丟棄。這個情況下，將對手的戰鬥寶可夢與附加的卡全部丟棄。",
				'zh-cn': "選擇1張這隻寶可夢身上附加的「火箭隊能量」，將其丟棄。這個情況下，將對手的戰鬥寶可夢與附加的卡全部丟棄。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 821846,
				tcgplayer: 628656,
			},
		},
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "Double rare",
	dexId: [146],

	suffix: "EX",
};

export default card;
