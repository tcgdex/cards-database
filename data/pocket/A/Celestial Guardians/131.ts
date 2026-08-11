import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Fletchling",
		'fr-fr': "Passerouge",
		'es-es': "Fletchling",
		'it-it': "Fletchling",
		'de-de': "Dartiri",
		'pt-br': "Fletchling",
		'ko-kr': "화살꼬빈"
	},

	illustrator: "5ban Graphics",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [661],
	hp: 50,
	types: ["Colorless"],

	description: {
		'en-us': "This Pokémon is normally calm, but once it enters battle, its hormonal balance changes and it becomes aggressive.",
		'fr-fr': "Il a un tempérament généralement calme,\nmais son équilibre hormonal se modifie\nlors des combats et le rend plus agressif.",
		'es-es': "Por lo general se muestra calmado, pero, al entrar en combate,\nsu equilibrio hormonal se altera y se vuelve agresivo.",
		'it-it': "Di solito ha un'indole molto tranquilla, ma quando lotta\nil suo equilibrio ormonale cambia, rendendolo aggressivo.",
		'de-de': "Normalerweise sind Dartiri friedfertig, doch wenn\nsie kämpfen, ändert sich ihr Hormonhaushalt und\nsie werden angriffslustig.",
		'pt-br': "Este Pokémon é geralmente calmo, mas quando entra\nem batalha, seu equilíbrio hormonal muda, fazendo\ncom que se torne agressivo.",
		'ko-kr': "평소에는 온순하지만\n싸움에 들어가면 호르몬의\n균형이 바뀌어 공격적이게 된다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Flap",
			'fr-fr': "Battement",
			'es-es': "Aleteo",
			'it-it': "Alabattito",
			'de-de': "Flattern",
			'pt-br': "Asa",
			'ko-kr': "홰치기"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["solgaleo"]
}

export default card