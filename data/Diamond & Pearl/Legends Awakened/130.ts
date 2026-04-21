import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Buck's Training",
		fr: "L'entrainement de Cornil",
		de: "Avenaros Training"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Piochez 2 cartes. Tant que l'entrainement de Cornil se trouve à côté de votre Pokémon Actif, les attaques de chacun de vos Pokémon Actifs infligent 10 dégâts supplémentaires au Pokémon Actif (avant application de la Faiblesse et de la Résistance).",
		de: "Ziehe 2 Karten. Solange Avenaros Training neben deinem Aktiven Pokémon den Aktiven Pokémon liegt, fügen alle Angriffe deiner Aktiven Pokémon 10 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden).",
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 278279,
		tcgplayer: 84009
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["pre-release"]
		},
		{
			type: "normal",
			stamp: ["pre-release","staff"]
		}
	]
}

export default card
