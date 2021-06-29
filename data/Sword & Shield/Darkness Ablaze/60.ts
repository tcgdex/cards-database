import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Vikavolt V",
		fr: "Lucanon V",
		es: "Vikavolt V",
		it: "Vikavolt V",
		pt: "Vikavolt V",
		de: "Donarion V"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Rare",
	category: "Pokemon",
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
				en: "Paralyzing Bolt",
				fr: "Éclair Paralysant",
				es: "Rayo Paralizante",
				it: "Lampo Paralizzante",
				pt: "Raio Paralisante",
				de: "Lähmender Blitz"
			},
			effect: {
				en: "During your opponent’s next turn, they can’t play any Item cards from their hand.",
				fr: "Pendant le prochain tour de votre adversaire, il ne peut pas jouer de cartes Objet de sa main.",
				es: "Durante el próximo turno de tu rival, este no puede jugar ninguna carta de Objeto de su mano.",
				it: "Durante il prossimo turno del tuo avversario, questi non può giocare le carte Strumento che ha in mano.",
				pt: "Durante o próximo turno do seu oponente, ele(a) não poderá jogar nenhuma carta de Item da própria mão.",
				de: "Dein Gegner kann während seines nächsten Zuges keine Itemkarten aus seiner Hand spielen."
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
				en: "Super Zap Cannon",
				fr: "Super Élecanon",
				es: "Superelectrocañón",
				it: "Falcecannone Super",
				pt: "Supercanhão Zap",
				de: "Super-Blitzkanone"
			},
			effect: {
				en: "Discard 2 Energy from this Pokémon.",
				fr: "Défaussez 2 Énergies de ce Pokémon.",
				es: "Descarta 2 Energías de este Pokémon.",
				it: "Scarta due Energie da questo Pokémon.",
				pt: "Descarte 2 Energias deste Pokémon.",
				de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
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
	regulationMark: "D"
}

export default card
