import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Skiploom",
		'fr-fr': "Floravol",
		'es-es': "Skiploom",
		'it-it': "Skiploom",
		'pt-br': "Skiploom",
		'de-de': "Hubelupf"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		188,
	],

	hp: 60,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Hoppip",
		'fr-fr': "Granivol",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Floral Path to the Sky",
				'fr-fr': "Voie Céleste Fleurie",
				'es-es': "Camino Floral al Cielo",
				'it-it': "Passerella Floreale",
				'pt-br': "Caminho Floral ao Céu",
				'de-de': "Himmlischer Blumenpfad"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may search your deck for Jumpluff, put this Pokémon and all cards attached to it in the Lost Zone, and put that Jumpluff in its place. Then, shuffle your deck.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher Cotovol dans votre deck, placer ce Pokémon-ci et toutes les cartes qui lui sont attachées dans la Zone Perdue, puis le remplacer par ce Cotovol. Mélangez ensuite votre deck.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes buscar en tu baraja 1 Jumpluff, poner este Pokémon y todas las cartas unidas a él en la Zona Perdida y poner ese Jumpluff en su lugar. Después, baraja las cartas de tu baraja.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi cercare nel tuo mazzo un Jumpluff, prendere questo Pokémon e tutte le carte a esso assegnate e metterli nell’area perduta, quindi mettere quel Jumpluff al suo posto. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode procurar por Jumpluff no seu baralho, colocar este Pokémon e todas as cartas ligadas a ele na Zona Perdida e colocar aquele Jumpluff em seu lugar. Em seguida, embaralhe o seu baralho.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du dein Deck nach Papungha durchsuchen, dieses Pokémon und alle an es angelegten Karten ins Nirgendwo legen und jenes Papungha an seine Stelle legen. Mische anschließend dein Deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'es-es': "Placaje",
				'it-it': "Azione",
				'pt-br': "Investida",
				'de-de': "Tackle"
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

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		'en-us': "It spreads its petals to absorb sunlight. It also floats in the air to get closer to the sun.",
	},

	thirdParty: {
		cardmarket: 365580,
		tcgplayer: 178810
	}
}

export default card
