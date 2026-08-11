import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [760],

	name: {
		'en-us': "Bewear",
		'fr-fr': "Chelours",
		'es-es': "Bewear",
		'it-it': "Bewear",
		'pt-br': "Bewear",
		'de-de': "Kosturso"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		'en-us': "Stufful",
		'fr-fr': "Nounourson",
		'es-es': "Stufful",
		'it-it': "Stufful",
		'pt-br': "Stufful",
		'de-de': "Velursi"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hammer Arm",
				'fr-fr': "Marto-Poing",
				'es-es': "Machada",
				'it-it': "Martelpugno",
				'pt-br': "Braço de Martelo",
				'de-de': "Hammerarm"
			},
			effect: {
				'en-us': "Discard the top card of your opponent's deck.",
				'fr-fr': "Défaussez la carte du dessus du deck de votre adversaire.",
				'es-es': "Descarta la primera carta de la baraja de tu rival.",
				'it-it': "Scarta la prima carta del mazzo del tuo avversario.",
				'pt-br': "Descarte a carta de cima do baralho do seu oponente.",
				'de-de': "Lege die oberste Karte des Decks deines Gegners auf seinen Ablagestapel."
			},
			damage: 90,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Big Throw",
				'fr-fr': "Grand Lancer",
				'es-es': "Gran Lanzamiento",
				'it-it': "Gran Lancio",
				'pt-br': "Arremessão",
				'de-de': "Großer Wurf"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard your opponent's Active Pokémon and all attached cards.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez le Pokémon Actif de votre adversaire et toutes les cartes attachées.",
				'es-es': "Lanza 1 moneda. Si sale cara, descarta el Pokémon Activo de tu rival y todas las cartas unidas a él.",
				'it-it': "Lancia una moneta. Se esce testa, scarta il Pokémon attivo del tuo avversario e tutte le carte a esso assegnate.",
				'pt-br': "Jogue 1 moeda. Se sair cara, descarte o Pokémon Ativo do seu oponente e todas as cartas ligadas a ele.",
				'de-de': "Wirf 1 Münze. Lege bei Kopf das Aktive Pokémon deines Gegners und alle angelegten Karten auf seinen Ablagestapel."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,
	hp: 140,
	types: ["Colorless"],
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "Once it accepts you as a friend, it tries to show its affection with a hug. Letting it do that is dangerous—it could easily shatter your bones."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 458148,
				tcgplayer: 213250
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 458148,
				tcgplayer: 213250
			}
		},
	],
}

export default card
