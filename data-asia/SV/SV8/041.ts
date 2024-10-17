import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "カプ・コケコ"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [785],
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "守り神と 呼ばれるが 気分を 害する 人間や ポケモンには 襲い掛かる 荒ぶる神 でもある。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "かみなりをよぶ"
		},

		effect: {
			ja: "自分の山札からポケモンを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。"
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			ja: "サイドカウンター"
		},

		damage: "90＋",

		effect: {
			ja: "自分のサイドの残り枚数が、相手のサイドの残り枚数より多いなら、90ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card