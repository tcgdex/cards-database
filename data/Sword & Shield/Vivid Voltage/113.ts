import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Galarian Perrserker",
		fr: "Berserkatt de Galar",
		es: "Perrserker de Galar",
		it: "Perrserker di Galar",
		pt: "Perrserker de Galar",
		de: "Galar-Mauzinger"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Galarian Meowth",
		fr: "Miaouss de Galar"
	},

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Stealy Claws",
				fr: "Griffes Chapardeuses",
				es: "Garras Ladronzuelas",
				it: "Sgraffignartigli",
				pt: "Garras de Larápio",
				de: "Stehlklauen"
			},
			effect: {
				en: "Flip 3 coins. If any of them are heads, your opponent reveals their hand. Then, for each heads, discard a Trainer card from your opponent’s hand.",
				fr: "Lancez 3 pièces. Si vous obtenez au moins un côté face, votre adversaire dévoile sa main. Puis, pour chaque côté face, défaussez une carte Dresseur de la main de votre adversaire.",
				es: "Lanza 3 monedas. Si sale cara en alguna de ellas, tu rival enseña las cartas de su mano. Después, por cada cara, descarta 1 carta de Entrenador de la mano de tu rival.",
				it: "Lancia tre volte una moneta. Se esce almeno una volta testa, il tuo avversario mostra le carte che ha in mano. Poi, ogni volta che esce testa, scarta una carta Allenatore dalla mano del tuo avversario.",
				pt: "Jogue 3 moedas. Se qualquer uma delas sair cara, seu oponente revelará a própria mão. Em seguida, para cada cara, descarte 1 carta de Treinador da mão do seu oponente.",
				de: "Wirf 3 Münzen. Zeigt mindestens 1 Kopf, zeigt dir dein Gegner seine Handkarten. Lege anschließend pro Kopf 1 Trainerkarte aus der Hand deines Gegners auf seinen Ablagestapel."
			},
			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Claw Slash",
				fr: "Tranch’Griffe",
				es: "Cuchillada Garra",
				it: "Lacerartiglio",
				pt: "Golpe de Garra",
				de: "Klauenschlitzer"
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "What appears to be an iron helmet is actually hardened hair. This Pokémon lives for the thrill of battle."
	}
}

export default card
