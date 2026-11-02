import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ルンパッパ",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 160,
	types: ["Grass"],

	description: {
		ja: "陽気な リズムの 音波を 受けると エネルギーを 作りだす 仕組みを 全身に 持っている。",
	},

	stage: "Stage2",

	abilities: [{"type": "Ability", "name": {"ja": "エキサイトヒール"}, "effect": {"ja": "自分の場にタイプの「メガシンカex」がいるなら、自分の番に1回使える。自分のポケモン1匹のHPを「60」回復する。"}}],

	attacks: [{"name": {"ja": "つきたおし"}, "damage": 120, "cost": ["Grass", "Colorless"]}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ハスブレロ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [272],

	thirdParty: {
		cardmarket: 850514,
		tcgplayer: 655786,
	},
};

export default card;