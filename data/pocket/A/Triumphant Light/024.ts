import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Phione",
		fr: "Phione",
		es: "Phione",
		it: "Phione",
		de: "Phione",
		'pt-br': "Phione",
		ko: "피오네"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [489],
	hp: 60,
	types: ["Water"],

	description: {
		en: "When the water warms, they inflate the flotation sac on their heads and drift languidly on the sea in packs.",
		fr: "Il gonfle la bouée de sa tête et se laisse flotter\nà la surface quand la mer se réchauffe.",
		es: "Si sube la temperatura del mar, infla el flotador\nde su cabeza y flota en grupo en la superficie.",
		it: "Quando la temperatura del mare si alza, gonfia\nil galleggiante che ha in testa e fluttua in gruppo.",
		de: "Steigt die Meerestemperatur, bläst es seinen\nSchwimmbeutel auf und treibt in Schwärmen\nauf dem Wasser.",
		'pt-br': "Em águas mornas, inflam as boias de suas cabeças\ne, em bando, flutuam lentamente no mar.",
		ko: "바다 온도가 높아지면\n머리의 부낭을 부풀려서\n해수면을 집단으로 떠돈다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Water Pulse",
			fr: "Vibraqua",
			es: "Hidropulso",
			it: "Idropulsar",
			de: "Aquawelle",
			'pt-br': "Pulso d'Água",
			ko: "물의파동"
		},

		damage: 40,
		cost: ["Water", "Water"],

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
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card
