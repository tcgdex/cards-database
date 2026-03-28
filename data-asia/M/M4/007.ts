import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ブリガロン",
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 180,
	types: ["Grass"],

	description: {
		ja: "",
	},

	stage: "Stage2",

	abilities: [{"type": "Ability", "name": {"ja": "ニードルアーマー"}, "effect": {"ja": "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、このポケモンについているエネルギーの数×3個ぶんのダメカンを、ワザを使ったポケモンにのせる。"}}],

	attacks: [{"name": {"ja": "かこいこむ"}, "cost": ["Grass", "Grass", "Colorless"], "damage": 160, "effect": {"ja": "次の相手の番、このワザを受けたポケモンは、にげられない。"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "ハリボーグ",
	},

	retreat: 4,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [652],
};

export default card;
