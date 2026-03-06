import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

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

	illustrator: "Shibuzoh.",
	category: "Pokemon",

	dexId: [40],
	hp: 140,
	types: ["Colorless"],
	stage: "Stage1",

	evolveFrom: {
		en: "Jigglypuff"
	},

	suffix: "EX",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Sleepy Song",
			fr: "Chanson Berçante",
			es: "Canción Adormecedora",
			it: "Cantilena",
			de: "Schlummerlied",
			'pt-br': "Canção Sonolenta",
			ko: "슬리피송"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt schläft.",
			
			ko: "상대의 배틀 포켓몬을 잠듦으로 만든다.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido."
		},

		damage: "80"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	rarity: "None",
	boosters: ["pikachu"]
}

export default card
