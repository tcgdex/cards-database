import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Metal Energy",
		fr: "Énergie Métal",
		de: "Metallenergie"
	},

	illustrator: "Milky Isobe",
	rarity: "Rare",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		de: "Damage done by attacks to the Pokémon that Metal Energy is attached to is reduced by 10 (after applying Weakness and Resistance). Ignore this effect if the Pokémon that Metal Energy is attached to isn't . Metal Energy provides  Energy. (Doesn't count as a basic Energy card.)",
		fr: "Les dégâts infligés par des attaques au Pokémon auquel Énergie Métal est attachée sont réduits de 10 (après application de la Faiblesse et de la Résistance). Ignorez cet effet si le Pokémon auquel Énergie Métal est attachée n'est pas un Pokémon Métal. Énergie Métal fournit de l'Énergie Métal. (Elle ne compte pas comme carte Énergie de Base.)",
	},

	thirdParty: {
		cardmarket: 276870,
		tcgplayer: 87359
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

