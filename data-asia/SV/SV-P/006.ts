import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "クエスパトラ",
		'zh-tw': "風速狗",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "大きな 瞳から サイコパワーを 浴びせて 相手を 動けなくする。 見かけによらず 気性は 荒い。",
		'zh-tw': "根據過去的畫軸記載， 牠在草原上奔馳的姿態 擄獲了眾多人心。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "オーロラゲイン",
				'zh-tw': "咬碎",
			},
			damage: 30,
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンのHPを「30」回復する。",
				'zh-tw': "擲1次硬幣若為正面，則選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。",
			},
		},
		{
			name: {
				ja: "ちょうねんりき",
				'zh-tw': "火之鬃",
			},
			damage: 60,
			cost: ["Psychic", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 692253,
				tcgplayer: 587763,
			},
		},
	],

	evolveFrom: {
		ja: "ヒラヒナ",
	},

	retreat: 0,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [956],
};

export default card;
