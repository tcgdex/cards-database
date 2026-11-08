import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [938],
	set: Set,

	name: {
		'fr-fr': "Têtampoule",
		'en-us': "Tadbulb",
		'es-es': "Tadbulb",
		'it-it': "Tadbulb",
		'pt-br': "Tadbulb",
		'de-de': "Blipp"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'fr-fr': "Cage Éclair",
			'en-us': "Thunder Wave",
			'es-es': "Onda Trueno",
			'it-it': "Tuononda",
			'pt-br': "Onda de Trovão",
			'de-de': "Donnerwelle"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715552,
				tcgplayer: 497488,
				cardtrader: 248704
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715552,
				tcgplayer: 497488,
				cardtrader: 248704
			}
		},
	],

	illustrator: "Pani Kobayashi",

	description: {
		'en-us': "Tadbulb shakes its tail to generate electricity. If it senses danger, it will make its head blink on and off to alert its allies.",
	},
}

export default card
