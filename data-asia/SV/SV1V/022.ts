import { Card } from "../../../interfaces"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		ja: "ブロスター",
		'zh-tw': "鋼炮臂蝦",
		th: "บลอสเตอร์",
		id: "Clawitzer"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Common",
	category: "Pokemon",
	dexId: [693],
	hp: 120,
	types: ["Water"],

	description: {
		ja: "ハサミから 撃ちだす 海水の 砲弾の 威力は タンカーの 船体を 貫くほどだ。",
		'zh-tw': "從牠的鉗子發射出的海水砲彈，威力大到 足以貫穿油輪的船體。",
		th: "กระสุนน้ำทะเลที่ยิงมาจากก้ามมีอานุภาพขนาดยิงทะลุเรือบรรทุกน้ำมันได้",
		id: "Kekuatan bola meriam air laut yang ditembakkan dari capit Clawitzer dapat menembus lambung kapal tangki."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			ja: "みずでっぽう",
			'zh-tw': "水槍",
			th: "ปืนฉีดน้ำ",
			id: "Pistol Air"
		},

		damage: 50
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			ja: "アクアキャノン",
			'zh-tw': "水流加農炮",
			th: "อควาแคนนอน",
			id: "Aqua Cannon"
		},

		damage: 160,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้",
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 693097
	}
}

export default card