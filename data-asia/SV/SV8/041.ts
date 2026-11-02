import { Card } from "../../../interfaces";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		ja: "カプ・コケコ",
		'zh-tw': "卡璞・鳴鳴",
		'zh-cn': "卡璞・鳴鳴",
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "守り神と 呼ばれるが 気分を 害する 人間や ポケモンには 襲い掛かる 荒ぶる神 でもある。",
		'zh-tw': "雖被稱為守護神，但會去 襲擊惹自己不開心的人或寶可夢， 是個性情凶悍的神。",
		'zh-cn': "雖被稱為守護神，但會去 襲擊惹自己不開心的人或寶可夢， 是個性情凶悍的神。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "かみなりをよぶ",
				'zh-tw': "召喚雷電",
				'zh-cn': "召喚雷電",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札から[L]ポケモンを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇最多2張【雷】寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。",
				'zh-cn': "從自己的牌庫選擇最多2張【雷】寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。",
			},
		},
		{
			name: {
				ja: "サイドカウンター",
				'zh-tw': "獎賞反擊",
				'zh-cn': "獎賞反擊",
			},
			damage: "90+",
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "自分のサイドの残り枚数が、相手のサイドの残り枚数より多いなら、90ダメージ追加。",
				'zh-tw': "若自己剩餘獎賞卡的張數，比對手剩餘獎賞卡的張數多，則增加90點傷害。",
				'zh-cn': "若自己剩餘獎賞卡的張數，比對手剩餘獎賞卡的張數多，則增加90點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 793475,
				tcgplayer: 587621,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Rare",
	dexId: [785],
};

export default card;
