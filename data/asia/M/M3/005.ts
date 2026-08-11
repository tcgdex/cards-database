import { Card } from "models/database/card";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ジャノビー",
	},

	illustrator: "Kurata So",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		'ja-jp': "高すぎる プライドが 玉にきず。 ほかの ポケモンと 連携できる ようになるまで 時間が かかる。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "ソーラーカッター"}, "damage": 40, "cost": ["Grass"]}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		'ja-jp': "ツタージャ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [496],

	thirdParty: {
		cardmarket: 867919,
		tcgplayer: 674324,
	},
};

export default card;