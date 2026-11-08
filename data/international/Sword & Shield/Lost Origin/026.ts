import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [609],
	set: Set,

	name: {
		'en-us': "Chandelure",
		'fr-fr': "Lugulabre",
		'es-es': "Chandelure",
		'it-it': "Chandelure",
		'pt-br': "Chandelure",
		'de-de': "Skelabra"
	},

	illustrator: "sui",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Lampent",
		'fr-fr': "Mélancolux",
		'es-es': "Lampent",
		'it-it': "Lampent",
		'pt-br': "Lampent",
		'de-de': "Laternecto"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Mountain Roasting",
			'fr-fr': "Montagne Roussie",
			'es-es': "Abrasamontañas",
			'it-it': "Cima Rovente",
			'pt-br': "Abrasamento Montanhoso",
			'de-de': "Bergröstung"
		},

		effect: {
			'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may discard the top 3 cards of your opponent's deck.",
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez défausser les 3 cartes du dessus du deck de votre adversaire.",
			'es-es': "Cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes descartar las 3 primeras cartas de la baraja de tu rival.",
			'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi scartare le prime tre carte del mazzo del tuo avversario.",
			'pt-br': "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá descartar as 3 cartas de cima do baralho do seu oponente.",
			'de-de': "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du die obersten 3 Karten des Decks deines Gegners auf seinen Ablagestapel legen."
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Heat Blast",
			'fr-fr': "Explosion de Chaleur",
			'es-es': "Explosión de Calor",
			'it-it': "Caldobomba",
			'pt-br': "Raio de Calor",
			'de-de': "Hitzestoß"
		},

		damage: 90
	}],

	retreat: 2,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 674037,
				tcgplayer: 283897
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674037,
				tcgplayer: 283897
			}
		},
	],
}

export default card
