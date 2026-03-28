import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のズバット",
	},

	illustrator: "toi8",
	category: "Pokemon",
	hp: 50,
	types: ["Darkness"],

	description: {
		ja: "陽の 当たらない 洞窟に 棲む。 朝になると 仲間で 集まり 体を 温めあいながら 寝る。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "どくをとばす"}, "cost": ["Darkness"], "effect": {"ja": "相手のバトルポケモンをどくにする。"}}],

	weaknesses: [{"type": "Lightning", "value": "x2"}],
	resistances: [{"type": "Fighting", "value": "-30"}],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [41],
};

export default card;
