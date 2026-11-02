import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "ソルロック",
	},

	illustrator: "Whisker",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "太陽エネルギーが パワーの  源 なので 昼間は 強い。  回転すると 体が 光る。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "コスモビーム"}, "damage": 70, "cost": ["Fighting"], "effect": {"ja": "自分のベンチに「ルナトーン」がいないなら、このワザは失敗。このワザのダメージは弱点・抵抗力を計算しない。"}}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [338],

	thirdParty: {
		cardmarket: 840318,
		tcgplayer: 647136,
	},
};

export default card;