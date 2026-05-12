import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のゴルバット",
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		ja: "小さな 脚で 器用に 歩く。 寝ている 獲物に 忍びより キバを 突きたて 血を すするのだ。",
	},

	stage: "Stage1",

	abilities: [{"type": "Ability", "name": {"ja": "こっそりかみつく"}, "effect": {"ja": "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手のポケモン1匹に、ダメカンを2個のせる。"}}],

	attacks: [{"name": {"ja": "あやしいひかり"}, "damage": "30", "cost": ["Darkness"], "effect": {"ja": "相手のバトルポケモンをこんらんにする。"}}],

	weaknesses: [{"type": "Lightning", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "ロケット団のズバット",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [42],
};

export default card;
