import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Alolan Diglett",
		'fr-fr': "Taupiqueur d’Alola",
		'es-es': "Diglett de Alola",
		'it-it': "Diglett di Alola",
		'pt-br': "Diglett de Alola",
		'de-de': "Alola-Digda"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		50,
	],

	hp: 50,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Spelunk",
				'fr-fr': "Spéléologue",
				'es-es': "Espeleología",
				'it-it': "Spelonca",
				'pt-br': "Exploraverna",
				'de-de': "Höhlenkunde"
			},
			effect: {
				'en-us': "Look at the top 3 cards of your deck and put them back in any order.",
				'fr-fr': "Regardez les 3 cartes du dessus de votre deck et replacez-les dans l’ordre de votre choix.",
				'es-es': "Mira las 3 primeras cartas de tu baraja y vuelve a ponerlas en la parte superior de tu baraja en el orden que quieras.",
				'it-it': "Guarda le prime tre carte del tuo mazzo e rimettile a posto nell’ordine che preferisci.",
				'pt-br': "Olhe as 3 primeiras cartas do seu baralho e coloque-as de volta em qualquer ordem.",
				'de-de': "Schau dir die obersten 3 Karten deines Decks an und lege sie in beliebiger Reihenfolge zurück auf dein Deck."
			},

		},
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Mud-Slap",
				'fr-fr': "Coud’Boue",
				'es-es': "Bofetón Lodo",
				'it-it': "Fangosberla",
				'pt-br': "Tiro de Lama",
				'de-de': "Lehmschelle"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its head sports an altered form of whiskers made of metal. When in communication with its comrades, its whiskers wobble to and fro.",
	},

	thirdParty: {
		cardmarket: 295397,
		tcgplayer: 126958
	}
}

export default card
