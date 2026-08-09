import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "スリーパー",
		'zh-tw': "引夢貘人",
	},

	illustrator: "Masako Tomii",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "どんなときでも 持っている 振り子を 決まったリズムで 揺らしている。 近寄ると なぜか 眠くなる。",
		'zh-tw': "會以固定的節奏擺動著 形影不離的鐘擺。一靠近牠 就會不由自主地昏昏欲睡。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "はくちゅうむ",
				'zh-tw': "白日夢",
			},
			damage: 80,
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンに、相手が手札からエネルギーをつけたなら、相手の番は終わる。",
				'zh-tw': "在下個對手的回合，若對手從手牌將能量卡附於受到這個招式的寶可夢身上，則對手的回合結束。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 773766,
				tcgplayer: 566268,
			},
		},
	],

	evolveFrom: {
		ja: "スリープ",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [97],
};

export default card;
