import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
	set: Set,
	name: {
		ja: "Kyogre Ex",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [382],
	hp: 100,
	types: ["Water"],
	stage: "Basic",

	abilities: [
		{
			name: {
				ja: "古代のマーク",
			},
			effect: {
				ja: "Kyogre Exがあなたのアクティブなポカモンである限り、各プレイヤーのGroudon ExとRayquaza Exは攻撃できません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "水の矢",
			},
			effect: {
				ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
		},
		{
			cost: ["Water", "Water", "Colorless"],
			name: {
				ja: "超潮の波",
			},
			effect: {
				ja: "相手に手を見せることができます。そうすれば、この攻撃は50のダメージに加えて、手のエネルギーカードごとに10ダメージを10回します。ダメージを与えた後、エネルギーカードをデッキに戻します。",
			},
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
