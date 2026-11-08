import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Braixen",
		'fr-fr': "Roussil",
		'es-es': "Braixen",
		'it-it': "Braixen",
		'pt-br': "Braixen",
		'de-de': "Rutena"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		654,
	],

	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Fennekin",
		'fr-fr': "Feunnec",
		'es-es': "Fennekin",
		'it-it': "Fennekin",
		'pt-br': "Fennekin",
		'de-de': "Fynx"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Clairvoyant Eye",
				'fr-fr': "Œil Clairvoyant",
				'es-es': "Ojo Clarividente",
				'it-it': "Chiaroveggenza",
				'pt-br': "Olho Clarividente",
				'de-de': "Hellsehendes Auge"
			},
			effect: {
				'en-us': "Look at the top 3 cards of your deck and put them back on top of your deck in any order.",
				'fr-fr': "Regardez les 3 cartes du dessus de votre deck et replacez-les sur le dessus de votre deck dans l'ordre de votre choix.",
				'es-es': "Mira las 3 primeras cartas de tu baraja y vuelve a ponerlas en la parte superior de tu baraja en el orden que quieras.",
				'it-it': "Guarda le prime tre carte del tuo mazzo e rimettile in cima al mazzo nell'ordine che preferisci.",
				'pt-br': "Olhe os 3 cards de cima do seu baralho e coloque-os de volta em cima do seu baralho em qualquer ordem.",
				'de-de': "Schau dir die obersten 3 Karten deines Decks an und lege sie in beliebiger Reihenfolge zurück auf dein Deck."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Fire Tail Slap",
				'fr-fr': "Coup de Queue Enflammé",
				'es-es': "Bofetón Cola Fuego",
				'it-it': "Codata Infuocata",
				'pt-br': "Tapa de Cauda de Fogo",
				'de-de': "Feuerschweifschlag"
			},
			effect: {
				'en-us': "Discard a Fire Energy attached to this Pokémon.",
				'fr-fr': "Défaussez une Énergie Fire attachée à ce Pokémon.",
				'es-es': "Descarta 1 Energía Fire unida a este Pokémon.",
				'it-it': "Scarta un'Energia Fire assegnata a questo Pokémon.",
				'pt-br': "Descarte uma Energia Fire ligada a este Pokémon.",
				'de-de': "Lege 1 an dieses Pokémon angelegte Fire-Energie auf deinen Ablagestapel."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It has a twig stuck in its tail. With friction from its tail fur, it sets the twig on fire and launches into battle.",
	},

	thirdParty: {
		cardmarket: 281362,
		tcgplayer: 83948
	}
}

export default card
