import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Wigglytuff ex",
		fr: "Grodoudou-ex",
		es: "Wigglytuff ex",
		it: "Wigglytuff-ex",
		de: "Knuddeluff-ex",
		'pt-br': "Wigglytuff ex",
		ko: "푸크린 ex"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "Two Shiny",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	evolveFrom: {
		en: "Jigglypuff"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Sleepy Song",
			fr: "Chanson Berçante",
			es: "Canción Adormecedora",
			it: "Cantilena",
			de: "Schlummerlied",
			'pt-br': "Canção Sonolenta",
			ko: "슬리피송"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"],

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
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card