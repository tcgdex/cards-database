import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Leavanny",
		'fr-fr': "Manternel",
		'es-es': "Leavanny",
		'it-it': "Leavanny",
		'pt-br': "Leavanny",
		'de-de': "Matrifol"
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
		'en-us': "Swadloon",
		'fr-fr': "Couverdure",
		'es-es': "Swadloon",
		'it-it': "Swadloon",
		'pt-br': "Swadloon",
		'de-de': "Folikon"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Coordinate",
				'fr-fr': "Composition",
				'es-es': "Coordinar",
				'it-it': "Abbinamento",
				'pt-br': "Coordenada",
				'de-de': "Kombinieren"
			},
			effect: {
				'en-us': "Choose up to 2 of your Benched Pokémon that have no Pokémon Tools attached to them. For each of those Pokémon, search your deck for a Pokémon Tool card and attach it to that Pokémon. Shuffle your deck afterward.",
				'fr-fr': "Choisissez jusqu'à 2 de vos Pokémon de Banc qui n'ont pas de carte Outil Pokémon leur étant attachée. Pour chacun des Pokémon choisis, cherchez une carte Outil Pokémon dans votre deck et attachez-la au Pokémon. Mélangez ensuite votre deck.",
				'es-es': "Elige hasta 2 de tus Pokémon en Banca que no tengan Herramientas Pokémon unidas a ellos. Para cada uno de esos Pokémon, busca en tu baraja 1 carta de Herramienta Pokémon y únela a ese Pokémon. Baraja las cartas de tu baraja después.",
				'it-it': "Scegli fino a due dei tuoi Pokémon in panchina che non abbiano già un Oggetto Pokémon assegnato. Per ognuno di essi, cerca nel tuo mazzo una carta Oggetto Pokémon e assegnagliela. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Escolha até 2 dos seus Pokémon no Banco que não possuem Ferramentas Pokémon ligadas a eles. Para cada um desses Pokémon, procure em seu baralho um card de Ferramenta Pokémon e ligue-o a esse Pokémon. Em seguida, embaralhe seus cards.",
				'de-de': "Wähle bis zu 2 Pokémon auf deiner Bank aus, an die noch keine Pokémon-Ausrüstung angelegt ist. Durchsuche dein Deck nach 1 Pokémon-Ausrüstung für jedes dieser Pokémon und lege sie an das jeweilige Pokémon an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Leaf Storm",
				'fr-fr': "Tempête Verte",
				'es-es': "Lluevehojas",
				'it-it': "Verdebufera",
				'pt-br': "Tempestade de Folhas",
				'de-de': "Blättersturm"
			},
			effect: {
				'en-us': "Heal 20 damage from each of your Grass Pokémon.",
				'fr-fr': "Soignez 20 dégâts à chacun de vos Pokémon Grass.",
				'es-es': "Cura 20 puntos de daño a cada uno de tus Pokémon Grass.",
				'it-it': "Cura ciascuno dei tuoi Pokémon Grass da 20 danni.",
				'pt-br': "Cure 20 de danos de cada um dos seus Pokémon Grass.",
				'de-de': "Heile 20 Schadenspunkte bei jedem deiner Grass-Pokémon."
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

	description: {
		'en-us': "Upon finding a small Pokémon, it weaves clothing for it from leaves by using the sticky silk secreted from its mouth.",
	},

	thirdParty: {
		cardmarket: 281808,
		tcgplayer: 94140
	}
}

export default card
