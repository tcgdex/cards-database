import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Fearow",
		'fr-fr': "Rapasdepic",
		'es-es': "Fearow",
		'it-it': "Fearow",
		'pt-br': "Fearow",
		'de-de': "Ibitak"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		22,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Spearow",
		'fr-fr': "Piafabec",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Devastating Wind",
				'fr-fr': "Vent Dévastateur",
				'es-es': "Viento Devastador",
				'it-it': "Devastavento",
				'pt-br': "Vento Devastador",
				'de-de': "Wind der Verwüstung"
			},
			effect: {
				'en-us': "Your opponent shuffles their hand into their deck and draws 3 cards.",
				'fr-fr': "Votre adversaire mélange sa main avec son deck et pioche 3 cartes.",
				'es-es': "Tu rival pone las cartas de su mano en su baraja y las baraja todas, y roba 3 cartas.",
				'it-it': "Il tuo avversario rimischia le carte che ha in mano nel proprio mazzo e poi pesca tre carte.",
				'pt-br': "Seu oponente embaralha a própria mão no baralho dele(a) e compra 3 cartas.",
				'de-de': "Dein Gegner mischt seine Handkarten in sein Deck und zieht 3 Karten."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Slashing Strike",
				'fr-fr': "Coup Déchirant",
				'es-es': "Golpe Cuchillazo",
				'it-it': "Lacerattacco",
				'pt-br': "Ataque Cortante",
				'de-de': "Schlitzender Schlag"
			},
			effect: {
				'en-us': "This Pokémon can’t use Slashing Strike during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas utiliser Coup Déchirant pendant votre prochain tour.",
				'es-es': "Este Pokémon no puede usar Golpe Cuchillazo durante tu próximo turno.",
				'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Lacerattacco.",
				'pt-br': "Este Pokémon não poderá usar Ataque Cortante durante a sua próxima vez de jogar.",
				'de-de': "Dieses Pokémon kann Schlitzender Schlag während deines nächsten Zuges nicht einsetzen."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Drawings of a Pokémon resembling Fearow can be seen in murals from deep in ancient history.",
	},

	thirdParty: {
		cardmarket: 295409,
		tcgplayer: 126970
	}
}

export default card
