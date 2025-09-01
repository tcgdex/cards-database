import { Card } from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
	set: Set,
	name: {
		ja: "Swampert Ex",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [260],
	hp: 150,
	types: ["Water"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "エネルギーリサイクル",
			},
			effect: {
				ja: "ターン中（攻撃の前）に（攻撃の前に）、廃棄パイルを3枚のエネルギーカードに検索し、好きなようにポカモンに取り付けることができます。もしそうなら、あなたの順番は終わります。 Swampert Exが特別な状態の影響を受けている場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: {
				ja: "ウルトラポンプ",
			},
			effect: {
				ja: "手から2枚のカードを捨てることができます。そうした場合、この攻撃は60ダメージに20回のダメージを与え、対戦相手のベンチ付きポケモンの1人に20ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
		},
	],

	retreat: 3,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
