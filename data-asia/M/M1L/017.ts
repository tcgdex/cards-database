import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "エースバーン",
	},

	illustrator: "REND",
	category: "Pokemon",
	hp: 160,
	types: ["Fire"],

	description: {
		ja: "熱くなりやすい 性格だが 信頼する トレーナーが いると 隙のない 戦い方を みせる。",
	},

	stage: "Stage2",

	abilities: [{"type": "Ability", "name": {"ja": "しゅんぱつりょく"}, "effect": {"ja": "対戦準備でポケモンをバトル場に出すとき、このカードが手札にあるなら、ウラにしてバトル場に出してよい。"}}],

	attacks: [{"name": {"ja": "フレアターボ"}, "damage": 50, "cost": ["Colorless"], "effect": {"ja": "自分の山札から基本エネルギーを3枚まで選び、ベンチポケモンに好きなようにつける。そして山札を切る。"}}],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "ラビフット",
	},

	retreat: 0,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [815],

	thirdParty: {
		cardmarket: 840308,
		tcgplayer: 647126,
	},
};

export default card;