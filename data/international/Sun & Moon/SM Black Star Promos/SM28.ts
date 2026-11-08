import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Vikavolt",
		'fr-fr': "Lucanon",
		'es-es': "Vikavolt",
		'it-it': "Vikavolt",
		'pt-br': "Vikavolt",
		'de-de': "Donarion"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		738,
	],
	hp: 150,
	types: [
		"Lightning",
	],
	evolveFrom: {
		'en-us': "Charjabug",
		'fr-fr': "Chrysapile",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Strong Charge",
				'fr-fr': "Charge Puissante",
				'es-es': "Carga Fuerte",
				'it-it': "Forte Carica",
				'pt-br': "Carga Forte",
				'de-de': "Kräftige Aufladung"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may search your deck for a Grass Energy card and a Lightning Energy card and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher une carte Énergie Grass et une carte Énergie Lightning dans votre deck puis les attacher à vos Pokémon, de la manière que vous voulez. Mélangez ensuite votre deck.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes buscar en tu baraja 1 carta de Energía Grass y 1 carta de Energía Lightning, y unirlas a tus Pokémon de la manera que desees. Después, baraja las cartas de tu baraja.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi cercare nel tuo mazzo una carta Energia Grass e una carta Energia Lightning e assegnarle a piacimento ai tuoi Pokémon. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode procurar por 1 carta de Energia Grass e por 1 carta de Energia Lightning no seu baralho e ligá-las aos seus Pokémon como desejar. Em seguida, embaralhe o seu baralho.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du dein Deck nach 1 Grass-Energiekarte und 1 Lightning-Energiekarte durchsuchen und sie beliebig an deine Pokémon anlegen. Mische anschließend dein Deck."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Electro Cannon",
				'fr-fr': "Canon Élek",
				'es-es': "Cañón Voltio",
				'it-it': "Elettrocannone",
				'pt-br': "Eletrocanhão",
				'de-de': "Elektrogeschütz"
			},
			effect: {
				'en-us': "Discard 3 Energy from this Pokémon.",
				'fr-fr': "Défaussez 3 Énergies de ce Pokémon.",
				'es-es': "Descarta 3 Energías de este Pokémon.",
				'it-it': "Scarta tre Energie assegnate a questo Pokémon.",
				'pt-br': "Descarte 3 Energias deste Pokémon.",
				'de-de': "Lege 3 Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 150,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 3,




	description: {
		'en-us': "It produces electricity via an electrical organ in its abdomen. It overwhelms bird Pokémon with shocking beams of electrical energy.",
	},
}

export default card
