import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		ja: "タルップル"
	},

	illustrator: "MINAMINAMI Take",
	category: "Pokemon",
	dexId: [842],
	hp: 90,
	types: ["Dragon"],

	description: {
		ja: "背中の 甘い蜜を 舐め取りに やって来る グルトンに ベトベトの 蜜を 吐きかけ 退ける。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "スイートメルト"
		},

		damage: 50,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、ワザが使えない。"
		}
	}, {
		cost: ["Grass", "Fire"],

		name: {
			ja: "ワイルドタックル"
		},

		damage: 130,

		effect: {
			ja: "このポケモンにも20ダメージ。"
		}
	}],

	retreat: 3,
	rarity: "None",

	thirdParty: {
		cardmarket: 787607
	}
}

export default card