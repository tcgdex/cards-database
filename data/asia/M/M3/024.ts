import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "ボルケニオン",
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		ja: "水蒸気を 噴き出して 自分の 姿を  濃霧で 隠す。人の 立ち入らない  山に 住むという。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "かいりき"}, "damage": 50, "cost": ["Water", "Colorless"]}, {"name": {"ja": "パワフルスチーム"}, "damage": "90x", "cost": ["Water", "Water", "Colorless"], "effect": {"ja": "このポケモンについているエネルギーの数ぶんコインを投げ、オモテの数×90ダメージ。"}}],

	weaknesses: [{"type": "Lightning", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 3,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [721],

	thirdParty: {
		cardmarket: 867944,
		tcgplayer: 674343,
	},
};

export default card;