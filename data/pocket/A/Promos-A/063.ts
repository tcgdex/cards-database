import { Card } from "models/database/card"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Rayquaza",
		'fr-fr': "Rayquaza",
		'es-es': "Rayquaza",
		'it-it': "Rayquaza",
		'de-de': "Rayquaza",
		'pt-br': "Rayquaza",
		'ko-kr': "레쿠쟈"
	},

	illustrator: "Yoshinobu Saito",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [384],
	hp: 100,
	types: ["Colorless"],

	description: {
		'en-us': "It lives in the ozone layer far above the clouds and\ncannot be seen from the ground.",
		'fr-fr': "Il vit dans la couche d'ozone, au-dessus\ndes nuages. Il est invisible depuis le sol.",
		'es-es': "Vive en la capa de ozono sobre las nubes\ny no puede ser visto desde el suelo.",
		'it-it': "Vive nello strato di ozono oltre le nuvole\ne non può essere avvistato da terra.",
		'de-de': "Es lebt in der Ozonschicht hoch über den Wolken\nund kann vom Boden aus nicht gesehen werden.",
		'pt-br': "Ele vive na camada de ozônio muito acima das nuvens\ne não pode ser visto do solo.",
		'ko-kr': "구름보다 아득히 먼 위의 오존층에\n서식하고 있기 때문에 지상에서\n모습을 볼 수 없다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Spiral Rush",
			'fr-fr': "Course en Spirale",
			'es-es': "Avalancha Espiral",
			'it-it': "Raffica a Spirale",
			'de-de': "Spiralsturmangriff",
			'pt-br': "Arremetida Espiral",
			'ko-kr': "스파이럴러시"
		},

		damage: 70,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		effect: {
			'en-us': "Flip a coin until you get tails. This attack does 30 more damage for each heads.",
			'fr-fr': "Lancez une pièce jusqu'à ce que vous obteniez pile. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
			'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 30 puntos de daño más por cada cara.",
			'it-it': "Lancia una moneta finché non esce croce. Questo attacco infligge 30 danni in più ogni volta che esce testa.",
			'de-de': "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 30 Schadenspunkte mehr pro Kopf zu.",
			'pt-br': "Jogue uma moeda até sair coroa. Este ataque causa 30 pontos de dano a mais para cada cara.",
			'ko-kr': "뒷면이 나올 때까지 동전을 던져서 앞면이 나온 수 × 30데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["vol7"]
}

export default card