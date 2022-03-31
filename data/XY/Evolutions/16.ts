import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Ninetales BREAK",
		fr: "Feunard TURBO",
		es: "Ninetales TURBO",
		it: "Ninetales TURBO",
		pt: "Ninetales TURBO",
		de: "Vulnona-TURBO"
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
		en: "Ninetales",
		fr: "Feunard",
		es: "Ninetales",
		it: "Ninetales",
		pt: "Ninetales",
		de: "Vulnona"
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Explosive Fireball",
				fr: "Boule de Feu Explosive",
				es: "Bola de Fuego Explosiva",
				it: "Palladifuoco",
				pt: "Bola de Fogo Explosiva",
				de: "Explosiver Feuerball"
			},
			effect: {
				en: "Discard all Fire Energy attached to this Pokémon. This attack does 60 more damage for each Energy card discarded in this way.",
				fr: "Défaussez toutes les Énergies Fire attachées à ce Pokémon. Cette attaque inflige 60 dégâts supplémentaires pour chaque carte Énergie défaussée de cette façon.",
				es: "Descarta todas las Energías Fire unidas a este Pokémon. Este ataque hace 60 puntos de daño más por cada carta de Energía descartada de esta manera.",
				it: "Scarta tutte le Energie Fire assegnate a questo Pokémon. Questo attacco infligge 60 danni in più per ogni carta Energia scartata in questo modo.",
				pt: "Descarte toda a Energia Fire ligada a este Pokémon. Este ataque causa 60 de danos adicionais para cada card de Energia descartado desta forma.",
				de: "Lege alle an dieses Pokémon angelegten Fire-Energien auf deinen Ablagestapel. Dieser Angriff fügt 60 weitere Schadenspunkte für jede Energiekarte zu, die auf diese Weise auf den Ablagestapel gelegt wurde."
			},
			damage: "10+",

		}
	],

	retreat: 0
}

export default card
