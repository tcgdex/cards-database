import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [468],
	set: Set,

	name: {
		'en-us': "Togekiss",
		'fr-fr': "Togekiss",
		'es-es': "Togekiss",
		'it-it': "Togekiss",
		'pt-br': "Togekiss",
		'de-de': "Togekiss"
	},

	illustrator: "sui",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Togetic",
		'fr-fr': "Togetic",
		'es-es': "Togetic",
		'it-it': "Togetic",
		'pt-br': "Togetic",
		'de-de': "Togetic"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Shine of Happiness",
			'fr-fr': "Rayonnement de Joie",
			'es-es': "Brillo de Felicidad",
			'it-it': "Bagliore di Felicità",
			'pt-br': "Brilho da Alegria",
			'de-de': "Glanz der Freude"
		},

		effect: {
			'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may heal 90 damage from your Active Pokémon.",
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez soigner 90 dégâts de votre Pokémon Actif.",
			'es-es': "Cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes curar 90 puntos de daño a tu Pokémon Activo.",
			'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi curare il tuo Pokémon attivo da 90 danni.",
			'pt-br': "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá curar 90 pontos de dano do seu Pokémon Ativo.",
			'de-de': "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du 90 Schadenspunkte bei deinem Aktiven Pokémon heilen."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Magical Shot",
			'fr-fr': "Coup Magique",
			'es-es': "Disparo Mágico",
			'it-it': "Magicolpo",
			'pt-br': "Tiro Mágico",
			'de-de': "Magischer Schuss"
		},

		damage: 120
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
		'en-us': "These Pokémon are never seen anywhere near conflict or turmoil. In recent times, they've hardly been seen at all.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 658623,
				tcgplayer: 272258
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658623,
				tcgplayer: 272258
			}
		},
	],
}

export default card
