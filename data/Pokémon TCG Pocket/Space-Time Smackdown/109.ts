import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Darkrai",
		fr: "Darkrai",
		es: "Darkrai",
		it: "Darkrai",
		de: "Darkrai",
		'pt-br': "Darkrai",
		ko: "다크라이"
	},

	illustrator: "Masako Tomii",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	description: {
		en: "It chases people and Pokémon from its territory by causing them to experience deep, nightmarish slumbers.",
		fr: "Il endort humains et Pokémon, et leur fait avoir\ndes cauchemars pour les chasser de son territoire.",
		es: "Defiende su territorio de personas y Pokémon\nhaciéndoles dormir y provocándoles pesadillas.",
		it: "Respinge umani e Pokémon dal suo\nterritorio inducendoli a un sonno\nprofondo e provocando incubi.",
		de: "Es vertreibt Eindringlinge aus seinem Revier, indem\nes sie in Schlaf versetzt und mit Alpträumen quält.",
		'pt-br': "Causa um sono profundo e cheio de pesadelos\nem pessoas e Pokémon para afugentá-los\nde seu território.",
		ko: "깊은 잠으로 끌어들이는 힘으로\n사람과 포켓몬에게 악몽을 꾸게 해\n자신의 영역에서 쫓아낸다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Dark Void",
			fr: "Trou Noir",
			es: "Brecha Negra",
			it: "Vuototetro",
			de: "Schlummerort",
			'pt-br': "Vácuo da Escuridão",
			ko: "다크홀"
		},

		damage: 60,
		cost: ["Darkness", "Darkness", "Colorless"],

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt schläft.",
			
			ko: "상대의 배틀 포켓몬을 잠듦으로 만든다.",
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
