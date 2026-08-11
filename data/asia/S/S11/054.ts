import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "ドラパルト",
		'zh-tw': "多龍巴魯托",
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],

	description: {
		ja: "ツノの 穴に ドラメシヤを 入れて 暮らす。 戦いになると マッハの スピードで ドラメシヤを 飛ばす。",
		'zh-tw': "讓多龍梅西亞住在自己角上的洞裡。戰鬥開始後會用音速 將多龍梅西亞發射出去。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: {
				ja: "ドラゴンランチャー",
				'zh-tw': "龍之發射器",
			},
			cost: ["Psychic"],
			effect: {
				ja: "自分のベンチの「ドラメシヤ」を、相手の場のポケモンの数ぶんまでトラッシュし、トラッシュした数ぶん、相手のポケモンを選ぶ。その後、選んだポケモン全員に、弱点・抵抗力を計算せず、それぞれ100ダメージ。",
				'zh-tw': "將最多與對手的場上寶可夢相同數量的自己的備戰區的「多龍梅西亞」卡丟棄，選擇與丟棄的數量相同數量的對手的寶可夢。然後，對所選的所有寶可夢不計算弱點・抵抗力，各造成100點傷害。",
			},
		},
		{
			name: {
				ja: "ホロウショット",
				'zh-tw': "陰森射擊",
			},
			damage: 120,
			cost: ["Psychic", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 667929,
				tcgplayer: 569985,
			},
		},
	],

	evolveFrom: {
		ja: "ドロンチ",
	},

	retreat: 1,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [887],
};

export default card;
