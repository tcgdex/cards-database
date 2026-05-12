import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "コイル",
	},

	illustrator: "Hoshino KURO",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "空中に 浮いたまま 移動して 左右の ユニットから 電磁波などを 放射する。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ピッカリだま"}, "damage": "20", "cost": ["Lightning"], "effect": {"ja": ""}}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [81],
};

export default card;
