import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [262],
	set: Set,

	name: {
		en: "Mightyena",
		fr: "Grahyèna",
		es: "Mightyena",
		it: "Mightyena",
		pt: "Mightyena",
		de: "Magnayen"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Hunting Pack",
			fr: "Meute Chasseuse",
			es: "Manada a la Caza",
			it: "Branco da Caccia",
			pt: "Caça em Bando",
			de: "Jagdrudel"
		},

		effect: {
			en: "If Mightyena is on your Bench, this attack does 90 more damage.",
			fr: "Si Grahyèna est sur votre Banc, cette attaque inflige 90 dégâts supplémentaires.",
			es: "Si Mightyena está en tu Banca, este ataque hace 90 puntos de daño más.",
			it: "Se Mightyena è nella tua panchina, questo attacco infligge 90 danni in più.",
			pt: "Se Mightyena estiver no seu Banco, este ataque causará 90 pontos de dano a mais.",
			de: "Wenn sich Magnayen auf deiner Bank befindet, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Corner",
			fr: "Coinçage",
			es: "Arrinconar",
			it: "Trappola",
			pt: "Quina",
			de: "Bedrängen"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "kawayoo",

	thirdParty: {
		cardmarket: 769288
	}
}

export default card