import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Magcargo",
		fr: "Volcaropod",
		es: "Magcargo",
		it: "Magcargo",
		de: "Magcargo",
		'pt-br': "Magcargo",
		ko: "마그카르고"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	evolveFrom: {
		en: "Slugma"
	},

	description: {
		en: "Its brittle shell occasionally spouts intense flames that circulate throughout its body.",
		fr: "Sa coquille, très fragile, projette régulièrement\ndes flammes qui circulent dans son corps.",
		es: "En ocasiones, su resbaladiza concha lanza\nintensas llamaradas que recorren todo su cuerpo.",
		it: "A volte intense fiamme partono dal fragile\nguscio e avvolgono tutto il suo corpo.",
		de: "Aus seinem porösen Schneckengehäuse sprudeln\nFeuerfontänen, die seinen Körper durchfluten.",
		'pt-br': "Sua frágil concha ocasionalmente lança chamas intensas\nque circulam em volta do seu corpo.",
		ko: "등껍질은 깨어지기 쉬우며\n가끔 체내를 순환하고 있는\n고열의 불꽃을 뿜어낸다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Searing Flame",
			fr: "Flammes Calcinantes",
			es: "Llama Abrasadora",
			it: "Fiamme Ustionanti",
			de: "Sengende Flammen",
			'pt-br': "Chama Cauterizante",
			ko: "태워그을리기"
		},

		damage: 30,
		cost: ["Fire", "Colorless"],

		effect: {
			en: "Your opponent's Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Burned.",
			es: "El Pokémon Activo de tu rival pasa a estar Burned.",
			it: "Il Pokémon attivo del tuo avversario viene Burned.",
			de: "Das Aktive Pokémon deines Gegners [Text:SpecialCondition v0=\"ist jetzt {}\" v1=\"{} jetzt\" ].",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Burned.",
			ko: "상대의 배틀 포켓몬을 Burned[Gr:Patchim v=\"으로/로\" ] 만든다."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 3
}

export default card
