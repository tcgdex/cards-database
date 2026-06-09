import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "ダダリン"
	},
	illustrator: "Haru Akasaka",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	description: {
		ja: "海に 錨を 下して 獲物を 待ち伏せ。 大物の ホエルオーを 捕まえて 生気を 吸い取る。"
	},
	stage: "Basic",
	attacks: [{
		name: {
			ja: "グラウンドパワー"
		},
		damage: "30+",
		effect: {
			ja: "場に自分のスタジアムが出ているなら、50ダメージ追加。"
		},
		cost: ["Grass", "Colorless"]
	}],
	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],
	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [781]
}

export default card
