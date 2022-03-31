import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Tornadus",
		fr: "Boréas",
		es: "Tornadus",
		it: "Tornadus",
		pt: "Tornadus",
		de: "Boreos"
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
				en: "Push Down",
				fr: "Recul",
				es: "Oprimir",
				it: "Spintonare",
				pt: "Rebaixar",
				de: "Runterdrücken"
			},
			effect: {
				en: "You may have your opponent switch his or her Active Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Vous pouvez demander à votre adversaire d'échanger son Pokémon Actif avec l'un de ses Pokémon de Banc.",
				es: "Puedes hacer que tu rival cambie su Pokémon Activo por 1 de sus Pokémon en Banca.",
				it: "Puoi far scambiare al tuo avversario il suo Pokémon attivo con uno dei suoi Pokémon in panchina.",
				pt: "Você poderá fazer com que seu oponente troque o Pokémon Ativo por 1 dos Pokémon no Banco dele ou dela.",
				de: "Du kannst deinen Gegner dazu veranlassen, sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank auszutauschen."
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
				en: "Twister Throw",
				fr: "Lancer Orageux",
				es: "Tiro Tornado",
				it: "Lancio Tornado",
				pt: "Arremesso Twister",
				de: "Wirbelwurf"
			},
			effect: {
				en: "If you have the same number of cards in your hand as your opponent, this attack does 60 more damage.",
				fr: "Si vous avez le même nombre de cartes dans votre main que votre adversaire, cette attaque inflige 60 dégâts supplémentaires.",
				es: "Si tienes el mismo número de cartas en tu mano que tu rival, este ataque hace 60 puntos de daño más.",
				it: "Se hai lo stesso numero di carte in mano rispetto al tuo avversario, questo attacco infligge 60 danni in più.",
				pt: "Se você tiver o mesmo número de cards em sua mão do que seu oponente, este ataque causará 60 de danos adicionais.",
				de: "Wenn du die gleiche Anzahl Karten auf der Hand hast wie dein Gegner, fügt dieser Angriff 60 weitere Schadenspunkte zu."
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



}

export default card
