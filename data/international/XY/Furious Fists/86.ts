import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Tornadus",
		'fr-fr': "Boréas",
		'es-es': "Tornadus",
		'it-it': "Tornadus",
		'pt-br': "Tornadus",
		'de-de': "Boreos"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		641,
	],

	hp: 110,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Push Down",
				'fr-fr': "Recul",
				'es-es': "Oprimir",
				'it-it': "Spintonare",
				'pt-br': "Rebaixar",
				'de-de': "Runterdrücken"
			},
			effect: {
				'en-us': "You may have your opponent switch his or her Active Pokémon with 1 of his or her Benched Pokémon.",
				'fr-fr': "Vous pouvez demander à votre adversaire d'échanger son Pokémon Actif avec l'un de ses Pokémon de Banc.",
				'es-es': "Puedes hacer que tu rival cambie su Pokémon Activo por 1 de sus Pokémon en Banca.",
				'it-it': "Puoi far scambiare al tuo avversario il suo Pokémon attivo con uno dei suoi Pokémon in panchina.",
				'pt-br': "Você poderá fazer com que seu oponente troque o Pokémon Ativo por 1 dos Pokémon no Banco dele ou dela.",
				'de-de': "Du kannst deinen Gegner dazu veranlassen, sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank auszutauschen."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Twister Throw",
				'fr-fr': "Lancer Orageux",
				'es-es': "Tiro Tornado",
				'it-it': "Lancio Tornado",
				'pt-br': "Arremesso Twister",
				'de-de': "Wirbelwurf"
			},
			effect: {
				'en-us': "If you have the same number of cards in your hand as your opponent, this attack does 60 more damage.",
				'fr-fr': "Si vous avez le même nombre de cartes dans votre main que votre adversaire, cette attaque inflige 60 dégâts supplémentaires.",
				'es-es': "Si tienes el mismo número de cartas en tu mano que tu rival, este ataque hace 60 puntos de daño más.",
				'it-it': "Se hai lo stesso numero di carte in mano rispetto al tuo avversario, questo attacco infligge 60 danni in più.",
				'pt-br': "Se você tiver o mesmo número de cards em sua mão do que seu oponente, este ataque causará 60 de danos adicionais.",
				'de-de': "Wenn du die gleiche Anzahl Karten auf der Hand hast wie dein Gegner, fügt dieser Angriff 60 weitere Schadenspunkte zu."
			},
			damage: "60+",

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
		'en-us': "The lower half of its body is wrapped in a cloud of energy. It zooms through the sky at 200 mph.",
	},

	thirdParty: {
		cardmarket: 281750,
		tcgplayer: 92266
	}
}

export default card
