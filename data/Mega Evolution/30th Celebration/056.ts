import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "This legendary Pokémon can scorch the world with lightning. It assists those who want to build an ideal world."
	},

	name: {
		en: "Zekrom",
		fr: "Zekrom",
		de: "Zekrom",
		es: "Zekrom",
		it: "Zekrom",
		'es-mx': "Zekrom"
	},

	illustrator: "akagi",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [644],
	hp: 130,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Slash",
			fr: "Tranche",
			de: "Schlitzer",
			es: "Cuchillada",
			it: "Lacerazione",
			'es-mx': "Cuchillada"
		},

		damage: 50,
		cost: ["Lightning", "Colorless"]
	}, {
		name: {
			en: "Nitro Thunder",
			fr: "Éclair Nitro",
			de: "Nitrodonner",
			es: "Nitrotrueno",
			it: "Tuono Propulsivo",
			'es-mx': "Nitrotrueno"
		},

		effect: {
			en: "If this Pokémon has any <span class=\"energy-symbol Fire\" title=\"Fire\">Fire</span> Energy attached, this attack does 80 more damage.",
			fr: "Si au moins une Énergie <span class=\"energy-symbol Fire\" title=\"Feu\">Fire</span> est attachée à ce Pokémon, cette attaque inflige 80 dégâts supplémentaires.",
			de: "Wenn an dieses Pokémon mindestens 1 <span class=\"energy-symbol Fire\" title=\"Feuer\">Fire</span>-Energie angelegt ist, fügt diese Attacke 80 Schadenspunkte mehr zu.",
			es: "Si este Pokémon tiene alguna Energía <span class=\"energy-symbol Fire\" title=\"Fuego\">Fire</span> unida, este ataque hace 80 puntos de daño más.",
			it: "Se questo Pokémon ha delle Energie <span class=\"energy-symbol Fire\" title=\"Fuoco\">Fire</span> assegnate, questo attacco infligge 80 danni in più.",
			'es-mx': "Si este Pokémon tiene alguna Energía <span class=\"energy-symbol Fire\" title=\"Fuego\">Fire</span> unida, este ataque hace 80 puntos de daño más."
		},

		damage: "80+",
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907663,
				tcgplayer: 716456
			}
		}
	],
}

export default card
