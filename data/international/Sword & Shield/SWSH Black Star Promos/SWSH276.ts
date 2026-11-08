import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [176],
	set: Set,

	name: {
		'fr-fr': "Togetic",
		'de-de': "Togetic",
		'es-es': "Togetic",
		'pt-br': "Togetic",
		'it-it': "Togetic",
		'en-us': "Togetic"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	evolveFrom: {
		'fr-fr': "Togepi",
		'de-de': "Togepi",
		'es-es': "Togepi",
		'pt-br': "Togepi",
		'it-it': "Togepi",
		'en-us': "Togepi"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Voix de Joie",
			'de-de': "Stimme der Freude",
			'es-es': "Voz de Felicidad",
			'pt-br': "Voz da Alegria",
			'it-it': "Voce di Felicità",
			'en-us': "Voice of Happiness"
		},

		effect: {
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez soigner 30 dégâts de votre Pokémon Actif.",
			'de-de': "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du 30 Schadenspunkte bei deinem Aktiven Pokémon heilen.",
			'es-es': "Cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes curar 30 puntos de daño a tu Pokémon Activo.",
			'pt-br': "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá curar 30 pontos de dano do seu Pokémon Ativo.",
			'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi curare il tuo Pokémon attivo da 30 danni.",
			'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may heal 30 damage from your Active Pokémon."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'fr-fr': "Vent Féérique",
			'de-de': "Feenbrise",
			'es-es': "Viento Feérico",
			'pt-br': "Vento de Fada",
			'it-it': "Vento di Fata",
			'en-us': "Fairy Wind"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",

	description: {
		'en-us': "They say that it will appear before kindhearted, caring people and shower them with happiness."
	},

	thirdParty: {
		cardmarket: 684388
	}
}

export default card
