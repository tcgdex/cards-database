import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Wigglytuff ex",
		'fr-fr': "Grodoudou-ex",
		'es-es': "Wigglytuff ex",
		'it-it': "Wigglytuff-ex",
		'de-de': "Knuddeluff-ex",
		'pt-br': "Wigglytuff ex",
		'ko-kr': "푸크린 ex"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "Two Shiny",
	category: "Pokemon",

	dexId: [40],
	hp: 140,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Jigglypuff"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Sleepy Song",
			'fr-fr': "Chanson Berçante",
			'es-es': "Canción Adormecedora",
			'it-it': "Cantilena",
			'de-de': "Schlummerlied",
			'pt-br': "Canção Sonolenta",
			'ko-kr': "슬리피송"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"],

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
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["solgaleo"]
}

export default card