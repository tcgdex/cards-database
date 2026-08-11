import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Alolan Grimer",
		'fr-fr': "Tadmorv d’Alola",
		'es-es': "Grimer de Alola",
		'it-it': "Grimer di Alola",
		'pt-br': "Grimer de Alola",
		'de-de': "Alola-Sleima"
	},

	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		88,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Super Poison Breath",
				'fr-fr': "Super Haleine Empoisonnée",
				'es-es': "Aliento Supervenenoso",
				'it-it': "Super Velenospiro",
				'pt-br': "Super-hálito Venenoso",
				'de-de': "Super-Gifthauch"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent’s Active Pokémon is now Poisoned.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Envenenado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene avvelenato.",
				'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Envenenado.",
				'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt vergiftet."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Pound",
				'fr-fr': "Écras’Face",
				'es-es': "Destructor",
				'it-it': "Botta",
				'pt-br': "Pancada",
				'de-de': "Pfund"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "The crystals on Grimer's body are lumps of toxins. If one falls off, lethal poisons leak out.",
	},

	thirdParty: {
		cardmarket: 295368,
		tcgplayer: 126928
	}
}

export default card
