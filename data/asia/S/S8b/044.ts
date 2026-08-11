import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "はくばバドレックスVMAX",
		'zh-tw': "白馬蕾冠王VMAX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 320,
	types: ["Water"],

	stage: "VMAX",

	attacks: [
		{
			name: {
				ja: "エンペラーライド",
				'zh-tw': "君王騎行",
			},
			damage: "10+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のベンチポケモンの数×30ダメージ追加。",
				'zh-tw': "增加對手的備戰寶可夢的數量×30點傷害。",
			},
		},
		{
			name: {
				ja: "ダイランス",
				'zh-tw': "極巨之矛",
			},
			damage: "10+",
			cost: ["Water", "Water"],
			effect: {
				ja: "のぞむなら、このポケモンについているエネルギーを2枚まで選び、トラッシュする。その場合、トラッシュした枚数×120ダメージ追加。",
				'zh-tw': "若希望，選擇最多2張這隻寶可夢身上附加的能量卡，將其丟棄。這個情況下，增加丟棄的張數×120點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586560,
				tcgplayer: 571297,
			},
		},
	],

	evolveFrom: {
		ja: "はくばバドレックスV",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Triple Rare",
	dexId: [898],
};

export default card;
