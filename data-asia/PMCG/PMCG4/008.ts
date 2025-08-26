import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "ダークアーボック",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [24],
	hp: 60,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Grass", "Grass"],
			name: {
				ja: "見詰める",
			},
			effect: {
				ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに10ダメージを与えます。この攻撃に衰弱と抵抗を適用しないでください。 （衰弱と抵抗を適用した後に発生する他の効果はまだ起こります。）そのポケモンにポケモンの力がある場合、そのパワーは相手の次のターンの終わりまで機能しなくなります。",
			},
		},
		{
			cost: ["Grass", "Grass", "Grass"],
			name: {
				ja: "毒蒸気",
			},
			effect: {
				ja: "防御ポケモンは現在中毒になっています。この攻撃は、相手のベンチポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 10,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
