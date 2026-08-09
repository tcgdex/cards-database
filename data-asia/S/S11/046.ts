import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "ジュペッタ",
		'zh-tw': "詛咒娃娃",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		ja: "捨てられた 怨念で 生まれる。 大切に されると 満足して 元の ヌイグルミに 戻るという。",
		'zh-tw': "誕生自遭到捨棄時的怨念。據說只要讓牠感覺自己受到重視， 牠就會滿意地變回原本的玩偶。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "にんぎょうくよう",
				'zh-tw': "玩偶供養",
			},
			effect: {
				ja: "自分の番に1回使える。自分のトラッシュからサポートを1枚選び、相手に見せて、手札に加える。その後、このポケモンをロストゾーンに置く。（ポケモン以外のカードは、すべてトラッシュする。）",
				'zh-tw': "在自己的回合時，可使用1次。從自己的棄牌區選擇1張支援者卡，在給對手看過後加入手牌。然後，將這隻寶可夢放置於放逐區。（寶可夢以外的卡全部丟棄。）",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ホロウショット",
				'zh-tw': "陰森射擊",
			},
			damage: 50,
			cost: ["Psychic", "Psychic"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667921,
				tcgplayer: 569977,
			},
		},
	],

	evolveFrom: {
		ja: "カゲボウズ",
	},

	retreat: 1,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [354],
};

export default card;
