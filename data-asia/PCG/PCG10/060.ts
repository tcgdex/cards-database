import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "絶対的なex",
	},


	category: "Pokemon",
	dexId: [359],
	hp: 100,
	types: ["Darkness"],
	stage: "Basic",

	abilities: [
		{
			name: {
				ja: "呪われた目",
			},
			effect: {
				ja: "ターン中に、ベンチに手から絶対的なEXを置くと、相手のポケモンの1つから彼または彼女のポカモンの別のダメージカウンターを移動できます。",
			},
		}],

	attacks: [
		{
			cost: ["Darkness", "Colorless"],
			name: {
				ja: "サイキックパルス",
			},
			effect: {
				ja: "ダメージがカウンターを伴う相手のベンチ付きポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 30,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};
