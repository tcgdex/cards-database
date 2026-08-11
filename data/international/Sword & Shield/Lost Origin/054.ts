import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [309],
	set: Set,

	name: {
		'en-us': "Electrike",
		'fr-fr': "Dynavolt",
		'es-es': "Electrike",
		'it-it': "Electrike",
		'pt-br': "Electrike",
		'de-de': "Frizelbliz"
	},

	illustrator: "otumami",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Zap Kick",
			'fr-fr': "Coup de Pied Ravageur",
			'es-es': "Electropatada",
			'it-it': "Dinamocalcio",
			'pt-br': "Chute Zap",
			'de-de': "Stromtritt"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Thunder Fang",
			'fr-fr': "Crocs Éclair",
			'es-es': "Colmillo Rayo",
			'it-it': "Fulmindenti",
			'pt-br': "Presa Trovejante",
			'de-de': "Donnerzahn"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674064,
				tcgplayer: 283928
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674064,
				tcgplayer: 283928
			}
		},
	],
}

export default card
