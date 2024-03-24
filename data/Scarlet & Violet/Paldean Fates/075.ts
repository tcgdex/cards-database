import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Squawkabilly ex",
		fr: "Tapatoès-ex",
		es: "Squawkabilly ex",
		it: "Squawkabilly-ex",
		pt: "Squawkabilly ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 160,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Squawk and Seize",
			fr: "Tapage et Prise",
			es: "Graznido y Captura",
			it: "Strilla e Afferra",
			pt: "Grasnar e Aproveitar"
		},

		effect: {
			en: "Once during your first turn, you may discard your hand and draw 6 cards. You can't use more than 1 Squawk and Seize Ability during your turn.",
			fr: "Une fois pendant votre premier tour, vous pouvez défausser votre main et piocher 6 cartes. Vous ne pouvez utiliser qu'un talent Tapage et Prise pendant votre tour.",
			es: "Una vez durante tu primer turno, puedes descartar las cartas de tu mano y robar 6 cartas. No puedes usar más de una habilidad Graznido y Captura durante tu turno.",
			it: "Una sola volta durante il tuo primo turno, puoi scartare le carte che hai in mano e pescare sei carte. Non puoi usare più di un'abilità Strilla e Afferra durante il tuo turno.",
			pt: "Uma vez durante o seu primeiro turno, você poderá descartar a sua mão e comprar 6 cartas. Você não pode usar mais de 1 Habilidade Grasnar e Aproveitar durante o seu turno."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Motivate",
			fr: "Motivation",
			es: "Motivar",
			it: "Incentivo",
			pt: "Motivação"
		},

		effect: {
			en: "Attach up to 2 Basic Energy cards from your discard pile to 1 of your Benched Pokémon.",
			fr: "Attachez jusqu'à 2 cartes Énergie de base de votre pile de défausse à l'un de vos Pokémon de Banc.",
			es: "Une hasta 2 cartas de Energía Básica de tu pila de descartes a uno de tus Pokémon en Banca.",
			it: "Assegna a uno dei tuoi Pokémon in panchina fino a due carte Energia base dalla tua pila degli scarti.",
			pt: "Ligue até 2 cartas de Energia Básica da sua pilha de descarte a 1 dos seus Pokémon no Banco."
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card