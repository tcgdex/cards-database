import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Glalie EX",
		fr: "Oniglali EX",
		es: "Glalie EX",
		it: "Glalie EX",
		pt: "Glalie EX",
		de: "Firnontor EX"
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
				en: "Ice Breath",
				fr: "Haleine de Glace",
				es: "Aliento Gélido",
				it: "Ghiacciospiro",
				pt: "Hálito de Gelo",
				de: "Eishauch"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				de: "Wirf 1 Münze. Bei \"Kopf\" ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Instant Freeze",
				fr: "Gel Instantané",
				es: "Congelación Instantánea",
				it: "Gelata",
				pt: "Congelamento Instantâneo",
				de: "Sofortige Eisstarre"
			},
			effect: {
				en: "If you have the same number of cards in your hand as your opponent, this attack does 100 more damage.",
				fr: "Si vous avez le même nombre de cartes dans votre main que votre adversaire, cette attaque inflige 100 dégâts supplémentaires.",
				es: "Si tienes el mismo número de cartas en tu mano que tu rival, este ataque hace 100 puntos de daño más.",
				it: "Se hai lo stesso numero di carte in mano rispetto al tuo avversario, questo attacco infligge 100 danni in più.",
				pt: "Se você tiver o mesmo número de cards em sua mão que seu oponente, este ataque causará 100 de danos adicionais.",
				de: "Wenn du dieselbe Anzahl Karten auf der Hand hast wie dein Gegner, fügt dieser Angriff 100 weitere Schadenspunkte zu."
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
	stage: "Basic"
}

export default card
