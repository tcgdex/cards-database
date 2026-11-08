import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [176],
	set: Set,

	name: {
		'en-us': "Togetic",
		'fr-fr': "Togetic",
		'es-es': "Togetic",
		'it-it': "Togetic",
		'pt-br': "Togetic",
		'de-de': "Togetic"
	},

	illustrator: "Tika Matsuno",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Togepi",
		'fr-fr': "Togepi",
		'es-es': "Togepi",
		'it-it': "Togepi",
		'pt-br': "Togepi",
		'de-de': "Togepi"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Voice of Happiness",
			'fr-fr': "Voix de Joie",
			'es-es': "Voz de Felicidad",
			'it-it': "Voce di Felicità",
			'pt-br': "Voz da Alegria",
			'de-de': "Stimme der Freude"
		},

		effect: {
			'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may heal 30 damage from your Active Pokémon.",
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez soigner 30 dégâts de votre Pokémon Actif.",
			'es-es': "Cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes curar 30 puntos de daño a tu Pokémon Activo.",
			'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi curare il tuo Pokémon attivo da 30 danni.",
			'pt-br': "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá curar 30 pontos de dano do seu Pokémon Ativo.",
			'de-de': "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du 30 Schadenspunkte bei deinem Aktiven Pokémon heilen."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Fairy Wind",
			'fr-fr': "Vent Féérique",
			'es-es': "Viento Feérico",
			'it-it': "Vento di Fata",
			'pt-br': "Vento de Fada",
			'de-de': "Feenbrise"
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
		'en-us': "They say that it will appear before kindhearted, caring people and shower them with happiness.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658621,
				tcgplayer: 272257
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658621,
				tcgplayer: 272257
			}
		},
	],
}

export default card
