import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [210],
	set: Set,

	name: {
		'en-us': "Granbull",
		'fr-fr': "Granbull",
		'es-es': "Granbull",
		'it-it': "Granbull",
		'pt-br': "Granbull",
		'de-de': "Granbull"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Snubbull",
		'fr-fr': "Snubbull",
		'es-es': "Snubbull",
		'it-it': "Snubbull",
		'pt-br': "Snubbull",
		'de-de': "Snubbull"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "Akira Komayama",

	description: {
		'en-us': "Although it's popular with young people, Granbull is timid and sensitive, so it's totally incompetent as a watchdog."
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Dig Up",
			'fr-fr': "Désenfouir",
			'de-de': "Ausbuddeln",
			'es-es': "Hozar",
			'pt-br': "Desencavar",
			'it-it': "Sbucafossa"
		},

		effect: {
			'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may put up to 2 Pokémon Tool cards from your discard pile into your hand.",
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez ajouter jusqu'à 2 cartes Outil Pokémon de votre pile de défausse à votre main.",
			'de-de': "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du bis zu 2 Pokémon-Ausrüstungen aus deinem Ablagestapel auf deine Hand nehmen.",
			'es-es': "Cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes poner hasta 2 cartas de Herramienta Pokémon de tu pila de descartes en tu mano.",
			'pt-br': "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá colocar até 2 cartas de Ferramenta Pokémon da sua pilha de descarte na sua mão.",
			'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi prendere fino a due carte Oggetto Pokémon dalla tua pila degli scarti e aggiungerle alle carte che hai in mano."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure",
			'de-de': "Biss",
			'es-es': "Mordisco",
			'pt-br': "Mordida",
			'it-it': "Morso"
		},

		damage: 90
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582618,
				tcgplayer: 253282
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582618,
				tcgplayer: 253282
			}
		},
	],
}

export default card
