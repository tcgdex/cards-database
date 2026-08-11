import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "レイスポス",
		'zh-tw': "靈幽馬",
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "視覚 以外の 五感を 使い 様子を 探る。 蹴られたものは 魂を 抜かれてしまうという。",
		'zh-tw': "會利用視覺之外的感官去探測周圍的狀況。據說 被牠踢到時靈魂就會出竅。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "よるのあしおと",
				'zh-tw': "夜之足音",
			},
			cost: ["Psychic"],
			effect: {
				ja: "相手のポケモン2匹に、それぞれダメカンを2個のせる。",
				'zh-tw': "在對手的2隻寶可夢身上各放置2個傷害指示物。",
			},
		},
		{
			name: {
				ja: "ファントムストライク",
				'zh-tw': "幻影強襲",
			},
			damage: 120,
			cost: ["Psychic", "Psychic", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンは「ファントムストライク」が使えない。",
				'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「幻影強襲」。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 667930,
				tcgplayer: 569986,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [897],
};

export default card;
