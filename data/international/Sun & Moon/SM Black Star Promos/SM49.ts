import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Bewear",
		'fr-fr': "Chelours",
		'es-es': "Bewear",
		'it-it': "Bewear",
		'pt-br': "Bewear",
		'de-de': "Kosturso"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		760,
	],
	hp: 120,
	types: [
		"Colorless",
	],
	evolveFrom: {
		'en-us': "Stufful",
		'fr-fr': "Nounourson",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mix-Up",
				'fr-fr': "Mélange",
				'es-es': "Mezclar",
				'it-it': "Frullatore",
				'pt-br': "Atrapalhar",
				'de-de': "Durcheinander"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard the top 3 cards of your opponent’s deck.",
				'fr-fr': "Lancez une pièce. Si c’est face, défaussez les 3 cartes du dessus du deck de votre adversaire.",
				'es-es': "Lanza 1 moneda. Si sale cara, descarta las 3 primeras cartas de la baraja de tu rival.",
				'it-it': "Lancia una moneta. Se esce testa, scarta le prime tre carte del mazzo del tuo avversario.",
				'pt-br': "Jogue 1 moeda. Se sair cara, descarte as 3 primeiras cartas do baralho do seu oponente.",
				'de-de': "Wirf 1 Münze. Lege bei Kopf die obersten 3 Karten vom Deck deines Gegners auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tantrum",
				'fr-fr': "Mauvaise Humeur",
				'es-es': "Rabieta",
				'it-it': "Collera",
				'pt-br': "Petulância",
				'de-de': "Rappel"
			},
			effect: {
				'en-us': "This Pokémon is now Confused.",
				'fr-fr': "Ce Pokémon est maintenant Confus.",
				'es-es': "Este Pokémon pasa a estar Confundido.",
				'it-it': "Questo Pokémon viene confuso.",
				'pt-br': "Este Pokémon agora está Confuso.",
				'de-de': "Dieses Pokémon ist jetzt verwirrt."
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

	retreat: 2,




	description: {
		'en-us': "This immensely dangerous Pokémon possesses overwhelming physical strength. Its habitat is generally off-limits.",
	},
}

export default card
