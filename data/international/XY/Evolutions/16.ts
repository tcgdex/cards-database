import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Ninetales BREAK",
		'fr-fr': "Feunard TURBO",
		'es-es': "Ninetales TURBO",
		'it-it': "Ninetales TURBO",
		'pt-br': "Ninetales TURBO",
		'de-de': "Vulnona-TURBO"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		38,
	],

	hp: 140,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Ninetales",
		'fr-fr': "Feunard",
		'es-es': "Ninetales",
		'it-it': "Ninetales",
		'pt-br': "Ninetales",
		'de-de': "Vulnona"
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Explosive Fireball",
				'fr-fr': "Boule de Feu Explosive",
				'es-es': "Bola de Fuego Explosiva",
				'it-it': "Palladifuoco",
				'pt-br': "Bola de Fogo Explosiva",
				'de-de': "Explosiver Feuerball"
			},
			effect: {
				'en-us': "Discard all Fire Energy attached to this Pokémon. This attack does 60 more damage for each Energy card discarded in this way.",
				'fr-fr': "Défaussez toutes les Énergies Fire attachées à ce Pokémon. Cette attaque inflige 60 dégâts supplémentaires pour chaque carte Énergie défaussée de cette façon.",
				'es-es': "Descarta todas las Energías Fire unidas a este Pokémon. Este ataque hace 60 puntos de daño más por cada carta de Energía descartada de esta manera.",
				'it-it': "Scarta tutte le Energie Fire assegnate a questo Pokémon. Questo attacco infligge 60 danni in più per ogni carta Energia scartata in questo modo.",
				'pt-br': "Descarte toda a Energia Fire ligada a este Pokémon. Este ataque causa 60 de danos adicionais para cada card de Energia descartado desta forma.",
				'de-de': "Lege alle an dieses Pokémon angelegten Fire-Energien auf deinen Ablagestapel. Dieser Angriff fügt 60 weitere Schadenspunkte für jede Energiekarte zu, die auf diese Weise auf den Ablagestapel gelegt wurde."
			},
			damage: "10+",

		}
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 293372,
		tcgplayer: 124029
	}
}

export default card
