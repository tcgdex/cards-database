import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "カイリキー",
		'zh-tw': "怪力",
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	description: {
		ja: "４本の腕を すばやく 動かし あらゆる 角度から 休むことなく パンチや チョップを 叩きこむ。",
		'zh-tw': "能夠迅速活動４隻手臂，從各種角度毫不停歇地 使出拳擊或手刀。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "かじばのマッスル",
				'zh-tw': "火場筋力",
			},
			effect: {
				ja: "相手のサイドの残り枚数が3枚以下なら、このポケモンの最大HPは「150」大きくなる。",
				'zh-tw': "若對手剩餘獎賞卡的張數為3張以下，則這隻寶可夢的最大HP增加「150」。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ごうわんラリアット",
				'zh-tw': "剛腕金勾臂",
			},
			damage: "100+",
			cost: ["Fighting", "Fighting"],
			effect: {
				ja: "のぞむなら、100ダメージ追加。その場合、次の自分の番、このポケモンはワザが使えない。",
				'zh-tw': "若希望，增加100點傷害。這個情況下，在下個自己的回合，這隻寶可夢無法使用招式。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 656344,
				tcgplayer: 570699,
			},
		},
	],

	evolveFrom: {
		ja: "ゴーリキー",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [68],
};

export default card;
