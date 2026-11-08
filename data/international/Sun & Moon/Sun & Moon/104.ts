import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Herdier",
		'fr-fr': "Ponchien",
		'es-es': "Herdier",
		'it-it': "Herdier",
		'pt-br': "Herdier",
		'de-de': "Terribark"
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		507,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Lillipup",
		'fr-fr': "Ponchiot",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Treasure Hunt",
				'fr-fr': "Chasse au Trésor",
				'es-es': "Caza del Tesoro",
				'it-it': "Cacciatesori",
				'pt-br': "Caça ao Tesouro",
				'de-de': "Schatzsuche"
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may put an Item card from your discard pile into your hand.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez ajouter une carte Objet de votre pile de défausse à votre main.",
				'es-es': "Cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes poner 1 carta de Objeto de tu pila de descartes en tu mano.",
				'it-it': "Quando giochi questo Pokémon dalla tua mano durante il tuo turno per far evolvere uno dei tuoi Pokémon, puoi prendere una carta Strumento dalla tua pila degli scarti e aggiungerla a quelle che hai in mano.",
				'pt-br': "Quando você joga este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante a sua vez de jogar, você pode colocar 1 carta de Item da sua pilha de descarte na sua mão.",
				'de-de': "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du 1 Itemkarte aus deinem Ablagestapel auf deine Hand nehmen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bite",
				'fr-fr': "Morsure",
				'es-es': "Mordisco",
				'it-it': "Morso",
				'pt-br': "Mordida",
				'de-de': "Biss"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its dense black fur grows continuously. The high cost of keeping its hard fur properly groomed make this a troublesome Pokémon to train.",
	},

	thirdParty: {
		cardmarket: 295416,
		tcgplayer: 126976
	}
}

export default card
