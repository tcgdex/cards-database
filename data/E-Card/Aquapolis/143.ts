import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Metal Energy",
		fr: "Énergie Métal",
		de: "Metall Energie"
	},

	illustrator: "Milky Isobe",
	rarity: "Rare",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		en: "Damage done to the Pokémon Metal Energy is attached to is reduced by 10 (after applying Weakness and Resistance). If the Pokémon Metal Energy is attached to isn't Metal, whenever it damages a Pokémon, reduce that damage by 10 (before applying Weakness and Resistance). Metal Energy provides Metal Energy. (Doesn't count as a basic Energy card.)",
		de: "Schadenspunkte, die dem Pokémon zugefügt werden, an das eine Metall-Energiekarte angelegt ist, werden um 10 reduziert (nachdem Schwäche und Resistenz verrechnet wurden). Falls das Pokémon, an das Metall-Energie angelegt ist, nicht von Typ {M} ist, reduziere die Schadenspunkte jedesmal um 10, wenn es einem Pokémon Schadenspunkte zufügt (bevor Schwäche und Resistenz verrechnet wurden). Metall-Energie liefert {M}-Energie. (Zählt nicht als Basis-Energiekarte.)",
		fr: "Les dégâts infligés au Pokémon sur lequel Énergie Métal est attachée sont réduits de 10 (avant application de la Faiblesse et de la Résistance). Si le Pokémon sur lequel Énergie Métal est attachée n'est pas Métal, à chaque fois qu'il inflige des dégâts à un Pokémon, réduisez ces dégâts de 10 (avant application de la Faiblesse et de la Résistance)."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 87369,
				cardmarket: 275219
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 87369,
				cardmarket: 275219
			}
		},
	],
	types: [
		"Metal"
	]
}

export default card
