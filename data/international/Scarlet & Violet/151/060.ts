import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [60],
	set: Set,

	name: {
		'fr-fr': "Ptitard",
		'en-us': "Poliwag",
		'es-es': "Poliwag",
		'it-it': "Poliwag",
		'pt-br': "Poliwag",
		'de-de': "Quapsel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'fr-fr': "Écume",
			'en-us': "Bubble",
			'es-es': "Burbuja",
			'it-it': "Bolla",
			'pt-br': "Bolha",
			'de-de': "Blubber"
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
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "In rivers with fast-flowing water, this Pokémon will cling to a rock by using its thick lips, which act like a suction cup.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733655,
				tcgplayer: 516249,
				cardtrader: 261141
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733655,
				tcgplayer: 516249,
				cardtrader: 261141
			}
		},
	],

	illustrator: "Kurata So",

	
}

export default card
