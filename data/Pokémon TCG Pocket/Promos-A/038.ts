import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Misdreavus",
		fr: "Feuforêve",
		es: "Misdreavus",
		it: "Misdreavus",
		de: "Traunfugil",
		'pt-br': "Misdreavus",
		ko: "무우마"
	},

	illustrator: "Miki Tanaka",
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	description: {
		en: "This Pokémon startles people in the middle of the night. It gathers fear as its energy.",
		fr: "Il fait peur aux gens en pleine nuit et se nourrit de leur frayeur.",
		es: "Sorprende a la gente en mitad de la noche\ny acumula su miedo como energía.",
		it: "Un Pokémon che terrorizza la gente nel cuore della\nnotte. Assorbe la paura per usarla come energia.",
		de: "Ein Pokémon, das Menschen mitten in der Nacht\nerschreckt. Es sammelt die Angst als seine Energie.",
		'pt-br': "Este Pokémon assusta pessoas no meio da noite.\nAcumula o medo para usar como energia.",
		ko: "한밤중에 사람을 놀라게 하고\n무서워하는 마음을 모아 자신의\n에너지로 만드는 포켓몬이다."
	},

	attacks: [{
		name: {
			en: "Confuse Ray",
			fr: "Onde Folie",
			es: "Rayo Confuso",
			it: "Stordiraggio",
			de: "Konfusstrahl",
			'pt-br': "Raio da Confusão",
			ko: "이상한빛"
		},

		cost: ["Psychic"],

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			
			ko: "상대의 배틀 포켓몬을 혼란으로 만든다.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["vol4"]
}

export default card
