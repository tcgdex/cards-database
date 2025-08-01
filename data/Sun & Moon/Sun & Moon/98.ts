import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Fearow",
		fr: "Rapasdepic",
		es: "Fearow",
		it: "Fearow",
		pt: "Fearow",
		de: "Ibitak"
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
		en: "Spearow",
		fr: "Piafabec",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Devastating Wind",
				fr: "Vent Dévastateur",
				es: "Viento Devastador",
				it: "Devastavento",
				pt: "Vento Devastador",
				de: "Wind der Verwüstung"
			},
			effect: {
				en: "Your opponent shuffles their hand into their deck and draws 3 cards.",
				fr: "Votre adversaire mélange sa main avec son deck et pioche 3 cartes.",
				es: "Tu rival pone las cartas de su mano en su baraja y las baraja todas, y roba 3 cartas.",
				it: "Il tuo avversario rimischia le carte che ha in mano nel proprio mazzo e poi pesca tre carte.",
				pt: "Seu oponente embaralha a própria mão no baralho dele(a) e compra 3 cartas.",
				de: "Dein Gegner mischt seine Handkarten in sein Deck und zieht 3 Karten."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Slashing Strike",
				fr: "Coup Déchirant",
				es: "Golpe Cuchillazo",
				it: "Lacerattacco",
				pt: "Ataque Cortante",
				de: "Schlitzender Schlag"
			},
			effect: {
				en: "This Pokémon can’t use Slashing Strike during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Coup Déchirant pendant votre prochain tour.",
				es: "Este Pokémon no puede usar Golpe Cuchillazo durante tu próximo turno.",
				it: "Durante il tuo prossimo turno, questo Pokémon non può usare Lacerattacco.",
				pt: "Este Pokémon não poderá usar Ataque Cortante durante a sua próxima vez de jogar.",
				de: "Dieses Pokémon kann Schlitzender Schlag während deines nächsten Zuges nicht einsetzen."
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

	thirdParty: {
		cardmarket: 295409
	}
}

export default card
