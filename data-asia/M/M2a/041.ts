import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "モスノウ",
	},

	illustrator: "cochi8i",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		ja: "冷気を 発する 大きな 翅で 飛びまわり 猛吹雪を 起こす。 綺麗な 雪解け水が 好物。",
	},

	stage: "Stage1",

	abilities: [{"type": "Ability", "name": {"ja": "いざなうはね"}, "effect": {"ja": "このポケモンがバトル場にいるなら、自分の番に1回使える。おたがいのプレイヤーは、それぞれ山札を1枚引く。"}}],

	attacks: [{"name": {"ja": "コールドサイクロン"}, "damage": "90", "cost": ["Water", "Water"], "effect": {"ja": "このポケモンについている「Water」エネルギーを1個選び、ベンチポケモンにつけ替える。"}}],

	weaknesses: [{"type": "Metal", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ユキハミ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [873],
};

export default card;
