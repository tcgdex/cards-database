import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		fr: "Togetic",
		de: "Togetic",
		es: "Togetic",
		pt: "Togetic",
		it: "Togetic",
		en: "Togetic"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	evolveFrom: {
		fr: "Togepi",
		de: "Togepi",
		es: "Togepi",
		pt: "Togepi",
		it: "Togepi",
		en: "Togepi"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Voix de Joie",
			de: "Stimme der Freude",
			es: "Voz de Felicidad",
			pt: "Voz da Alegria",
			it: "Voce di Felicità",
			en: "Voice of Happiness"
		},

		effect: {
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez soigner 30 dégâts de votre Pokémon Actif.",
			de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du 30 Schadenspunkte bei deinem Aktiven Pokémon heilen.",
			es: "Cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes curar 30 puntos de daño a tu Pokémon Activo.",
			pt: "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá curar 30 pontos de dano do seu Pokémon Ativo.",
			it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi curare il tuo Pokémon attivo da 30 danni.",
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may heal 30 damage from your Active Pokémon."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			fr: "Vent Féérique",
			de: "Feenbrise",
			es: "Viento Feérico",
			pt: "Vento de Fada",
			it: "Vento di Fata",
			en: "Fairy Wind"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "F",

	description: {
		en: "They say that it will appear before kindhearted, caring people and shower them with happiness."
	}
}

export default card