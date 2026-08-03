import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "オノノクス",
		'zh-tw': "雙斧戰龍",
	},

	illustrator: "Tsuyoshi Nagano",
	category: "Pokemon",
	hp: 170,
	types: ["Dragon"],

	description: {
		ja: "自慢の キバで 敵を 圧倒。 鉄塔を 一刀のもとに 切り捨てる 切れ味を 誇る。",
		'zh-tw': "會以自傲的牙齒壓制敵人。 牙齒的鋒利程度無與倫比， 就連鐵塔都能夠一斬而斷。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: {
				ja: "アックスダウン",
				'zh-tw': "斧擊在地",
			},
			cost: ["Fighting"],
			effect: {
				ja: "相手のバトルポケモンに特殊エネルギーがついているなら、そのポケモンをきぜつさせる。",
				'zh-tw': "若對手的戰鬥寶可夢身上附有特殊能量卡，則將那隻寶可夢【昏厥】。",
			},
		},
		{
			name: {
				ja: "りゅうのはどう",
				'zh-tw': "龍之波動",
			},
			damage: 230,
			cost: ["Fighting", "Metal"],
			effect: {
				ja: "自分の山札を上から3枚トラッシュする。",
				'zh-tw': "將自己的牌庫上方3張卡丟棄。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 773795,
				tcgplayer: 566297,
			},
		},
	],

	evolveFrom: {
		ja: "オノンド",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "Rare",
	dexId: [612],
};

export default card;
