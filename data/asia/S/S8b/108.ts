import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "フーパ",
		'zh-tw': "胡帕",
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "気に入った ものを リングを 使い 秘密の 住処へ 集めている。 リングを 潜って テレポートする。",
		'zh-tw': "用圓環將喜歡的東西傳送到秘密的住處。會鑽進圓環瞬間移動。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "アサルトゲート",
				'zh-tw': "進擊之門",
			},
			damage: 90,
			cost: ["Darkness"],
			effect: {
				ja: "この番、このポケモンがベンチからバトル場に出ていないなら、このワザは失敗。このワザのダメージは弱点を計算しない。",
				'zh-tw': "在這個回合，若沒有從備戰區將這隻寶可夢放置於戰鬥場，則這個招式失敗。這個招式的傷害不計算弱點。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586624,
				tcgplayer: 571361,
			},
		},
	],

	retreat: 2,
	regulationMark: "D",
	rarity: "None",
	dexId: [720],
};

export default card;
