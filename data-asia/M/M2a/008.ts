import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ドクケイル",
	},

	illustrator: "kamonabe",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	description: {
		ja: "夜行性の ポケモン。  明かりに 誘われた ドクケイルが  街路樹の 葉を 食い散らかす。",
	},

	stage: "Stage2",

	abilities: [{"type": "Ability", "name": {"ja": "さざめくかぜ"}, "effect": {"ja": "自分の番に1回使える。コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、相手の手札にもどす。"}}],

	attacks: [{"name": {"ja": "ゆうやみどく"}, "damage": "100", "cost": ["Grass", "Grass"], "effect": {"ja": "相手のバトルポケモンをどくとねむりにする。"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [269],
};

export default card;
