import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Galarian Zigzagoon",
		fr: "Zigzaton de Galar",
		es: "Zigzagoon de Galar",
		it: "Zigzagoon di Galar",
		pt: "Zigzagoon de Galar",
		de: "Galar-Zigzachs"
	},

	illustrator: "kirisAki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Darkness",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Headbutt Tantrum",
				fr: "Caprice Coup de Tête",
				es: "Cabezazo Rabieta",
				it: "Bottintesta Collerico",
				pt: "Cabeçada Birrenta",
				de: "Kopfnussrappel"
			},
			effect: {
				en: "When you play this Pokémon from your hand onto your Bench during your turn, you may put 1 damage counter on 1 of your opponent’s Pokémon.",
				fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez placer un marqueur de dégâts sur l’un des Pokémon de votre adversaire.",
				es: "Cuando juegas este Pokémon de tu mano a tu Banca durante tu turno, puedes poner 1 contador de daño en 1 de los Pokémon de tu rival.",
				it: "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi mettere un segnalino danno su uno dei Pokémon del tuo avversario.",
				pt: "Quando você jogar este Pokémon da sua mão para o seu Banco durante o seu turno, você poderá colocar 1 contador de dano em 1 dos Pokémon do seu oponente.",
				de: "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du 1 Schadensmarke auf 1 Pokémon deines Gegners legen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Surprise Attack",
				fr: "Attaque Surprise",
				es: "Ataque Sorpresa",
				it: "Attacco a Sorpresa",
				pt: "Ataque Surpresa",
				de: "Überraschungsangriff"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
				es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
				it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
				pt: "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
				de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		en: "Thought to be the oldest form of Zigzagoon, it moves in zigzags and wreaks havoc upon its surroundings."
	}
}

export default card
