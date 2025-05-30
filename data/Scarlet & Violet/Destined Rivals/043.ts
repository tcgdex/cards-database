import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Slowbro",
		fr: "Flagadoss",
		de: "Lahmus",
		it: "Slowbro",
		es: "Slowbro",
		pt: "Slowbro"
	},

	illustrator: "Shinji Kanda",
	rarity: "Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Strange Behavior",
			fr: "Comportement Étrange",
			de: "Seltsames Verhalten",
			it: "Strano Comportamento",
			es: "Comportamiento Extraño",
			pt: "Comportamento Estranho"
		},

		effect: {
			en: "As often as you like during your turn, you may move 1 damage counter from 1 of your other Pokémon to this Pokémon.",
			fr: "Autant de fois que vous le voulez pendant votre tour, vous pouvez déplacer un marqueur de dégâts de l'un de vos autres Pokémon vers ce Pokémon.",
			de: "Beliebig oft während deines Zuges kannst du 1 Schadensmarke von 1 deiner anderen Pokémon auf dieses Pokémon verschieben.",
			it: "Durante il tuo turno, puoi spostare un segnalino danno da uno dei tuoi altri Pokémon a questo Pokémon tutte le volte che vuoi.",
			es: "Todas las veces que quieras durante tu turno, puedes mover 1 contador de daño de uno de tus otros Pokémon a este Pokémon.",
			pt: "Quantas vezes desejar durante o seu turno, você poderá mover 1 contador de dano de 1 dos seus outros Pokémon para este Pokémon."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Bubble Drain",
			fr: "Vide Bulle",
			de: "Blasengully",
			it: "Assorbibolla",
			es: "Drenaje Burbujas",
			pt: "Dreno de Bolha"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			pt: "Cure 30 pontos de dano deste Pokémon."
		},

		damage: 60
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card