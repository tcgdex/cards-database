import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ドーブル",
	},

	illustrator: "REND",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	description: {
		ja: "大人になると 仲間から 背中に 足跡の マークを つけられる 習性を 持つ。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "エナジースケッチ"}, "cost": ["Colorless"], "effect": {"ja": "コインを3回投げ、オモテの数ぶんまで、自分のトラッシュから基本エネルギーを選び、ベンチポケモンに好きなようにつける。"}}, {"name": {"ja": "ひっかける"}, "damage": 40, "cost": ["Colorless", "Colorless"]}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [235],

	thirdParty: {
		cardmarket: 850576,
		tcgplayer: 655847,
	},
};

export default card;