import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		'en-us': "Its fluffy coat doubles in size when static electricity builds up. Touching it can be shocking.",
	},


	name: {
		'en-us': "Mareep",
		'fr-fr': "Wattouat",
		'es-es': "Mareep",
		'es-mx': "Mareep",
		'de-de': "Voltilamm",
		'it-it': "Mareep",
		'pt-br': "Mareep"
	},

	illustrator: "UKUMO uiti",
	rarity: "Common",
	category: "Pokemon",
	dexId: [179],
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Thunder Wave",
			'fr-fr': "Cage Éclair",
			'es-es': "Onda Trueno",
			'es-mx': "Onda Trueno",
			'de-de': "Donnerwelle",
			'it-it': "Tuononda",
			'pt-br': "Onda de Trovão"
		},

		cost: ["Lightning", "Colorless"],
		damage: 20,

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'es-mx': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival ahora está Paralizado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886419,
				tcgplayer: 693507
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 886419,
				tcgplayer: 693507
			}
		},
	],
}

export default card
