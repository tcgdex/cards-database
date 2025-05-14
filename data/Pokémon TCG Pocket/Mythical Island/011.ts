import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Rapidash",
		fr: "Galopa",
		es: "Rapidash",
		it: "Rapidash",
		de: "Gallopa",
		'pt-br': "Rapidash",
		ko: "날쌩마"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],

	evolveFrom: {
		en: "Ponyta"
	},

	description: {
		en: "This Pokémon can be seen galloping through fields at speeds of up to 150 mph, its fiery mane fluttering in the wind.",
		fr: "Ce Pokémon traverse les plaines à plus de 240 km/h,\nsa crinière flamboyante flottant au vent.",
		es: "Su ardiente crin ondea al viento mientras atraviesa\nextensas praderas a una velocidad de 240 km/h.",
		it: "Sfreccia nelle praterie a una velocità di 240 km/h,\nfacendo sventolare la sua criniera ardente.",
		de: "Die lodernde Mähne dieses Pokémon flattert im\nWind, wenn es mit einer Geschwindigkeit von\n240 km/h über Felder und Wiesen galoppiert.",
		'pt-br': "Este Pokémon pode ser encontrado galopando\nnas pradarias, com sua crina de fogo ao vento,\na velocidades de até 240 km/h.",
		ko: "불타는 갈기를 휘날리며\n시속 240km의 속도로\n넓은 초원을 달려나간다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Rising Lunge",
			fr: "Botte Secrète",
			es: "Embestida Ascendente",
			it: "Elevazione",
			de: "Aufwärtsstoß",
			'pt-br': "Investida Ascendente",
			ko: "밀어올리기"
		},

		damage: "40+",
		cost: ["Fire", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, this attack does 60 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 60 dégâts de plus.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 60 puntos de daño más.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 60 danni in più.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 60 Schadenspunkte mehr zu.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 60 pontos de dano a mais.",
			ko: "동전을 1번 던져서 앞면이 나오면 60데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond"
}

export default card
