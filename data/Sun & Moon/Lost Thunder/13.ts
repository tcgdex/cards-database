import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Skiploom",
		fr: "Floravol",
		es: "Skiploom",
		it: "Skiploom",
		pt: "Skiploom",
		de: "Hubelupf"
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
		en: "Hoppip",
		fr: "Granivol",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Floral Path to the Sky",
				fr: "Voie Céleste Fleurie",
				es: "Camino Floral al Cielo",
				it: "Passerella Floreale",
				pt: "Caminho Floral ao Céu",
				de: "Himmlischer Blumenpfad"
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for Jumpluff, put this Pokémon and all cards attached to it in the Lost Zone, and put that Jumpluff in its place. Then, shuffle your deck.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher Cotovol dans votre deck, placer ce Pokémon-ci et toutes les cartes qui lui sont attachées dans la Zone Perdue, puis le remplacer par ce Cotovol. Mélangez ensuite votre deck.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes buscar en tu baraja 1 Jumpluff, poner este Pokémon y todas las cartas unidas a él en la Zona Perdida y poner ese Jumpluff en su lugar. Después, baraja las cartas de tu baraja.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi cercare nel tuo mazzo un Jumpluff, prendere questo Pokémon e tutte le carte a esso assegnate e metterli nell’area perduta, quindi mettere quel Jumpluff al suo posto. Poi rimischia le carte del tuo mazzo.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode procurar por Jumpluff no seu baralho, colocar este Pokémon e todas as cartas ligadas a ele na Zona Perdida e colocar aquele Jumpluff em seu lugar. Em seguida, embaralhe o seu baralho.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du dein Deck nach Papungha durchsuchen, dieses Pokémon und alle an es angelegten Karten ins Nirgendwo legen und jenes Papungha an seine Stelle legen. Mische anschließend dein Deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
				es: "Placaje",
				it: "Azione",
				pt: "Investida",
				de: "Tackle"
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

	retreat: 0
}

export default card
