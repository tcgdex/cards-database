import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "グライガー",
	},

	illustrator: "Kazumasa Yasukuni",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "切り立った 崖に 巣を作る。 一度 滑空したあとは 跳びはねながら 巣に 戻る。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "どくづき"}, "damage": 10, "cost": ["Fighting"], "effect": {"ja": "相手のバトルポケモンをどくにする。"}}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [207],

	thirdParty: {
		cardmarket: 850550,
		tcgplayer: 655822,
	},
};

export default card;