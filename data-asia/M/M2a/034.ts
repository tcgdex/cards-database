import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のフリーザー",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		ja: "氷を 自在に 操る 力を もつ。 永久凍土の 雪山に 棲んでいるという。",
	},

	stage: "Basic",

	abilities: [{"type": "Ability", "name": {"ja": "レジストヴェール"}, "effect": {"ja": "このポケモンがいるかぎり、自分の場のたねポケモンの「ロケット団のポケモン」全員は、相手のポケモンが使うワザの効果を受けない。（すでに受けている効果は、なくならない。）"}}],

	attacks: [{"name": {"ja": "ダークフロスト"}, "cost": ["Water", "Colorless", "Colorless"], "damage": "60＋", "effect": {"ja": "このポケモンに「ロケット団エネルギー」がついているなら、60ダメージ追加。"}}],

	weaknesses: [{"type": "Lightning", "value": "x2"}],
	resistances: [{"type": "Fighting", "value": "-30"}],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [144],
};

export default card;
