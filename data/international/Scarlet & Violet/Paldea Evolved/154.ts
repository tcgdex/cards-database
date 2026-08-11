import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [203],
	set: Set,

	name: {
		'fr-fr': "Girafarig",
		'en-us': "Girafarig",
		'es-es': "Girafarig",
		'it-it': "Girafarig",
		'pt-br': "Girafarig",
		'de-de': "Girafarig"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Choc Mental",
			'en-us': "Psy Bolt",
			'es-es': "Rayo Psi",
			'it-it': "Psico",
			'pt-br': "Raio Psíquico",
			'de-de': "Mentale Blockade"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Frappe de Tête",
			'en-us': "Headbang",
			'es-es': "Cabecear",
			'it-it': "Scuotitesta",
			'pt-br': "Baque de Cabeça",
			'de-de': "Headbangen"
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715629,
				tcgplayer: 497572,
				cardtrader: 248810
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715629,
				tcgplayer: 497572,
				cardtrader: 248810
			}
		},
	],

	illustrator: "kirisAki",

	description: {
		'en-us': "Though very small, the brain in its tail is still considered an important organ because it emits powerful psychic energy.",
	},
}

export default card
