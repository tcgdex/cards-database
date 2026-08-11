import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [602],
	set: Set,

	name: {
		'en-us': "Tynamo",
		'fr-fr': "Anchwatt",
		'es-es': "Tynamo",
		'it-it': "Tynamo",
		'pt-br': "Tynamo",
		'de-de': "Zapplardin"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Lightning"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Yuka Morii",

	description: {
		'en-us': "One alone can emit only a trickle of electricity, so a group of them gathers to unleash a powerful electric shock."
	},

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Thunder Wave",
			'fr-fr': "Cage Éclair",
			'de-de': "Donnerwelle",
			'es-es': "Onda Trueno",
			'pt-br': "Onda de Trovão",
			'it-it': "Tuononda"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'de-de': "Tackle",
			'es-es': "Placaje",
			'pt-br': "Investida",
			'it-it': "Azione"
		},

		damage: 20
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582488,
				tcgplayer: 253251
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582488,
				tcgplayer: 253251
			}
		},
	],
}

export default card
