import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヨマワル",
		'zh-tw': "夜巡靈",
	},

	illustrator: "IKEDA Saki",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "真っ赤な ひとつ目で 睨みつけられ 生体エネルギーを 吸われるとき ひどい 寒気に 襲われる。",
		'zh-tw': "遭到牠鮮紅的獨眼瞪視 並且被吸取生物能量時， 會受到嚴重的寒氣侵襲。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "むかえにいく",
				'zh-tw': "前往渡魂",
			},
			cost: ["Psychic"],
			effect: {
				ja: "自分のトラッシュから「ヨマワル」を3枚まで選び、ベンチに出す。",
				'zh-tw': "從自己的棄牌區選擇最多3張「夜巡靈」，放置於備戰區。",
			},
		},
		{
			name: {
				ja: "つぶやく",
				'zh-tw': "囈語",
			},
			damage: 30,
			cost: ["Psychic", "Psychic"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 773767,
				tcgplayer: 566269,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [355],
};

export default card;
