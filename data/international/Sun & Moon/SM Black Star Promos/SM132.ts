import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Delcatty",
		'fr-fr': "Delcatty",
		'es-es': "Delcatty",
		'it-it': "Delcatty",
		'pt-br': "Delcatty",
		'de-de': "Enekoro"
	},
	illustrator: "0313",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		301,
	],
	hp: 90,
	types: [
		"Colorless",
	],
	evolveFrom: {
		'en-us': "Skitty",
		'fr-fr': "Skitty",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Search for Friends",
				'fr-fr': "En Quête d’Amis",
				'es-es': "Rastreo de Amigos",
				'it-it': "Richiama Amici",
				'pt-br': "Buscar Amigos",
				'de-de': "Suche nach Freunden"
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may put 2 Supporter cards from your discard pile into your hand.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez ajouter 2 cartes Supporter de votre pile de défausse à votre main.",
				'es-es': "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes poner 2 cartas de Partidario de tu pila de descartes en tu mano.",
				'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi prendere due carte Aiuto dalla tua pila degli scarti e aggiungerle a quelle che hai in mano.",
				'pt-br': "Quando você joga este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante a sua vez de jogar, você pode colocar 2 cartas de Apoiador da sua pilha de descarte na sua mão.",
				'de-de': "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du 2 Unterstützerkarten aus deinem Ablagestapel auf deine Hand nehmen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Cat Kick",
				'fr-fr': "Coup d’Patte",
				'es-es': "Patada Gato",
				'it-it': "Calciogatto",
				'pt-br': "Chute do Gato",
				'de-de': "Katzenkick"
			},

			damage: 40,

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
		'en-us': "It is highly popular among female Trainers for its sublime fur. It does not keep a nest.",
	},
}

export default card
