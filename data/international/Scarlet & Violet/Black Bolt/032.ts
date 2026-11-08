import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [604],
	set: Set,

	name: {
		'en-us': "Eelektross",
		'fr-fr': "Ohmassacre",
		'de-de': "Zapplarang",
		'it-it': "Eelektross",
		'pt-br': "Eelektross",
		'es-es': "Eelektross",
		'es-mx': "Eelektross"
	},

	illustrator: "Jerky",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],
	evolveFrom: {
		'en-us': "Eelektrik",
		'fr-fr': "Lampéroie",
		'de-de': "Zapplalek",
		'it-it': "Eelektrik",
		'pt-br': "Eelektrik",
		'es-es': "Eelektrik",
		'es-mx': "Eelektrik"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Thunder Fang",
			'fr-fr': "Crocs Éclair",
			'de-de': "Donnerzahn",
			'it-it': "Fulmindenti",
			'pt-br': "Presa Trovejante",
			'es-es': "Colmillo Rayo",
			'es-mx': "Colmillo de Trueno"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'es-mx': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival ahora está Paralizado."
		},

		damage: 60
	}, {
		cost: ["Lightning", "Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "Buzz Flip",
			'fr-fr': "Lancer Fracassant",
			'de-de': "Knisterwurf",
			'it-it': "Elettrolancio",
			'pt-br': "Virada Elétrica",
			'es-es': "Voltereta Zumbante",
			'es-mx': "Electrolanzamiento"
		},

		effect: {
			'en-us': "Flip 4 coins. This attack does 100 damage for each heads.",
			'fr-fr': "Lancez 4 pièces. Cette attaque inflige 100 dégâts pour chaque côté face.",
			'de-de': "Wirf 4 Münzen. Diese Attacke fügt 100 Schadenspunkte pro Kopf zu.",
			'it-it': "Lancia quattro volte una moneta. Questo attacco infligge 100 danni ogni volta che esce testa.",
			'pt-br': "Jogue 4 moedas. Este ataque causa 100 pontos de dano para cada cara.",
			'es-es': "Lanza 4 monedas. Este ataque hace 100 puntos de daño por cada cara.",
			'es-mx': "Lanza 4 monedas. Este ataque hace 100 puntos de daño por cada cara."
		},

		damage: "100×"
	}],

	retreat: 3,
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 835964,
				tcgplayer: 642484
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835964,
				tcgplayer: 642484
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836338,
				tcgplayer: 642729
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836337,
				tcgplayer: 642656
			}
		}
	]
}

export default card
