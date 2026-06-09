import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "オコリザル",
		'zh-tw': "火爆猴",
		th: "โอโคริซารุ",
		id: "Primeape"
	},

	illustrator: "Mina Nakai",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [57],
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "だれかの 視線を 感じただけで 猛烈に 怒りだす。 そして 目が合った ものを 追いかけるのだ。",
		'zh-tw': "光是感覺到他方的視線都會暴怒起來，然後去追 和牠對到眼的傢伙。",
		th: "แค่รู้สึกว่ามีใครมองก็โกรธเคืองรุนแรง แล้วไล่ล่าสิ่งที่สบตาด้วย",
		id: "Primeape akan mengamuk besar ketika merasakan ada yang melihatnya. Lalu, ia akan mengejar siapa pun yang bertemu mata dengannya."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "がなりたてる",
			'zh-tw': "狂嗥",
			th: "เอ็ดตะโร",
			id: "Berteriak-teriak"
		},

		damage: 40,

		effect: {
			ja: "このポケモンをこんらんにする。",
			'zh-tw': "將這隻寶可夢【混亂】。",
			th: "ทำให้โปเกมอนนี้เป็นสภาวะ[สับสน]",
			id: "Ubah kondisi Pokémon ini menjadi Pusing."
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			ja: "げきこうスマッシュ",
			'zh-tw': "盛怒粉碎",
			th: "เดือดจัดซัดแหลก",
			id: "Smes Geram"
		},

		damage: 150,

		effect: {
			ja: "このポケモンがこんらんでないなら、このワザは失敗。",
			'zh-tw': "若這隻寶可夢沒有【混亂】，則這個招式失敗。",
			th: "ถ้าโปเกมอนนี้ไม่เป็นสภาวะ[สับสน] ท่าต่อสู้นี้จะล้มเหลว",
			id: "Jika Pokémon ini tidak mengalami kondisi Pusing, serangan ini gagal."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719499
	}
}

export default card