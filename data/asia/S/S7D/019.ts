import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル サンダー",
		'zh-tw': "伽勒爾 閃電鳥",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "ひと蹴りで ダンプカーを 粉々に する 脚力を もつ。 時速 ３００キロで 山を 駆けるという。",
		'zh-tw': "擁有能夠一腳踢毀砂石車的強勁腳力。據說能以時速３００公里在山中奔跑。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "けんきゃくチャージ",
				'zh-tw': "健腳充能",
			},
			effect: {
				ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。自分の手札から[闘]エネルギーを2枚まで選び、このポケモンにつける。",
				'zh-tw': "在自己的回合，當從手牌將這張卡放置於備戰區時，可使用1次。從自己的手牌選擇最多2張【鬥】能量卡，附於這隻寶可夢身上。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ザッパーキック",
				'zh-tw': "閃踢",
			},
			damage: 70,
			cost: ["Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "のぞむなら、このポケモンについているエネルギーを、すべてトラッシュする。その場合、相手のバトルポケモンをマヒにする。",
				'zh-tw': "若希望，將這隻寶可夢身上附加的能量全部丟棄。這個情況下，將對手的戰鬥寶可夢【麻痺】。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 571601,
				tcgplayer: 569342,
			},
		},
	],

	retreat: 0,
	regulationMark: "E",
	rarity: "Rare",
	dexId: [145],
};

export default card;
