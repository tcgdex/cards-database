import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [657],
	set: Set,

	name: {
		'en-us': "Frogadier",
		'fr-fr': "Croâporal",
		'es-es': "Frogadier",
		'it-it': "Frogadier",
		'pt-br': "Frogadier",
		'de-de': "Amphizel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Froakie",
		'fr-fr': "Grenousse",
		'es-es': "Froakie",
		'it-it': "Froakie",
		'pt-br': "Froakie",
		'de-de': "Froxy"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Numbing Water",
			'fr-fr': "Eau Paralysante",
			'es-es': "Agua Aturdidora",
			'it-it': "Acqua Immobilizzante",
			'pt-br': "Água Entorpecedora",
			'de-de': "Betäubendes Wasser"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "It can throw bubble-covered pebbles with precise control, hitting empty cans up to a hundred feet away.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769231,
				tcgplayer: 550101
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769231,
				tcgplayer: 550101
			}
		},
	],

	illustrator: "Hitoshi Ariga",

}

export default card