import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "ミミロル"
	},
	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	description: {
		ja: "まるめた耳を伸ばす勢いで攻撃する技はトレーニングをするほど威力が増していく。"
	},
	stage: "Basic",
	attacks: [{
		name: {
			ja: "あまえる"
		},
		effect: {
			ja: "次の相手の番、このワザを受けたポケモンが使うワザのダメージは「-20」される。"
		},
		cost: ["Colorless"]
	}, {
		name: {
			ja: "スキップ"
		},
		damage: 10,
		cost: ["Colorless"]
	}],
	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],
	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [427]
}

export default card
