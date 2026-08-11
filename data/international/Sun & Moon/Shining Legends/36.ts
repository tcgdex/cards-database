import { Card } from 'models/database/card'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		'en-us': "Ekans",
		'fr-fr': "Abo",
		'es-es': "Ekans",
		'it-it': "Ekans",
		'pt-br': "Ekans",
		'de-de': "Rettan"
	},

	illustrator: "DemizuPosuka",
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
				'en-us': "Poison Sting",
				'fr-fr': "Dard-Venin",
				'es-es': "Picotazo Veneno",
				'it-it': "Velenospina",
				'pt-br': "Ferrão Venenoso",
				'de-de': "Giftstachel"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent’s Active Pokémon is now Poisoned.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Envenenado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene avvelenato.",
				'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Envenenado.",
				'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt vergiftet."
			},
			damage: 10,

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
		'en-us': "The older it gets, the longer it grows. At night, it wraps its long body around tree branches to rest.",
	},

	thirdParty: {
		cardmarket: 302174,
		tcgplayer: 146703
	}
}

export default card
