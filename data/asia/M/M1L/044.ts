import { Card } from "models/database/card";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "タギングル",
	},

	illustrator: "Dsuke",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		'ja-jp': "エサによって 色が 変化する 毒の 唾液を 指に 塗して 森の 木々に 模様を 描く。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "ミラクルペイント"}, "damage": 90, "cost": ["Darkness", "Colorless"], "effect": {"ja": "コインを1回投げオモテなら、特殊状態の中から1つ選び、相手のバトルポケモンをその状態にする。"}}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		'ja-jp': "シルシュルー",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [945],

	thirdParty: {
		cardmarket: 840339,
		tcgplayer: 647153,
	},
};

export default card;