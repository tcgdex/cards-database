import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "セレビィ",
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "未来から 時を 渡って やって来た。 キズを 癒し 草木に 力を 分け与える。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ときをめぐる"}, "cost": ["Grass"], "effect": {"ja": "自分の山札からポケモンとスタジアムを合計3枚まで選び、相手に見せて、手札に加える。そして山札を切る。"}}, {"name": {"ja": "ソーラーカッター"}, "damage": 30, "cost": ["Grass"]}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [251],

	thirdParty: {
		cardmarket: 840155,
		tcgplayer: 647115,
	},
};

export default card;