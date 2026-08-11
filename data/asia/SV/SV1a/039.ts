import { Card } from "models/database/card"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ヤレユータン",
		'zh-tw': "智揮猩",
		'th-th': "ยาเรยูตัน",
		'id-id': "Oranguru"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [765],
	hp: 120,
	types: ["Psychic"],

	description: {
		'ja-jp': "森の ポケモンたちに つぎつぎと 指示を だす 姿から 昔は 人間だと 思われていた。",
		'zh-tw': "牠對著森林的寶可夢們接二連三下達指示的樣子， 讓牠以前被認為是人類。",
		'th-th': "เคยถูกมองว่าเป็นมนุษย์ เพราะท่าทีที่คอยออกคำสั่งแก่โปเกมอนในป่าเรื่อย ๆ",
		'id-id': "Karena sosoknya yang selalu memberikan perintah kepada para Pokémon yang ada di hutan, Oranguru disangka sebagai manusia pada zaman dahulu."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'ja-jp': "さくしのぐんばい",
			'zh-tw': "策士配兵",
			'th-th': "พัดนำทัพของจอมวางแผน",
			'id-id': "Kipas Perang Ahli Strategi"
		},

		damage: 30,

		effect: {
			'ja-jp': "相手のバトルポケモンが持っているワザを1つ選ぶ。次の相手の番、このワザを受けたポケモンは、選ばれたワザが使えない。",
			'zh-tw': "選擇1個對手的戰鬥寶可夢持有的招式。在下個對手的回合，受到這個招式的寶可夢無法使用被選擇的招式。",
			'th-th': "เลือกท่าต่อสู้ที่โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามมี 1 ท่า เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ จะใช้ท่าต่อสู้ที่ถูกเลือกไว้ไม่ได้",
			'id-id': "Pilih 1 serangan yang dimiliki Pokémon Bertarung lawan. Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat menggunakan serangan yang telah dipilih."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'ja-jp': "ちょうねんりき",
			'zh-tw': "超念力",
			'th-th': "ซูเปอร์โทรจิต",
			'id-id': "Psikokinesis Super"
		},

		damage: 80
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 701093,
				tcgplayer: 568162,
			},
		},
	],

	retreat: 2,
	regulationMark: "G",
}

export default card