import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Slowbro",
		fr: "Flagadoss",
		es: "Slowbro",
		it: "Slowbro",
		pt: "Slowbro",
		de: "Lahmus"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Strange Behavior",
			fr: "Comportement Étrange",
			es: "Comportamiento Extraño",
			it: "Strano Comportamento",
			pt: "Comportamento Estranho",
			de: "Seltsames Verhalten"
		},

		effect: {
			en: "As often as you like during your turn, you may move 1 damage counter from 1 of your other Pokémon to this Pokémon.",
			fr: "Autant de fois que vous le voulez pendant votre tour, vous pouvez déplacer un marqueur de dégâts de l'un de vos autres Pokémon vers ce Pokémon.",
			es: "Todas las veces que quieras durante tu turno, puedes mover 1 contador de daño de uno de tus otros Pokémon a este Pokémon.",
			it: "Durante il tuo turno, puoi spostare un segnalino danno da uno dei tuoi altri Pokémon a questo Pokémon tutte le volte che vuoi.",
			pt: "Quantas vezes desejar durante o seu turno, você poderá mover 1 contador de dano de 1 dos seus outros Pokémon para este Pokémon.",
			de: "Beliebig oft während deines Zuges kannst du 1 Schadensmarke von 1 deiner anderen Pokémon auf dieses Pokémon verschieben."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Bubble Drain",
			fr: "Vide Bulle",
			es: "Drenaje Burbujas",
			it: "Assorbibolla",
			pt: "Dreno de Bolha",
			de: "Blasengully"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			pt: "Cure 30 pontos de dano deste Pokémon.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 60
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card