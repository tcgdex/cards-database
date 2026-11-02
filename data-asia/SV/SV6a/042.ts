import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ダイオウドウ",
		'zh-tw': "大王銅象",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 200,
	types: ["Metal"],

	description: {
		ja: "プライドが 高く 気難しい。 鮮やかな 緑の 皮膚の ものが 仲間の 尊敬を 集める。",
		'zh-tw': "自尊心強，脾氣刁鑽。 皮膚的綠色越是鮮豔， 就越受到同伴的尊敬。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "どでかいからだ" },
			effect: {
				ja: "このポケモンがバトル場にいるかぎり、相手は手札からスタジアムを出せない。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ノーズラリアット",
				'zh-tw': "‌‌[特性]爆大身軀",
			},
			damage: "130+",
			cost: ["Metal", "Metal", "Metal", "Colorless"],
			effect: {
				ja: "のぞむなら、100ダメージ追加。その場合、次の自分の番、このポケモンはワザが使えない。",
				'zh-tw': "只要這隻寶可夢在戰鬥場上，對手無法從手牌使出競技場卡。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 773791,
				tcgplayer: 566293,
			},
		},
	],

	evolveFrom: {
		ja: "ゾウドウ",
	},

	retreat: 4,
	regulationMark: "H",
	rarity: "Rare",
	dexId: [879],
};

export default card;
