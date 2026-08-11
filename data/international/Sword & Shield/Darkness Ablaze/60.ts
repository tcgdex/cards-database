import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		'en-us': "Vikavolt V",
		'fr-fr': "Lucanon V",
		'es-es': "Vikavolt V",
		'it-it': "Vikavolt V",
		'pt-br': "Vikavolt V",
		'de-de': "Donarion V"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Holo Rare V",
	category: "Pokemon",
	dexId: [738],
	set: Set,
	hp: 210,

	types: [
		"Lightning",
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Paralyzing Bolt",
				'fr-fr': "Éclair Paralysant",
				'es-es': "Rayo Paralizante",
				'it-it': "Lampo Paralizzante",
				'pt-br': "Raio Paralisante",
				'de-de': "Lähmender Blitz"
			},
			effect: {
				'en-us': "During your opponent's next turn, they can't play any Item cards from their hand.",
				'fr-fr': "Pendant le prochain tour de votre adversaire, il ne peut pas jouer de cartes Objet de sa main.",
				'es-es': "Durante el próximo turno de tu rival, este no puede jugar ninguna carta de Objeto de su mano.",
				'it-it': "Durante il prossimo turno del tuo avversario, questi non può giocare le carte Strumento che ha in mano.",
				'pt-br': "Durante o próximo turno do seu oponente, ele(a) não poderá jogar nenhuma carta de Item da própria mão.",
				'de-de': "Dein Gegner kann während seines nächsten Zuges keine Itemkarten aus seiner Hand spielen."
			},
			damage: 50,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Super Zap Cannon",
				'fr-fr': "Super Élecanon",
				'es-es': "Superelectrocañón",
				'it-it': "Falcecannone Super",
				'pt-br': "Supercanhão Zap",
				'de-de': "Super-Blitzkanone"
			},
			effect: {
				'en-us': "Discard 2 Energy from this Pokémon.",
				'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
				'es-es': "Descarta 2 Energías de este Pokémon.",
				'it-it': "Scarta due Energie da questo Pokémon.",
				'pt-br': "Descarte 2 Energias deste Pokémon.",
				'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 190,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 483174,
				tcgplayer: 219411
			}
		},
	],
}

export default card
