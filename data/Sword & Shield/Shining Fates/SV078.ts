import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Zigzaton de Galar",
		en: "Galarian Zigzagoon",
		es: "Zigzagoon de Galar",
		it: "Zigzagoon di Galar",
		pt: "Zigzagoon de Galar",
		de: "Galar-Zigzachs"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	abilities: [{
		type: "Ability",

		name: {
			fr: "Caprice Coup de Tête",
			en: "Headbutt Tantrum",
			es: "Cabezazo Rabieta",
			it: "Bottintesta Collerico",
			pt: "Cabeçada Birrenta",
			de: "Kopfnussrappel"
		},

		effect: {
			fr: "Lorsque vous jouez ce Pokémon de votre main pour sur votre Banc pendant votre tour, vous pouvez placer un marqueur de dégâts sur l'un des Pokémon de votre adversaire.",
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may put 1 damage counter on 1 of your opponent's Pokémon.",
			es: "Cuando juegas este Pokémon de tu mano a tu Banca durante tu turno, puedes poner 1 contador de daño en 1 de los Pokémon de tu rival.",
			it: "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi mettere un segnalino danno su uno dei Pokémon del tuo avversario.",
			pt: "Quando você jogar este Pokémon da sua mão para o seu Banco durante o seu turno, você poderá colocar 1 contador de dano em 1 dos Pokémon do seu oponente.",
			de: "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du 1 Schadensmarke auf 1 Pokémon deines Gegners legen."
		}
	}],

	attacks: [{
		name: {
			fr: "Attaque Surprise",
			en: "Surprise Attack",
			es: "Ataque Sorpresa",
			it: "Attacco a Sorpresa",
			pt: "Ataque Surpresa",
			de: "Überraschungsangriff"
		},

		effect: {
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			en: "Flip a coin. If tails, this attack does nothing.",
			es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			pt: "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
			de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
		},

		damage: 30,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Basic",

	description: {
		en: "Thought to be the oldest form of Zigzagoon, it moves in zigzags and wreaks havoc upon its surroundings."
	}
}

export default card
