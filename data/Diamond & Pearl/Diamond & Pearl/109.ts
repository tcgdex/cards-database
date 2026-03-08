import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "PlusPower",
		fr: "PlusPower",
		de: "PlusPower"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Attachez PlusPower à 1 de vos Pokémon. Défaussez cette carte à la fin de votre tour.\n\nPokémon auquel PlusPower est attachée attaque, cette attaque inflige 10 dégâts supplémentaires au Pokémon Actif (avant application de la Faiblesse et de la Résistance).",
		de: "Lege PlusPower an 1 deiner Pokémon an und lege die Karte am Ende deines Zuges auf deinen Ablagestapel.\n\nFalls das Pokémon, an das PlusPower angelegt ist, angreift, fügt der Angriff den Aktiven Pokémon 10 weitere Schadesnpunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 277608,
		tcgplayer: 88176
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		}
	]
}

export default card
