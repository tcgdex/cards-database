import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Delcatty",
		fr: "Delcatty",
		es: "Delcatty",
		it: "Delcatty",
		pt: "Delcatty",
		de: "Enekoro"
	},
	illustrator: "Sekio",
	rarity: "Rare",
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
		en: "Skitty",
		fr: "Skitty",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Search for Friends",
				fr: "En Quête d’Amis",
				es: "Rastreo de Amigos",
				it: "Richiama Amici",
				pt: "Buscar Amigos",
				de: "Suche nach Freunden"
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may put 2 Supporter cards from your discard pile into your hand.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez ajouter 2 cartes Supporter de votre pile de défausse à votre main.",
				es: "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes poner 2 cartas de Partidario de tu pila de descartes en tu mano.",
				it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi prendere due carte Aiuto dalla tua pila degli scarti e aggiungerle a quelle che hai in mano.",
				pt: "Quando você joga este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante a sua vez de jogar, você pode colocar 2 cartas de Apoiador da sua pilha de descarte na sua mão.",
				de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du 2 Unterstützerkarten aus deinem Ablagestapel auf deine Hand nehmen."
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
				en: "Cat Kick",
				fr: "Coup d’Patte",
				es: "Patada Gato",
				it: "Calciogatto",
				pt: "Chute do Gato",
				de: "Katzenkick"
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



}

export default card
