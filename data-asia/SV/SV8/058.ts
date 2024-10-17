import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "イエッサン"
	},

	illustrator: "Sekio",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [876],
	hp: 100,
	types: ["Psychic"],

	description: {
		ja: "つねに トレーナーの そばに いる。 サイコパワーで 行動を 予知して 身のまわりの 世話をする。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "せわやきヒール"
		},

		effect: {
			ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。自分のバトルポケモンのHPを「30」回復し、特殊状態も1つ回復する。"
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "ちょうねんりき"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1
}

export default card