import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Kingler",
		fr: "Krabboss",
		es: "Kingler",
		it: "Kingler",
		de: "Kingler",
		'pt-br': "Kingler",
		ko: "킹크랩"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Stage1",

	evolveFrom: {
		en: "Krabby",
		fr: "Krabby",
		es: "Krabby",
		it: "Krabby",
		pt: "Krabby",
		de: "Krabby"
	},

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "KO Crab",
			fr: "Crabe Fatal",
			es: "Pinza Letal",
			it: "Chela Micidiale",
			de: "K.O.-Krabbe",
			'pt-br': "Nocaute Caranguejo",
			ko: "필살크랩"
		},

		effect: {
			en: "Flip 2 coins. If both of them are heads, this attack does 80 more damage.",
			fr: "Lancez 2 pièces. Si toutes sont côté face, cette attaque inflige 80 dégâts de plus.",
			es: "Lanza 2 monedas. Si en las dos sale cara, este ataque hace 80 puntos de daño más.",
			it: "Lancia 2 volte una moneta. Se esce testa entrambe le volte, questo attacco infligge 80 danni in più.",
			de: "Wirf 2 Münzen. Zeigen beide Münzen Kopf, fügt diese Attacke 80 Schadenspunkte mehr zu.",
			'pt-br': "Jogue 2 moedas. Se as duas saírem cara, este ataque causará 80 pontos de dano a mais.",
			ko: "동전을 2번 던져서 모두 앞면이 나오면 80데미지를 추가한다."
		},

		damage: "80+"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3,
	rarity: "Two Diamond",

	description: {
		en: "Its large and hard pincer has 10,000-horsepower strength. However, being so big, it is unwieldy to move.",
		fr: "Sa grosse pince est dotée d'une puissance\nincommensurable. Sa taille imposante\nla rend toutefois difficile à utiliser.",
		es: "La pinza tan grande que tiene posee\nuna fuerza de 10 000 CV, pero le\ncuesta moverla por su gran tamaño.",
		it: "La chela più grande sprigiona una\npotenza di 10.000 CV. Le dimensioni\ngli rendono difficili gli spostamenti.",
		de: "Die Kraft seiner großen und harten Schere\nentspricht 10 000 PS. Durch die Größe ist sie\naber auch äußerst unhandlich und sperrig.",
		'pt-br': "Sua pinça grande e dura possui a força de\n10.000 cavalos-vapor. No entanto, por ser\ntão grande, movê-la é um incômodo.",
		ko: "단단한 집게는 1만 마력의\n파워를 지녔지만\n너무 커서 움직임이 둔하다."
	},

	boosters: ["mewtwo"]
}

export default card
