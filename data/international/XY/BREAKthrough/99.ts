import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Granbull",
		'fr-fr': "Granbull",
		'es-es': "Granbull",
		'it-it': "Granbull",
		'pt-br': "Granbull",
		'de-de': "Granbull"
	},

	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		210,
	],

	hp: 120,

	types: [
		"Fairy",
	],

	evolveFrom: {
		'en-us': "Snubbull",
		'fr-fr': "Snubbull",
		'es-es': "Snubbull",
		'it-it': "Snubbull",
		'pt-br': "Snubbull",
		'de-de': "Snubbull"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Startling Bark",
				'fr-fr': "Aboiement Surprenant",
				'es-es': "Ladrido Alarmante",
				'it-it': "Abbaiare Improvviso",
				'pt-br': "Latido Assustador",
				'de-de': "Schreckgebell"
			},
			effect: {
				'en-us': "Flip a coin. If heads, choose 3 random cards from your opponent's hand. Your opponent reveals those cards and shuffles them into his or her deck.",
				'fr-fr': "Lancez une pièce. Si c'est face, choisissez 3 cartes au hasard de la main de votre adversaire. Votre adversaire montre les cartes choisies et les mélange avec son deck.",
				'es-es': "Lanza 1 moneda. Si sale cara, elige 3 cartas aleatorias de la mano de tu rival. Tu rival enseña esas cartas, las pone en su baraja y las baraja todas.",
				'it-it': "Lancia una moneta. Se esce testa, scegli tre carte a caso dalla mano del tuo avversario. Il tuo avversario mostra quelle carte e le rimischia nel suo mazzo.",
				'pt-br': "Jogue uma moeda. Se sair cara, escolha 3 cards aleatórios da mão do seu oponente. Seu oponente revela estes cards e os embaralha de volta no baralho dele ou dela.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" wähle 3 zufällige Karten aus der verdeckten Hand deines Gegners. Dein Gegner zeigt diese Karten und mischt sie zurück in sein Deck."
			},

		},
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tantrum",
				'fr-fr': "Mauvaise Humeur",
				'es-es': "Rabieta",
				'it-it': "Collera",
				'pt-br': "Petulância",
				'de-de': "Wutausbruch"
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
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It can make most any Pokémon run away simply by opening its mouth wide to reveal its big fangs.",
	},

	thirdParty: {
		cardmarket: 286345,
		tcgplayer: 107218
	}
}

export default card
