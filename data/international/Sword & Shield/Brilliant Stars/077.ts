import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [413],
	set: Set,

	name: {
		'en-us': "Wormadam",
		'fr-fr': "Cheniselle",
		'es-es': "Wormadam",
		'it-it': "Wormadam",
		'pt-br': "Wormadam",
		'de-de': "Burmadame"
	},

	illustrator: "Lee HyunJung",
	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Burmy",
		'fr-fr': "Cheniti",
		'es-es': "Burmy",
		'it-it': "Burmy",
		'pt-br': "Burmy",
		'de-de': "Burmy"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Matron's Anger",
			'fr-fr': "Dame Colérique",
			'es-es': "Enfado de Dama",
			'it-it': "Ira della Dama",
			'pt-br': "Fúria Matriarcal",
			'de-de': "Zorn der Dame"
		},

		effect: {
			'en-us': "This attack does 10 more damage for each Pokémon in your discard pile.",
			'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque Pokémon dans votre pile de défausse.",
			'es-es': "Este ataque hace 10 puntos de daño más por cada Pokémon en tu pila de descartes.",
			'it-it': "Questo attacco infligge 10 danni in più per ogni Pokémon nella tua pila degli scarti.",
			'pt-br': "Este ataque causa 10 pontos de dano a mais para cada Pokémon na sua pilha de descarte.",
			'de-de': "Diese Attacke fügt für jedes Pokémon in deinem Ablagestapel 10 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'en-us': "Bind Down",
			'fr-fr': "Astreinte",
			'es-es': "Amarrar",
			'it-it': "Legafermo",
			'pt-br': "Aprisionamento",
			'de-de': "Anbinden"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "When Burmy evolved, its cloak became a part of this Pokémon's body. The cloak is never shed.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608527,
				tcgplayer: 263793
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608527,
				tcgplayer: 263793
			}
		},
	],
}

export default card
