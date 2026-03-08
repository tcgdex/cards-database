import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "PlusPower",
		fr: "PlusPower",
		de: "PlusPower"
	},

	illustrator: "Takashi Yamaguchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Attachez PlusPower à l’un de vos Pokémon. Une fois votre tour terminé, défaussez cette carte. Si la carte PlusPower est attachée à un Pokémon effectuant une attaque, cette dernière inflige 10 dégâts supplémentaires au Pokémon Actif (avant application de la Faiblesse et de la Résistance).",
		en: "Attach PlusPower to 1 of your Pokémon. Discard this card at the end of your turn. \nIf the Pokémon PlusPower is attached to attacks, the attack does 10 more damage to the Defending Pokémon (before applying Weakness and Resistance).",
		de: "Während dieses Zuges fügen alle Angriffe deines Pokémon den Aktiven Pokémon 10 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden.)"
	},

	trainerType: "Item",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["yuka-furusawa"],
		}
	],

	hp: 0,

	thirdParty: {
		cardmarket: 279236,
		tcgplayer: 88179
	}
}

export default card
