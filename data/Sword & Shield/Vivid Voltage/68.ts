import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Banette",
		fr: "Branette",
		es: "Banette",
		it: "Banette",
		pt: "Banette",
		de: "Banette"
	},

	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Shuppet",
		fr: "Polichombr"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Curse of Devolution",
				fr: "Dés-Évolution Maudite",
				es: "Maldición de Involución",
				it: "Maledizione Devolutiva",
				pt: "Maldição da Involução",
				de: "Rückentwicklungsfluch"
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may devolve 1 of your opponent’s Benched evolved Pokémon by putting the highest Stage Evolution card on it into your opponent’s hand.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez faire dés-évoluer l’un des Pokémon de Banc évolués de votre adversaire en plaçant la carte Évolution la plus élevée dans la main de votre adversaire.",
				es: "Cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes involucionar 1 de los Pokémon evolucionados en Banca de tu rival poniendo la carta de Evolución de fase más alta que tenga sobre él en la mano de tu rival.",
				it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi annullare l’evoluzione di uno dei Pokémon evoluti nella panchina del tuo avversario mettendone la carta Evoluzione di fase più alta nella sua mano.",
				pt: "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá reverter a evolução de 1 dos Pokémon evoluídos no Banco do seu oponente colocando a carta de Evolução de Estágio mais alta sobre ele na mão do seu oponente.",
				de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du 1 entwickeltes Pokémon auf der Bank deines Gegners rückentwickeln, indem du deinem Gegner die Karte mit der höchsten Entwicklungsstufe auf die Hand gibst."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Spooky Shot",
				fr: "Tir Effrayant",
				es: "Disparo Embrujado",
				it: "Colpomistero",
				pt: "Tiro Assustador",
				de: "Spukschuss"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,
	regulationMark: "D"
}

export default card
