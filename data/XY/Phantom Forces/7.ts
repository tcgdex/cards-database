import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Leavanny",
		fr: "Manternel",
		es: "Leavanny",
		it: "Leavanny",
		pt: "Leavanny",
		de: "Matrifol"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		542,
	],

	hp: 130,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Swadloon",
		fr: "Couverdure",
		es: "Swadloon",
		it: "Swadloon",
		pt: "Swadloon",
		de: "Folikon"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Coordinate",
				fr: "Composition",
				es: "Coordinar",
				it: "Abbinamento",
				pt: "Coordenada",
				de: "Kombinieren"
			},
			effect: {
				en: "Choose up to 2 of your Benched Pokémon that have no Pokémon Tools attached to them. For each of those Pokémon, search your deck for a Pokémon Tool card and attach it to that Pokémon. Shuffle your deck afterward.",
				fr: "Choisissez jusqu'à 2 de vos Pokémon de Banc qui n'ont pas de carte Outil Pokémon leur étant attachée. Pour chacun des Pokémon choisis, cherchez une carte Outil Pokémon dans votre deck et attachez-la au Pokémon. Mélangez ensuite votre deck.",
				es: "Elige hasta 2 de tus Pokémon en Banca que no tengan Herramientas Pokémon unidas a ellos. Para cada uno de esos Pokémon, busca en tu baraja 1 carta de Herramienta Pokémon y únela a ese Pokémon. Baraja las cartas de tu baraja después.",
				it: "Scegli fino a due dei tuoi Pokémon in panchina che non abbiano già un Oggetto Pokémon assegnato. Per ognuno di essi, cerca nel tuo mazzo una carta Oggetto Pokémon e assegnagliela. Poi rimischia le carte del tuo mazzo.",
				pt: "Escolha até 2 dos seus Pokémon no Banco que não possuem Ferramentas Pokémon ligadas a eles. Para cada um desses Pokémon, procure em seu baralho um card de Ferramenta Pokémon e ligue-o a esse Pokémon. Em seguida, embaralhe seus cards.",
				de: "Wähle bis zu 2 Pokémon auf deiner Bank aus, an die noch keine Pokémon-Ausrüstung angelegt ist. Durchsuche dein Deck nach 1 Pokémon-Ausrüstung für jedes dieser Pokémon und lege sie an das jeweilige Pokémon an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Leaf Storm",
				fr: "Tempête Verte",
				es: "Lluevehojas",
				it: "Verdebufera",
				pt: "Tempestade de Folhas",
				de: "Blättersturm"
			},
			effect: {
				en: "Heal 20 damage from each of your Grass Pokémon.",
				fr: "Soignez 20 dégâts à chacun de vos Pokémon Grass.",
				es: "Cura 20 puntos de daño a cada uno de tus Pokémon Grass.",
				it: "Cura ciascuno dei tuoi Pokémon Grass da 20 danni.",
				pt: "Cure 20 de danos de cada um dos seus Pokémon Grass.",
				de: "Heile 20 Schadenspunkte bei jedem deiner Grass-Pokémon."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 281808
	}
}

export default card
