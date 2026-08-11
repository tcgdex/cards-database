import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [262],
	set: Set,

	name: {
		'en-us': "Mightyena",
		'fr-fr': "Grahyèna",
		'es-es': "Mightyena",
		'it-it': "Mightyena",
		'pt-br': "Mightyena",
		'de-de': "Magnayen"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Poochyena",
		'fr-fr': "Medhyèna",
		'es-es': "Poochyena",
		'it-it': "Poochyena",
		'pt-br': "Poochyena",
		'de-de': "Fiffyen"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Hunting Pack",
			'fr-fr': "Meute Chasseuse",
			'es-es': "Manada a la Caza",
			'it-it': "Branco da Caccia",
			'pt-br': "Caça em Bando",
			'de-de': "Jagdrudel"
		},

		effect: {
			'en-us': "If Mightyena is on your Bench, this attack does 90 more damage.",
			'fr-fr': "Si Grahyèna est sur votre Banc, cette attaque inflige 90 dégâts supplémentaires.",
			'es-es': "Si Mightyena está en tu Banca, este ataque hace 90 puntos de daño más.",
			'it-it': "Se Mightyena è nella tua panchina, questo attacco infligge 90 danni in più.",
			'pt-br': "Se Mightyena estiver no seu Banco, este ataque causará 90 pontos de dano a mais.",
			'de-de': "Wenn sich Magnayen auf deiner Bank befindet, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Corner",
			'fr-fr': "Coinçage",
			'es-es': "Arrinconar",
			'it-it': "Trappola",
			'pt-br': "Quina",
			'de-de': "Bedrängen"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "Once it's caught the scent of faraway prey, the leader gives a signal, and the whole pack moves out.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769288,
				tcgplayer: 550158
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769288,
				tcgplayer: 550158
			}
		},
	],

	illustrator: "kawayoo",

}

export default card