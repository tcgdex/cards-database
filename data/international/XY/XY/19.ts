import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Gogoat",
		'fr-fr': "Chevroum",
		'es-es': "Gogoat",
		'it-it': "Gogoat",
		'pt-br': "Gogoat",
		'de-de': "Chevrumm"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		673,
	],

	hp: 110,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Skiddo",
		'fr-fr': "Cabriolaine",
		'es-es': "Skiddo",
		'it-it': "Skiddo",
		'pt-br': "Skiddo",
		'de-de': "Mähikel"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Lead",
				'fr-fr': "Mentor",
				'es-es': "Liderazgo",
				'it-it': "Guidare",
				'pt-br': "Liderar",
				'de-de': "Führen"
			},
			effect: {
				'en-us': "Search your deck for up to 2 Supporter cards, reveal them, and put them into your hand. Shuffle your deck afterward.",
				'fr-fr': "Cherchez jusqu'à 2 cartes Supporter dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja hasta 2 cartas de Partidario, enséñalas y ponlas en tu mano. Baraja las cartas de tu baraja después.",
				'it-it': "Cerca nel tuo mazzo fino a due carte Aiuto, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure em seu baralho até 2 cards de Apoiador, revele-os e coloque-os em sua mão. Em seguida, embaralhe seus cards.",
				'de-de': "Durchsuche dein Deck nach bis zu 2 Unterstützerkarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Charge Dash",
				'fr-fr': "Attaque Précipitée",
				'es-es': "Carga Arrojada",
				'it-it': "Corsacarica",
				'pt-br': "Rasgo Feroz",
				'de-de': "Sturmlauf"
			},
			effect: {
				'en-us': "You may do 20 more damage. If you do, this Pokémon does 20 damage to itself.",
				'fr-fr': "Vous pouvez infliger 20 dégâts supplémentaires. Dans ce cas, ce Pokémon s'inflige 20 dégâts.",
				'es-es': "Puedes hacer 20 puntos de daño más. Si lo haces, este Pokémon se hace 20 puntos de daño a sí mismo.",
				'it-it': "Puoi infliggere 20 danni in più. Se lo fai, questo Pokémon infligge 20 danni a se stesso.",
				'pt-br': "Você pode causar 20 de danos adicionais. Se você fizer isso, o Pokémon causará 20 de danos a ele mesmo.",
				'de-de': "Du kannst mit diesem Angriff 20 weitere Schadenspunkte zufügen. Wenn du das machst, fügt dieses Pokémon sich selbst 20 Schadenspunkte zu."
			},
			damage: "70+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It can tell how its trainer is feeling by subtle shifts in the grip on its horns. This empathetic sense lets them run as if one being.",
	},

	thirdParty: {
		cardmarket: 281356,
		tcgplayer: 85789
	}
}

export default card
