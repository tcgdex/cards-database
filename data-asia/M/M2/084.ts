import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ジュゴン",
	},

	illustrator: "satoma",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		ja: "水の 温度が 下がる 夜 食べものを 求め 泳ぎまわる。 昼間は 浅い 海底で 寝る。",
	},

	stage: "Stage1",

	abilities: [{"type": "Ability", "name": {"ja": "あついしぼう"}, "effect": {"ja": "このポケモンが、相手のまたはポケモンから受けるワザのダメージは「-30」される。"}}],

	attacks: [{"name": {"ja": "たたきつける"}, "damage": "70x", "cost": ["Water", "Colorless"], "effect": {"ja": "コインを2回投げ、オモテの数×70ダメージ。"}}],

	weaknesses: [{"type": "Lightning", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "パウワウ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [87],

	thirdParty: {
		cardmarket: 850592,
		tcgplayer: 655863,
	},
};

export default card;