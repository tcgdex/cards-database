import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,

	name: {
		ja: "クレベース",
	},

	illustrator: "Tomoki Sone",
	category: "Pokemon",
	hp: 160,
	types: ["Water"],

	description: {
		ja: "凍りついた 体は 鋼鉄のように 硬い。 邪魔する ものを 巨体で 押しつぶし 移動する。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "ひょうざんくずし",
			},
			damage: "60x",
			cost: ["Water"],
			effect: {
				ja: "自分の山札を上から6枚トラッシュし、その中にある「基本エネルギー」の枚数×60ダメージ。",
			},
		},
		{
			name: {
				ja: "フロストスタンプ",
			},
			damage: 160,
			cost: ["Water", "Water", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],
	variants: [{ type: "normal" }],
	retreat: 4,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [713],

	thirdParty: {
		cardmarket: 876923
	}
};

export default card;
