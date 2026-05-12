import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ミルホッグ",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		ja: "体内の 発光物質で 目玉や 体を 光らせ 襲ってきた 敵を ひるませる。",
	},

	stage: "Stage1",
	attacks: [
		{ "name": { "ja": "ぬきうちチェック" }, "damage": "", "cost": ["Colorless"], "effect": { "ja": "コインを3回投げる。オモテが出たなら、相手の手札を見て、その中からカードをオモテの数ぶん選び、相手の山札にもどして切る。" } },
		{ "name": { "ja": "けたぐり" }, "damage": "50", "cost": ["Colorless"], "effect": { "ja": "" } }
	],

	
	weaknesses: [{ "type": "Fighting", "value": "x2" }],
	
	resistances: [],
	
	retreat: 1,

	variants: [{"type": "normal"}],
	evolveFrom: {
		ja: "ミネズミ",
	},
	rarity: "Common",
	dexId: [505],
	regulationMark: "I",
};

export default card;
