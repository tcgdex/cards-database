import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Porygon-Z",
		'fr-fr': "Porygon-Z",
		'es-es': "Porygon-Z",
		'it-it': "Porygon-Z",
		'pt-br': "Porygon-Z",
		'de-de': "Porygon-Z"
	},

	illustrator: "MAHOU",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		474,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Porygon2",
		'fr-fr': "Porygon2",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Initialize",
				'fr-fr': "Initialisation",
				'es-es': "Inicializar",
				'it-it': "Inizializzazione",
				'pt-br': "Inicializar",
				'de-de': "Initialisieren"
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may devolve each of your opponent’s evolved Pokémon by putting the highest Stage Evolution card on it into your opponent’s hand.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez faire dés-évoluer chacun des Pokémon évolués de votre adversaire en plaçant la carte du niveau d’Évolution le plus élevé dans la main de votre adversaire.",
				'es-es': "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes involucionar a cada uno de los Pokémon evolucionados de tu rival poniendo la carta de Evolución de fase más alta que tenga sobre él en la mano de tu rival.",
				'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi annullare l’evoluzione di ciascuno dei Pokémon evoluti del tuo avversario mettendone la carta Evoluzione di fase più alta nella sua mano.",
				'pt-br': "Quando você joga este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante a sua vez de jogar, você pode reverter a evolução de cada um dos Pokémon evoluídos do seu oponente colocando a carta de Evolução de Estágio mais alta sobre eles na mão do seu oponente.",
				'de-de': "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du jedes entwickelte Pokémon deines Gegners rückentwickeln, indem du ihm die höchste auf jenem Pokémon liegende Entwicklungskarte auf seine Hand gibst."
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
				'en-us': "Zap Cannon",
				'fr-fr': "Élecanon",
				'es-es': "Electrocañón",
				'it-it': "Falcecannone",
				'pt-br': "Canhão Zap",
				'de-de': "Blitzkanone"
			},
			effect: {
				'en-us': "This Pokémon can’t use Zap Cannon during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas utiliser Élecanon pendant votre prochain tour.",
				'es-es': "Este Pokémon no puede usar Electrocañón durante tu próximo turno.",
				'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Falcecannone.",
				'pt-br': "Este Pokémon não poderá usar Canhão Zap durante a sua próxima vez de jogar.",
				'de-de': "Dieses Pokémon kann Blitzkanone während deines nächsten Zuges nicht einsetzen."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "In order to create a more advanced Pokémon, an additional program was installed, but apparently it contained a defect that makes it move oddly.",
	},

	thirdParty: {
		cardmarket: 299506,
		tcgplayer: 138601
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	]
}

export default card
