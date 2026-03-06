import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Donphan",
		fr: "Donphan",
		es: "Donphan",
		it: "Donphan",
		de: "Donphan",
		'pt-br': "Donphan",
		ko: "코리갑"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [232],
	hp: 120,
	types: ["Fighting"],

	evolveFrom: {
		en: "Phanpy"
	},

	description: {
		en: "Donphan is covered in tough hide, so even being hit by a car won't faze this Pokémon. However, it is extremely susceptible to rain.",
		fr: "Sa peau est si dure qu'une collision avec\nune voiture le laisserait indifférent. En revanche,\nil est extrêmement sensible à la pluie.",
		es: "Su dura piel podría resistir el choque contra un coche sin\nsufrir un rasguño. La lluvia, sin embargo, es su punto débil.",
		it: "La sua pelle è così dura che anche se sbatte\ncontro una macchina non si fa un graffio.\nLa pioggia è il suo punto debole.",
		de: "Seine Haut ist so hart, dass ihm nicht einmal der\nZusammenprall mit einem Auto etwas anhaben kann.\nRegen setzt ihm jedoch stark zu.",
		'pt-br': "Donphan é recoberto por uma couraça resistente\ne não se abala nem quando é atingido por um carro.\nNo entanto, é extremamente vulnerável a chuva.",
		ko: "튼튼한 피부로 둘러싸여 있기 때문에\n차에 부딪혀도 끄떡없다.\n그러나 비에는 매우 약하다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Rolling Spin",
			fr: "Tournis Roulis",
			es: "Giro Ondulante",
			it: "Ruzzolata",
			de: "Drehwalze",
			'pt-br': "Giro Rolante",
			ko: "롤링스핀"
		},

		damage: 60,
		cost: ["Fighting", "Fighting", "Fighting"],

		effect: {
			en: "During your next turn, this Pokémon's Rolling Spin attack does +60 damage.",
			fr: "Pendant votre prochain tour, l'attaque Tournis Roulis de ce Pokémon inflige + 60 dégâts.",
			es: "Durante tu próximo turno, el ataque Giro Ondulante de este Pokémon hace Rolling Spin+60 puntos[/Ctrl:NoBreak] de daño.",
			it: "Durante il tuo prossimo turno, l'attacco Ruzzolata di questo Pokémon infligge +60 danni.",
			de: "Während deines nächsten Zuges fügt die Attacke Drehwalze von diesem Pokémon + 60 Schadenspunkte zu.",
			'pt-br': "Durante o seu próximo turno, o ataque Giro Rolante deste Pokémon causará + 60 pontos de dano.",
			ko: "자신의 다음 차례에 이 포켓몬의 「롤링스핀」의 데미지를 +60한다."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3
}

export default card
