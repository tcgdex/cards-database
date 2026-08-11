import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Darkrai",
		'fr-fr': "Darkrai",
		'es-es': "Darkrai",
		'it-it': "Darkrai",
		'de-de': "Darkrai",
		'pt-br': "Darkrai",
		'ko-kr': "다크라이"
	},

	illustrator: "Masako Tomii",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [491],
	hp: 110,
	types: ["Darkness"],

	description: {
		'en-us': "It chases people and Pokémon from its territory by causing them to experience deep, nightmarish slumbers.",
		'fr-fr': "Il endort humains et Pokémon, et leur fait avoir\ndes cauchemars pour les chasser de son territoire.",
		'es-es': "Defiende su territorio de personas y Pokémon\nhaciéndoles dormir y provocándoles pesadillas.",
		'it-it': "Respinge umani e Pokémon dal suo\nterritorio inducendoli a un sonno\nprofondo e provocando incubi.",
		'de-de': "Es vertreibt Eindringlinge aus seinem Revier, indem\nes sie in Schlaf versetzt und mit Alpträumen quält.",
		'pt-br': "Causa um sono profundo e cheio de pesadelos\nem pessoas e Pokémon para afugentá-los\nde seu território.",
		'ko-kr': "깊은 잠으로 끌어들이는 힘으로\n사람과 포켓몬에게 악몽을 꾸게 해\n자신의 영역에서 쫓아낸다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Dark Void",
			'fr-fr': "Trou Noir",
			'es-es': "Brecha Negra",
			'it-it': "Vuototetro",
			'de-de': "Schlummerort",
			'pt-br': "Vácuo da Escuridão",
			'ko-kr': "다크홀"
		},

		damage: 60,
		cost: ["Darkness", "Darkness", "Colorless"],

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Asleep.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt schläft.",
			
			'ko-kr': "상대의 배틀 포켓몬을 잠듦으로 만든다.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["dialga"]
}

export default card
