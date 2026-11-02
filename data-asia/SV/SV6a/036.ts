import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "イイネイヌex",
		'zh-tw': "夠讚狗ex",
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 250,
	types: ["Darkness"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ポイズンマッスル",
				'zh-tw': "猛毒筋力",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札から「基本[D]エネルギー」を2枚まで選び、このポケモンにつける。そして山札を切る。つけた場合、このポケモンをどくにする。",
				'zh-tw': "從自己的牌庫選擇最多2張「基本【惡】能量」卡，附於這隻寶可夢身上。並且重洗牌庫。附上卡的情況下，將這隻寶可夢【中毒】。",
			},
		},
		{
			name: {
				ja: "クレイジーチェーン",
				'zh-tw': "瘋狂連鎖",
			},
			damage: "130+",
			cost: ["Darkness", "Darkness", "Colorless"],
			effect: {
				ja: "このポケモンがどくなら、130ダメージ追加。",
				'zh-tw': "若這隻寶可夢【中毒】，則增加130點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 773785,
				tcgplayer: 566287,
			},
		},
	],

	retreat: 3,
	regulationMark: "H",
	rarity: "Double rare",
	dexId: [1014],

	suffix: "EX",
};

export default card;
