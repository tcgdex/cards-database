import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒバニー",
	},

	illustrator: "svlt",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "全身が 温まることで 本来の パワーを 発揮できる。 そのため 準備運動を する。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "けりつける"}, "damage": 30, "cost": ["Colorless"], "effect": {"ja": "コインを1回投げウラなら、このワザは失敗。"}}],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [813],

	thirdParty: {
		cardmarket: 840164,
		tcgplayer: 647124,
	},
};

export default card;