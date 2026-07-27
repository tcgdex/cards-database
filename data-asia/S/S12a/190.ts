import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル ファイヤー",
		'zh-tw': "伽勒爾 火焰鳥",
	},

	illustrator: "Shinji Kanda",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "邪悪な オーラを 炎のように 燃え上がらせる その 姿から ファイヤーと 名づけられた。",
		'zh-tw': "釋放著像火焰般燃起的邪惡氣場。這樣的外觀讓牠得到了火焰鳥之名。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "じゃあくチャージ",
				'zh-tw': "邪惡充能",
			},
			effect: {
				ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。自分の手札から[悪]エネルギーを2枚まで選び、このポケモンにつける。",
				'zh-tw': "在自己的回合，當從手牌將這張卡放置於備戰區時，可使用1次。從自己的手牌選擇最多2張【惡】能量卡，附於這隻寶可夢身上。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "もえあがるいかり",
				'zh-tw': "怒火中燒",
			},
			damage: "20+",
			cost: ["Darkness", "Darkness", "Colorless"],
			effect: {
				ja: "相手がすでにとったサイドの枚数×50ダメージ追加。",
				'zh-tw': "增加對手已經獲得的獎賞卡的張數×50點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687752,
				tcgplayer: 571728,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Illustration rare",
	dexId: [146],
};

export default card;
