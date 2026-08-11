import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Cryogonal",
		'fr-fr': "Hexagel",
		'es-es': "Cryogonal",
		'it-it': "Cryogonal",
		'pt-br': "Cryogonal",
		'de-de': "Frigometri"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		615,
	],

	hp: 90,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Frozen Lock",
				'fr-fr': "Blocage Givrant",
				'es-es': "Bloqueo Gélido",
				'it-it': "Blocco Gelido",
				'pt-br': "Trava Congelante",
				'de-de': "Frostsperre"
			},
			effect: {
				'en-us': "Your opponent can’t play any Item cards from their hand during their next turn.",
				'fr-fr': "Votre adversaire ne peut pas jouer de carte Objet de sa main pendant son prochain tour.",
				'es-es': "Tu rival no puede jugar ninguna carta de Objeto de su mano durante su próximo turno.",
				'it-it': "Il tuo avversario non può giocare le carte Strumento che ha in mano durante il suo prossimo turno.",
				'pt-br': "Seu oponente não poderá jogar nenhuma carta de Item da própria mão durante a próxima vez dele(a) jogar.",
				'de-de': "Dein Gegner kann während seines nächsten Zuges keine Itemkarten aus seiner Hand spielen."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "They are born in snow clouds. They use chains made of ice crystals to capture prey.",
	},

	thirdParty: {
		cardmarket: 388057,
		tcgplayer: 194967
	}
}

export default card
