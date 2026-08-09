import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "オノンド",
		'zh-tw': "斧牙龍",
	},

	illustrator: "Uninori",
	category: "Pokemon",
	hp: 100,
	types: ["Dragon"],

	description: {
		ja: "太い キバを 使って 獲物を きれいに 捌いて 食べるものと 保存する ものに 分けるのだ。",
		'zh-tw': "會使用粗壯的牙齒俐落地 分解獵物，然後把當下 要吃的份與存糧的份分開。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "きんちょうかん",
				'zh-tw': "緊張感",
			},
			effect: {
				ja: "このポケモンは、相手が手札からグッズまたはサポートを出して使ったとき、その効果を受けない。",
				'zh-tw': "對手從手牌使出物品卡或者支援者卡時，這隻寶可夢不會受到那個效果的影響。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "りゅうのはどう",
				'zh-tw': "龍之波動",
			},
			damage: 80,
			cost: ["Fighting", "Metal"],
			effect: {
				ja: "自分の山札を上から1枚トラッシュする。",
				'zh-tw': "將自己的牌庫上方1張卡丟棄。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 773794,
				tcgplayer: 566296,
			},
		},
	],

	evolveFrom: {
		ja: "キバゴ",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "Common",
	dexId: [611],
};

export default card;
