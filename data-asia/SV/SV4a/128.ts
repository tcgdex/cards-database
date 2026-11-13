import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "タギングル"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "None",
	category: "Pokemon",
	dexId: [945],
	hp: 90,
	types: ["Darkness"],

	evolveFrom: {
		ja: "シルシュルー"
	},

	description: {
		ja: "エサによって 色が 変化する 毒の 唾液を 指に 塗して 森の 木々に 模様を 描く。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "どくえき"
		},

		effect: {
			ja: "相手のバトルポケモンをどくにする。"
		},

		cost: ["Darkness"]
	}, {
		name: {
			ja: "カラフルグラフィティ"
		},

		effect: {
			ja: "自分の手札から基本エネルギーを好きなだけトラッシュし、トラッシュした基本エネルギーのタイプの数×40ダメージ。"
		},

		damage: "40×",
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 746510,
				tcgplayer: 567529,
				cardtrader: 269726,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577368,
			},
		},
	]
}

export default card
