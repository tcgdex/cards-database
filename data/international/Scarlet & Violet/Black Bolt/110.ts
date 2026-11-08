import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [614],
	set: Set,

	name: {
		'en-us': "Beartic",
		'fr-fr': "Polagriffe",
		'de-de': "Siberio",
		'it-it': "Beartic",
		'pt-br': "Beartic",
		'es-es': "Beartic",
		'es-mx': "Beartic"
	},

	illustrator: "Whisker",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Cubchoo",
		'fr-fr': "Polarhume",
		'de-de': "Petznief",
		'it-it': "Cubchoo",
		'pt-br': "Cubchoo",
		'es-es': "Cubchoo",
		'es-mx': "Cubchoo"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Continuous Headbutt",
			'fr-fr': "Coup d'Boule Sans Fin",
			'de-de': "Anhaltender Kopfstoß",
			'it-it': "Bottintesta Continue",
			'pt-br': "Cabeçada Contínua",
			'es-es': "Golpe Cabeza Continuo",
			'es-mx': "Cabezazo Continuo"
		},

		effect: {
			'en-us': "Flip a coin until you get tails. This attack does 50 damage for each heads.",
			'fr-fr': "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 50 dégâts pour chaque côté face.",
			'de-de': "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 50 Schadenspunkte pro Kopf zu.",
			'it-it': "Lancia una moneta finché non esce croce. Questo attacco infligge 50 danni ogni volta che esce testa.",
			'pt-br': "Jogue uma moeda até sair coroa. Este ataque causa 50 pontos de dano para cada cara.",
			'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 50 puntos de daño por cada cara.",
			'es-mx': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 50 puntos de daño por cada cara."
		},

		damage: "50×"
	}, {
		cost: ["Water", "Water", "Water", "Colorless"],

		name: {
			'en-us': "Sheer Cold",
			'fr-fr': "Glaciation",
			'de-de': "Eiseskälte",
			'it-it': "Purogelo",
			'pt-br': "Frio Extremo",
			'es-es': "Frío Polar",
			'es-mx': "Frío Extremo"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't use attacks.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas utiliser d'attaques.",
			'de-de': "Während des nächsten Zuges deines Gegners kann das Verteidigende Pokémon keine Attacken einsetzen.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può usare attacchi.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá usar ataques.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede usar ataques.",
			'es-mx': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede usar ataques."
		},

		damage: 150
	}],

	retreat: 3,
	regulationMark: "I",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836127,
				tcgplayer: 642563
			}
		},
	]
}

export default card
