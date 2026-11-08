import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Luxio",
		'fr-fr': "Luxio",
		'es-es': "Luxio",
		'it-it': "Luxio",
		'pt-br': "Luxio",
		'de-de': "Luxio"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		404,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Shinx",
		'fr-fr': "Lixy",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Disconnect",
				'fr-fr': "Déconnexion",
				'es-es': "Desconectar",
				'it-it': "Disconnessione",
				'pt-br': "Desconexão",
				'de-de': "Unterbrechen"
			},
			effect: {
				'en-us': "Your opponent can’t play any Item cards from their hand during their next turn.",
				'fr-fr': "Votre adversaire ne peut pas jouer de carte Objet de sa main pendant son prochain tour.",
				'es-es': "Tu rival no puede jugar ninguna carta de Objeto de su mano durante su próximo turno.",
				'it-it': "Il tuo avversario non può giocare le carte Strumento che ha in mano durante il suo prossimo turno.",
				'pt-br': "Seu oponente não poderá jogar nenhuma carta de Item da própria mão durante a próxima vez dele(a) jogar.",
				'de-de': "Dein Gegner kann während seines nächsten Zuges keine Itemkarten aus seiner Hand spielen."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Strong electricity courses through the tips of its sharp claws. A light scratch causes fainting in foes.",
	},

	thirdParty: {
		cardmarket: 315977,
		tcgplayer: 157664
	}
}

export default card
