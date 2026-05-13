import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ドンメル",
	},

	illustrator: "Yoshimi Miyoshi",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "１２００度の マグマを 体内に 溜めこんでいる。 炎の 技を 使うと コブは 小さく しぼむ。",
	},

	stage: "Basic",

	abilities: [{"type": "Ability", "name": {"ja": "しゃくねつボディ"}, "effect": {"ja": "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンをやけどにする。"}}],

	attacks: [{"name": {"ja": "かえん"}, "damage": "20", "cost": ["Fire"], "effect": {"ja": ""}}],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 3,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [322],
};

export default card;
