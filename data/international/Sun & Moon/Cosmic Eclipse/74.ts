import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Togedemaru",
		'fr-fr': "Togedemaru",
		'es-es': "Togedemaru",
		'it-it': "Togedemaru",
		'pt-br': "Togedemaru",
		'de-de': "Togedemaru"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		777,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Thunder Shock",
				'fr-fr': "Éclair",
				'es-es': "Impactrueno",
				'it-it': "Tuonoshock",
				'pt-br': "Trovoada de Choques",
				'de-de': "Donnerschock"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "When it's surprised or agitated, the 14 fur spikes on its back will stand up involuntarily.",
	},

	thirdParty: {
		cardmarket: 408019,
		tcgplayer: 201248
	}
}

export default card
