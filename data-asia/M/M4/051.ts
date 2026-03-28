import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ハリーセン",
	},

	illustrator: "nisimono",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	description: {
		ja: "",
	},

	stage: "Basic",

	abilities: [{"type": "Ability", "name": {"ja": "どくのトゲ"}, "effect": {"ja": "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンをどくにする。"}}],

	attacks: [{"name": {"ja": "ベノムショック"}, "cost": ["Darkness"], "damage": "30＋", "effect": {"ja": "相手のバトルポケモンがどくなら、50ダメージ追加。"}}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [211],
};

export default card;
