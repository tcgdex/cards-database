import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Pinsir",
		fr: "Scarabrute",
		es: "Pinsir",
		it: "Pinsir",
		de: "Pinsir",
		'pt-br': "Pinsir",
		ko: "쁘사이저"
	},

	illustrator: "Satoshi Shirai",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		en: "These Pokémon judge one another based on pincers. Thicker, more impressive pincers make for more popularity with the opposite gender.",
		fr: "Ses cornes déterminent son rang au sein\ndu groupe. Plus elles sont imposantes, plus\nles membres du sexe opposé l'apprécient.",
		es: "Los Pinsir se juzgan entre ellos por la robustez\nde la cornamenta. Cuanto más imponente sea,\nmás agradará a sus congéneres del sexo opuesto.",
		it: "I Pinsir si giudicano a vicenda in base alle corna.\nQuelli con corna grosse e imponenti hanno\npiù successo con gli esemplari dell'altro sesso.",
		de: "Der Status eines Pinsirs hängt von seinen Hörnern\nab. Je dicker und stattlicher diese sind, desto\nbeliebter ist es beim anderen Geschlecht.",
		'pt-br': "Estes Pokémon se julgam de acordo com\nsuas pinças. As pinças mais grossas e notáveis\nsão mais populares com o gênero oposto.",
		ko: "뿔로 서로의 등급을 매긴다.\n굵고 훌륭한 뿔을 가진\n쁘사이저일수록 이성에게 인기다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Guillotine Rush",
			fr: "Charge Guillotine",
			es: "Guilloatina",
			it: "Ghigliottina Impietosa",
			de: "Guillotinenrage",
			'pt-br': "Guilhotina Descontrolada",
			ko: "자르기러시"
		},

		damage: "50+",
		cost: ["Grass", "Colorless", "Colorless"],

		effect: {
			en: "Flip a coin until you get tails. This attack does 40 more damage for each heads.",
			fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Cette attaque inflige 40 dégâts supplémentaires pour chaque côté face.",
			es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 40 puntos de daño más por cada cara.",
			it: "Lancia una moneta finché non esce croce. Questo attacco infligge 40 danni in più ogni volta che esce testa.",
			de: "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 40 Schadenspunkte mehr pro Kopf zu.",
			'pt-br': "Jogue uma moeda até sair coroa. Este ataque causa 40 pontos de dano a mais para cada cara.",
			ko: "뒷면이 나올 때까지 동전을 던져서 앞면이 나온 수 × 40데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card