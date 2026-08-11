import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "マッスグマ",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		ja: "抜群の 瞬発力と  するどいツメで 獲物を しとめる。  曲がった 道を 走るのは 下手。",
	},

	stage: "Stage1",

	abilities: [{"type": "Ability", "name": {"ja": "エキサイトダッシュ"}, "effect": {"ja": "このポケモンがベンチにいて、自分の場に「メガシンカex」がいるなら、自分の番に1回使える。このポケモンをバトルポケモンと入れ替える。"}}],

	attacks: [{"name": {"ja": "きりさく"}, "damage": 70, "cost": ["Colorless"]}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ジグザグマ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [264],

	thirdParty: {
		cardmarket: 850578,
		tcgplayer: 655849,
	},
};

export default card;