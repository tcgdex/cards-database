import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Drizzile",
		'fr-fr': "Arrozard",
		'es-es': "Drizzile",
		'it-it': "Drizzile",
		'pt-br': "Drizzile",
		'de-de': "Phlegleon"
	},

	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Sobble",
		'fr-fr': "Larméléon",
		'es-es': "Sobble",
		'it-it': "Sobble",
		'pt-br': "Sobble",
		'de-de': "Memmeon"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Shady Dealings",
				'fr-fr': "Affaires Louches",
				'es-es': "Negocios Turbios",
				'it-it': "Trama Sospetta",
				'pt-br': "Negociações Secretas",
				'de-de': "Dunkle Machenschaften"
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may search your deck for a Trainer card, reveal it, and put it into your hand. Then, shuffle your deck.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez chercher dans votre deck une carte Dresseur, la révéler, puis l'ajouter à votre main. Mélangez ensuite votre deck.",
				'es-es': "Cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes buscar en tu baraja hasta 2 cartas de Entrenador, enseñarlas y ponerlas en tu mano. Después, baraja las cartas de tu baraja.",
				'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi cercare nel tuo mazzo fino a due carte Allenatore, mostrarle e aggiungerle a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá procurar por até 2 cartas de Treinador no seu baralho, revelá-las e colocá-las na sua mão. Em seguida, embaralhe o seu baralho.",
				'de-de': "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du dein Deck nach bis zu 2 Trainerkarten durchsuchen, sie deinem Gegner zeigen und sie auf deine Hand nehmen. Mische anschließend dein Deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Water Drip",
				'fr-fr': "Goutte à Goutte",
				'es-es': "Goteo de Agua",
				'it-it': "Gocciolacqua",
				'pt-br': "Gotejo",
				'de-de': "Spritzwasser"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		'en-us': "A clever combatant, this Pokémon battles using water balloons created with moisture secreted from its palms."
	},

	dexId: [817],

	thirdParty: {
		cardmarket: 436419,
		tcgplayer: 208353
	}
}

export default card
