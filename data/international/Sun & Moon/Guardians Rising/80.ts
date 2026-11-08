import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Sableye",
		'fr-fr': "Ténéfix",
		'es-es': "Sableye",
		'it-it': "Sableye",
		'pt-br': "Sableye",
		'de-de': "Zobiris"
	},

	illustrator: "Aya Kusube",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		302,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Limitation",
				'fr-fr': "Restriction",
				'es-es': "Limitación",
				'it-it': "Costrizione",
				'pt-br': "Limitação",
				'de-de': "Einschränken"
			},
			effect: {
				'en-us': "Your opponent can’t play any Supporter cards from their hand during their next turn.",
				'fr-fr': "Votre adversaire ne peut pas jouer de cartes Supporter de sa main pendant son prochain tour.",
				'es-es': "Tu rival no puede jugar ninguna carta de Partidario de su mano durante su próximo turno.",
				'it-it': "Il tuo avversario non può giocare le carte Aiuto che ha in mano durante il suo prossimo turno.",
				'pt-br': "Seu oponente não poderá jogar nenhuma carta de Apoiador da própria mão durante a próxima vez dele(a) jogar.",
				'de-de': "Dein Gegner kann während seines nächsten Zuges keine Unterstützerkarten aus seiner Hand spielen."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Scratch",
				'fr-fr': "Griffe",
				'es-es': "Arañazo",
				'it-it': "Graffio",
				'pt-br': "Arranhão",
				'de-de': "Kratzer"
			},

			damage: 20,

		},
	],

	retreat: 1,

	description: {
		'en-us': "It's a fiend for gemstones, so it stalks Carbink. Unfortunately, Gabite almost always grabs them first.",
	},

	thirdParty: {
		cardmarket: 297538,
		tcgplayer: 130992
	}
}

export default card
