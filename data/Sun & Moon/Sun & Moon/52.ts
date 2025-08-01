import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Vikavolt",
		fr: "Lucanon",
		es: "Vikavolt",
		it: "Vikavolt",
		pt: "Vikavolt",
		de: "Donarion"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
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
		en: "Charjabug",
		fr: "Chrysapile",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Strong Charge",
				fr: "Charge Puissante",
				es: "Carga Fuerte",
				it: "Forte Carica",
				pt: "Carga Forte",
				de: "Kräftige Aufladung"
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for a Grass Energy card and a Lightning Energy card and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher une carte Énergie Grass et une carte Énergie Lightning dans votre deck puis les attacher à vos Pokémon, de la manière que vous voulez. Mélangez ensuite votre deck.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes buscar en tu baraja 1 carta de Energía Grass y 1 carta de Energía Lightning, y unirlas a tus Pokémon de la manera que desees. Después, baraja las cartas de tu baraja.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi cercare nel tuo mazzo una carta Energia Grass e una carta Energia Lightning e assegnarle a piacimento ai tuoi Pokémon. Poi rimischia le carte del tuo mazzo.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode procurar por 1 carta de Energia Grass e por 1 carta de Energia Lightning no seu baralho e ligá-las aos seus Pokémon como desejar. Em seguida, embaralhe o seu baralho.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du dein Deck nach 1 Grass-Energiekarte und 1 Lightning-Energiekarte durchsuchen und sie beliebig an deine Pokémon anlegen. Mische anschließend dein Deck."
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
				en: "Electro Cannon",
				fr: "Canon Élek",
				es: "Cañón Voltio",
				it: "Elettrocannone",
				pt: "Eletrocanhão",
				de: "Elektrogeschütz"
			},
			effect: {
				en: "Discard 3 Energy from this Pokémon.",
				fr: "Défaussez 3 Énergies de ce Pokémon.",
				es: "Descarta 3 Energías de este Pokémon.",
				it: "Scarta tre Energie assegnate a questo Pokémon.",
				pt: "Descarte 3 Energias deste Pokémon.",
				de: "Lege 3 Energien von diesem Pokémon auf deinen Ablagestapel."
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

	thirdParty: {
		cardmarket: 295363
	}
}

export default card
