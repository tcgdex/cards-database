import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Latias",
		'fr-fr': "Latias",
		'es-es': "Latias",
		'it-it': "Latias",
		'pt-br': "Latias",
		'de-de': "Latias"
	},
	illustrator: "Kouki Saitou",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		380,
	],
	hp: 110,
	types: [
		"Dragon",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hypnoblast",
				'fr-fr': "Hypnoblast",
				'es-es': "Hipnorrayo",
				'it-it': "Ipnobomba",
				'pt-br': "Borrifada Hipnótica",
				'de-de': "Hypnoschuss"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'es-es': "El Pokémon Defensor pasa a estar Dormido.",
				'it-it': "Il Pokémon Difensore è Addormentato.",
				'pt-br': "O Pokémon Defensor agora está Adormecido.",
				'de-de': "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Mist Ball",
				'fr-fr': "Ball’Brume",
				'es-es': "Bola Neblina",
				'it-it': "Foschisfera",
				'pt-br': "Bola de Névoa",
				'de-de': "Nebelball"
			},
			effect: {
				'en-us': "Flip a coin. If tails, discard a Fire Energy and a Psychic Energy from this Pokémon.",
				'fr-fr': "Lancez une pièce. Si c’est pile, défaussez une Énergie Fire et une Énergie Psychic de ce Pokémon.",
				'es-es': "Lanza 1 moneda. Si sale cruz, descarta 1 Energía Fire y 1 Energía Psychic de este Pokémon.",
				'it-it': "Lancia una moneta. Se esce croce, scarta un’Energia Fire e un’Energia Psychic assegnate a questo Pokémon.",
				'pt-br': "Jogue 1 moeda. Se sair coroa, descarte 1 Energia Fire e 1 Energia Psychic deste Pokémon.",
				'de-de': "Wirf 1 Münze. Lege bei Zahl 1 Fire-Energie und 1 Psychic-Energie von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 110,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,




	description: {
		'en-us': "It can telepathically communicate with people. It changes its appearance using its down that refracts light.",
	},
}

export default card
