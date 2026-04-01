import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "ダイノーズ",
	},

	illustrator: "Kinu Nishimura",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "強い 磁力を 放っているので 近くにある 電化製品は 使いものに ならなくなってしまう。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "いわころがり"}, "damage": 60, "cost": ["Fighting", "Fighting"]}, {"name": {"ja": "ノーズボンバー"}, "damage": 260, "cost": ["Fighting", "Fighting", "Fighting", "Colorless"], "effect": {"ja": "このポケモンについているエネルギーを3個選び、トラッシュする。"}}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "ノズパス",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [476],

	thirdParty: {
		cardmarket: 868098,
		tcgplayer: 674407,
	},
};

export default card;