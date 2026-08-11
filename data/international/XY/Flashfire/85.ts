import { Card } from 'models/database/card'
import Set from '../Flashfire'

const card: Card = {
	name: {
		'en-us': "Lopunny",
		'fr-fr': "Lockpin",
		'es-es': "Lopunny",
		'it-it': "Lopunny",
		'pt-br': "Lopunny",
		'de-de': "Schlapor"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		428,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Buneary",
		'fr-fr': "Laporeille",
		'es-es': "Buneary",
		'it-it': "Buneary",
		'pt-br': "Buneary",
		'de-de': "Haspiror"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Big Jump",
				'fr-fr': "Grand Saut",
				'es-es': "Gran Salto",
				'it-it': "Gransalto",
				'pt-br': "Grande Pulo",
				'de-de': "Großer Satz"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may return this Pokémon and all cards attached to it to your hand.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez reprendre ce Pokémon et toutes les cartes qui lui sont attachées dans votre main.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes devolver este Pokémon y todas las cartas unidas a él a tu mano.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi riprendere in mano questo Pokémon e tutte le carte a esso assegnate.",
				'pt-br': "Uma vez durante sua vez de jogar (antes de atacar), você poderá devolver este Pokémon e todos os cards ligados a ele para sua mão.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du dieses Pokémon und alle daran angelegten Karten zurück auf deine Hand nehmen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sitdown Bounce",
				'fr-fr': "Rebond Ressort",
				'es-es': "Bote Sentado",
				'it-it': "Siedibalzo",
				'pt-br': "Ricochete Arriante",
				'de-de': "Plumpshüpfer"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this Pokémon can't attack during your next turn.",
				'fr-fr': "Lancez une pièce. Si c'est pile, ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
				'es-es': "Lanza 1 moneda. Si sale cruz, este Pokémon no puede atacar durante tu próximo turno.",
				'it-it': "Lancia una moneta. Se esce croce, durante il tuo prossimo turno, questo Pokémon non può attaccare.",
				'pt-br': "Jogue uma moeda. Se sair coroa, este Pokémon não poderá atacar durante sua próxima vez de jogar.",
				'de-de': "Wirf 1 Münze. Bei \"Zahl\" kann dieses Pokémon während deines nächsten Zuges nicht angreifen."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Extremely cautious, it quickly bounds off when it senses danger.",
	},

	thirdParty: {
		cardmarket: 281568,
		tcgplayer: 91222
	}
}

export default card
