import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "Nのゼクロム",
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],

	description: {
		ja: "しっぽの 内部が モーターのように 回ると 何本もの 稲妻が 発生して 周囲を つらぬく。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ひきさく"}, "cost": ["Colorless", "Colorless", "Colorless"], "damage": 70, "effect": {"ja": "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。"}}, {"name": {"ja": "ランページサンダー"}, "cost": ["Fire", "Lightning", "Lightning", "Colorless"], "damage": 250, "effect": {"ja": "次の自分の番、このポケモンはワザが使えない。"}}],

	weaknesses: [],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [644],
};

export default card;
