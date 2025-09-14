import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Mysterious Fossil",
		fr: "Mystérieux Fossile",
		de: "Geheimnis-Fossil"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Trainer",
	set: Set,
	hp: 10,

	effect: {
		fr: "Jouez Mystérieux Fossile comme si c'était un Pokémon de Base. Lorsqu'il est en jeu, Mystérieux Fossile compte comme un Pokémon (au lieu d'une carte Dresseur.) Mystérieux Fossile n'a pas d'attaque, ne peut pas battre en retraite, et ne peut pas être Endormi, Confus, Paralysé, ou Empoisonné. Si Mystérieux Fossile est mis K.O., il ne compte pas comme un Pokémon K.O. (Défaussez-le de toute façon.) À tout moment durant votre tour avant votre attaque, vous pouvez défausser Mystérieux Fossile du jeu.",
		de: "Spiele Geheimnis-Fossil wie ein Pokémon. Während Geheimnis-Fossil im Spiel ist, zählt es als Pokémon (anstatt einer Trainerkarte). Geheimnis-Fossil hat keine Angriffe, kann nicht zurückziehen, und kann nicht schlafend, verwirrt, gelähmt oder vergiftet sein. Falls Gehemnis-Fossil kampfunfähig gemacht wird, zählt es nicht als kampfunfähig gemachtes Pokémon. (Lege es trotzdem ab.) jederzeit während deines Zuges vor deinem Angriff kannst du gehemnis-Fossil aus dem Spiel entfernen."
	},

	thirdParty: {
		cardmarket: 273923,
		tcgplayer: 44464
	},

	variants: [
		{
			type: "normal",
			foil: "galaxy"
		},
		{
			type: "normal",
			stamp: ["1st edition"],
			foil: "galaxy"
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright"
		}
	]
}

export default card
