import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "クレッフィ",
	},

	illustrator: "MINAMINAMI Take",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		ja: "気に入った カギは 絶対に 手放さないので 防犯のために 金庫の カギを 持たせるのだ。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "メモリーロック"}, "damage": 30, "cost": ["Metal"], "effect": {"ja": "相手のバトルポケモンが持つワザを1つ選ぶ。次の相手の番、このワザを受けたポケモンは、選ばれたワザが使えない。"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [{"type": "Grass", "value": "-30"}],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [707],

	thirdParty: {
		cardmarket: 868010,
		tcgplayer: 674377,
	},
};

export default card;