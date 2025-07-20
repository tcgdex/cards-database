import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	set: Set,

	name: {
		en: "Beartic",
		fr: "Polagriffe",
		de: "Siberio",
		it: "Beartic",
		pt: "Beartic",
		es: "Beartic",
		'es-mx': "Beartic"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Continuous Headbutt",
			fr: "Coup d'Boule Sans Fin",
			de: "Anhaltender Kopfstoß",
			it: "Bottintesta Continue",
			pt: "Cabeçada Contínua",
			es: "Golpe Cabeza Continuo",
			'es-mx': "Cabezazo Continuo"
		},

		effect: {
			en: "Flip a coin until you get tails. This attack does 50 damage for each heads.",
			fr: "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 50 dégâts pour chaque côté face.",
			de: "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 50 Schadenspunkte pro Kopf zu.",
			it: "Lancia una moneta finché non esce croce. Questo attacco infligge 50 danni ogni volta che esce testa.",
			pt: "Jogue uma moeda até sair coroa. Este ataque causa 50 pontos de dano para cada cara.",
			es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 50 puntos de daño por cada cara.",
			'es-mx': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 50 puntos de daño por cada cara."
		},

		damage: "50×"
	}, {
		cost: ["Water", "Water", "Water", "Colorless"],

		name: {
			en: "Sheer Cold",
			fr: "Glaciation",
			de: "Eiseskälte",
			it: "Purogelo",
			pt: "Frio Extremo",
			es: "Frío Polar",
			'es-mx': "Frío Extremo"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't use attacks.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas utiliser d'attaques.",
			de: "Während des nächsten Zuges deines Gegners kann das Verteidigende Pokémon keine Attacken einsetzen.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può usare attacchi.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá usar ataques.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede usar ataques.",
			'es-mx': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede usar ataques."
		},

		damage: 150
	}],

	retreat: 3,
	regulationMark: "I"
}

export default card