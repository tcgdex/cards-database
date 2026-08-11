import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [296],
	set: Set,

	name: {
		'en-us': "Makuhita",
		'fr-fr': "Makuhita",
		'es-es': "Makuhita",
		'it-it': "Makuhita",
		'pt-br': "Makuhita",
		'de-de': "Makuhita"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Fake Out",
			'fr-fr': "Bluff",
			'es-es': "Sorpresa",
			'it-it': "Bruciapelo",
			'pt-br': "Fingimento",
			'de-de': "Mogelhieb"
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

	retreat: 3,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674109,
				tcgplayer: 283987
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674109,
				tcgplayer: 283987
			}
		},
	],
}

export default card
