import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Ekans",
		'fr-fr': "Abo",
		'es-es': "Ekans",
		'it-it': "Ekans",
		'pt-br': "Ekans",
		'de-de': "Rettan"
	},

	illustrator: "Yumi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		23,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Glare",
				'fr-fr': "Regard Médusant",
				'es-es': "Deslumbrar",
				'it-it': "Sguardo Feroce",
				'pt-br': "Olhar Penetrante",
				'de-de': "Giftblick"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Tail Smack",
				'fr-fr': "Coup de Queue",
				'es-es': "Bofetón Cola",
				'it-it': "Codasberla",
				'pt-br': "Ataque de Cauda",
				'de-de': "Schweifschlag"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "By dislocating its jaw, it can swallow prey larger than itself. After a meal, it curls up and rests.",
	},

	thirdParty: {
		cardmarket: 372350,
		tcgplayer: 189162
	}
}

export default card
