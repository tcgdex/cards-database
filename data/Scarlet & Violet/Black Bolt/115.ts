import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [604],
	set: Set,

	name: {
		en: "Eelektross",
		fr: "Ohmassacre",
		de: "Zapplarang",
		it: "Eelektross",
		pt: "Eelektross",
		es: "Eelektross",
		'es-mx': "Eelektross"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],
	stage: "Stage2",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Thunder Fang",
			fr: "Crocs Éclair",
			de: "Donnerzahn",
			it: "Fulmindenti",
			pt: "Presa Trovejante",
			es: "Colmillo Rayo",
			'es-mx': "Colmillo de Trueno"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'es-mx': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival ahora está Paralizado."
		},

		damage: 60
	}, {
		cost: ["Lightning", "Lightning", "Lightning", "Colorless"],

		name: {
			en: "Buzz Flip",
			fr: "Lancer Fracassant",
			de: "Knisterwurf",
			it: "Elettrolancio",
			pt: "Virada Elétrica",
			es: "Voltereta Zumbante",
			'es-mx': "Electrolanzamiento"
		},

		effect: {
			en: "Flip 4 coins. This attack does 100 damage for each heads.",
			fr: "Lancez 4 pièces. Cette attaque inflige 100 dégâts pour chaque côté face.",
			de: "Wirf 4 Münzen. Diese Attacke fügt 100 Schadenspunkte pro Kopf zu.",
			it: "Lancia quattro volte una moneta. Questo attacco infligge 100 danni ogni volta che esce testa.",
			pt: "Jogue 4 moedas. Este ataque causa 100 pontos de dano para cada cara.",
			es: "Lanza 4 monedas. Este ataque hace 100 puntos de daño por cada cara.",
			'es-mx': "Lanza 4 monedas. Este ataque hace 100 puntos de daño por cada cara."
		},

		damage: "100×"
	}],

	retreat: 3,
	regulationMark: "I"
}

export default card