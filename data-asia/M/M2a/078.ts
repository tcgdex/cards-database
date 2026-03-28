import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ホップのオーロット",
	},

	illustrator: "matazo",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	description: {
		ja: "根っこを 神経の かわりにして 森の 木を 操る。 体に 棲みついた ポケモンには 親切。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "ホラーリベンジ"}, "cost": ["Colorless"], "damage": "30＋", "effect": {"ja": "前の相手の番に、ワザのダメージで、自分の「ホップのポケモン」がきぜつしていたなら、100ダメージ追加。"}}, {"name": {"ja": "おいつめる"}, "cost": ["Psychic", "Colorless", "Colorless"], "damage": 90, "effect": {"ja": "次の相手の番、このワザを受けたポケモンは、にげられない。"}}],

	weaknesses: [{"type": "Darkness", "value": "x2"}],
	resistances: [{"type": "Fighting", "value": "-30"}],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ホップのボクレー",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [709],
};

export default card;
