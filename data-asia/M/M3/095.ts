import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "メガスターミーex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 330,
	types: ["Water"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "ジェットブロー"}, "damage": 120, "cost": ["Water"], "effect": {"ja": "相手のベンチポケモン1匹にも、50ダメージ。［ベンチは弱点・抵抗力を計算しない。］"}}, {"name": {"ja": "ネビュラビーム"}, "damage": 210, "cost": ["Colorless", "Colorless", "Colorless"], "effect": {"ja": "このワザのダメージは、弱点・抵抗力と、相手のバトルポケモンにかかっている効果を計算しない。"}}],

	weaknesses: [{"type": "Lightning", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "ヒトデマン",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Ultra Rare",
	dexId: [121],

	thirdParty: {
		cardmarket: 868105,
		tcgplayer: 674414,
	},
};

export default card;