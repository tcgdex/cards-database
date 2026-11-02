import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "ダストダスVMAX",
		'zh-tw': "灰塵山VMAX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 330,
	types: ["Darkness"],

	stage: "VMAX",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ガラクタあつめ",
				'zh-tw': "集破爛",
			},
			effect: {
				ja: "このポケモンは、「ポケモンのどうぐ」を2枚までつけられる。（この特性がなくなったとき、自分は「ポケモンのどうぐ」を1枚になるようにトラッシュする。）",
				'zh-tw': "這隻寶可夢身上最多可附有2張「寶可夢道具」卡。（這個特性消除時，自己將「寶可夢道具」卡丟棄直到變為1張為止。）",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "キョダイシュウキ",
				'zh-tw': "超極巨臭氣沖天",
			},
			damage: 120,
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。次の相手の番、このワザを受けたポケモンは、にげられない。",
				'zh-tw': "將對手的戰鬥寶可夢【中毒】。在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 571614,
				tcgplayer: 569354,
			},
		},
	],

	evolveFrom: {
		ja: "ダストダスV",
	},

	retreat: 3,
	regulationMark: "E",
	rarity: "Triple Rare",
	dexId: [569],
};

export default card;
