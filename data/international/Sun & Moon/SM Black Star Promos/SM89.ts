import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Zoroark",
		'fr-fr': "Zoroark",
		'es-es': "Zoroark",
		'it-it': "Zoroark",
		'pt-br': "Zoroark",
		'de-de': "Zoroark"
	},
	illustrator: "Misa Tsutsui",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		571,
	],
	hp: 120,
	types: [
		"Darkness",
	],
	evolveFrom: {
		'en-us': "Zorua",
		'fr-fr': "Zorua",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rip Claw",
				'fr-fr': "Griffe Déchirante",
				'es-es': "Garra Arrebatadora",
				'it-it': "Strappartiglio",
				'pt-br': "Garra Dilacerante",
				'de-de': "Reißklaue"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy from your opponent’s Active Pokémon.",
				'fr-fr': "Lancez une pièce. Si c’est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
				'es-es': "Lanza 1 moneda. Si sala cara, descarta 1 Energía del Pokémon Activo de tu rival.",
				'it-it': "Lancia una moneta. Se esce testa, scarta un’Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Jogue 1 moeda. Se sair cara, descarte 1 Energia do Pokémon Ativo do seu oponente.",
				'de-de': "Wirf 1 Münze. Lege bei Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Doom Crush",
				'fr-fr': "Écrasement Tragique",
				'es-es': "Presión Trágica",
				'it-it': "Schianto Avverso",
				'pt-br': "Esmagamento Sinistro",
				'de-de': "Verhängnisvoller Zermalmer"
			},
			effect: {
				'en-us': "Discard a Darkness Energy from this Pokémon.",
				'fr-fr': "Défaussez une Énergie Darkness de ce Pokémon.",
				'es-es': "Descarta 1 Energía Darkness de este Pokémon.",
				'it-it': "Scarta un’Energia Darkness assegnata a questo Pokémon.",
				'pt-br': "Descarte 1 Energia Darkness deste Pokémon.",
				'de-de': "Lege 1 Darkness-Energie von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 120,

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
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,




	description: {
		'en-us': "Each has the ability to fool a large group of people simultaneously. They protect their lair with illusory scenery.",
	},
}

export default card
