import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Glalie EX",
		'fr-fr': "Oniglali EX",
		'es-es': "Glalie EX",
		'it-it': "Glalie EX",
		'pt-br': "Glalie EX",
		'de-de': "Firnontor EX"
	},

	illustrator: "Ryo Ueda",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		362,
	],

	hp: 170,

	types: [
		"Water",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Ice Breath",
				'fr-fr': "Haleine de Glace",
				'es-es': "Aliento Gélido",
				'it-it': "Ghiacciospiro",
				'pt-br': "Hálito de Gelo",
				'de-de': "Eishauch"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Instant Freeze",
				'fr-fr': "Gel Instantané",
				'es-es': "Congelación Instantánea",
				'it-it': "Gelata",
				'pt-br': "Congelamento Instantâneo",
				'de-de': "Sofortige Eisstarre"
			},
			effect: {
				'en-us': "If you have the same number of cards in your hand as your opponent, this attack does 100 more damage.",
				'fr-fr': "Si vous avez le même nombre de cartes dans votre main que votre adversaire, cette attaque inflige 100 dégâts supplémentaires.",
				'es-es': "Si tienes el mismo número de cartas en tu mano que tu rival, este ataque hace 100 puntos de daño más.",
				'it-it': "Se hai lo stesso numero di carte in mano rispetto al tuo avversario, questo attacco infligge 100 danni in più.",
				'pt-br': "Se você tiver o mesmo número de cards em sua mão que seu oponente, este ataque causará 100 de danos adicionais.",
				'de-de': "Wenn du dieselbe Anzahl Karten auf der Hand hast wie dein Gegner, fügt dieser Angriff 100 weitere Schadenspunkte zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,
	stage: "Basic",

	thirdParty: {
		cardmarket: 286401,
		tcgplayer: 107274
	}
}

export default card
