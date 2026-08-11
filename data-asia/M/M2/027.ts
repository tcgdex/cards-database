import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ポッチャマ",
	},

	illustrator: "Hideki Ishikawa",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "歩くのは 苦手で こけたりするが ポッチャマの プライドは 高く 気にせず 堂々と 胸を はる。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "フレンドコール"}, "cost": ["Colorless"], "effect": {"ja": "自分の山札からサポートを1枚選び、相手に見せて、手札に加える。そして山札を切る。"}}, {"name": {"ja": "たいあたり"}, "damage": 20, "cost": ["Colorless", "Colorless"]}],

	weaknesses: [{"type": "Lightning", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [393],

	thirdParty: {
		cardmarket: 850534,
		tcgplayer: 655806,
	},
};

export default card;