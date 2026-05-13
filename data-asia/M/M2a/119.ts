import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ゲノセクトex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],

	stage: "Basic",

	abilities: [{"type": "Ability", "name": {"ja": "メタルシグナル"}, "effect": {"ja": "自分の番に1回使える。自分の山札から「Metal」タイプの進化ポケモンを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。"}}],

	attacks: [{"name": {"ja": "プロテクトチャージ"}, "damage": "150", "cost": ["Metal", "Metal"], "effect": {"ja": "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Double rare",
};

export default card;
