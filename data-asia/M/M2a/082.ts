import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のディグダ",
	},

	illustrator: "Yuriko Akase",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		ja: "皮膚が とても 薄いので 光に 照らされると 血液が 温められて 弱ってしまう。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "もぐりまくる"}, "cost": ["Fighting"], "effect": {"ja": "ウラが出るまでコインを投げ、オモテの数ぶん、相手の山札を上からトラッシュする。"}}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [50],
};

export default card;
