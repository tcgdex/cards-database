import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "ガチゴラス",
	},

	illustrator: "Dsuke",
	category: "Pokemon",
	hp: 180,
	types: ["Fighting"],

	description: {
		ja: "１億年前の 世界では 無敵を ほこり 王様のように ふるまっていた ポケモンだ。",
	},

	stage: "Stage2",

	abilities: [{"type": "Ability", "name": {"ja": "ティラノガッツ"}, "effect": {"ja": "このポケモンに特殊エネルギーがついているなら、このポケモンは最大HPが「＋150」される。"}}],

	attacks: [{"name": {"ja": "あばれまくる"}, "damage": 160, "cost": ["Fighting", "Colorless"], "effect": {"ja": "ウラが出るまでコインを投げ、オモテの数ぶん、相手の山札を上からトラッシュする。"}}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "チゴラス",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [697],

	thirdParty: {
		cardmarket: 867966,
		tcgplayer: 674363,
	},
};

export default card;