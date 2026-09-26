import { Card } from "../../../interfaces"
import Set from "../30th Classic Collection"

const card: Card = {
	set: Set,

	dexId: [282],

	name: {
		en: "M Gardevoir EX",
		fr: "M-Gardevoir EX",
		de: "M Guardevoir EX",
		es: "M Gardevoir EX",
		it: "M Gardevoir EX",
		pt: "M Gardevoir EX",
		'es-mx': "M Gardevoir EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 210,
	types: ["Fairy"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Brilliant Arrow",
			fr: "Flèche Éclatante",
			de: "Glänzender Pfeil",
			es: "Flecha Brillante",
			it: "Freccia Brillante",
			pt: "Seta Brilhante",
			'es-mx': "Flecha Brillante"
		},

		effect: {
			en: "This attack does 30 damage times the amount of <span class=\"energy-symbol Fairy\" title=\"Fairy\">Fairy</span> Energy attached to all of your Pokémon.",
			fr: "Cette attaque inflige 30 dégâts multipliés par le nombre d'Énergies <span class=\"energy-symbol Fairy\" title=\"Fée\">Fairy</span> attachées à tous vos Pokémon.",
			de: "Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl der an all deinen Pokémon angelegten <span class=\"energy-symbol Fairy\" title=\"Fee\">Fairy</span>-Energien zu.",
			es: "Este ataque hace 30 puntos de daño por cada Energía <span class=\"energy-symbol Fairy\" title=\"Hada\">Fairy</span> unida a todos tus Pokémon.",
			it: "Questo attacco infligge 30 danni per ogni Energia <span class=\"energy-symbol Fairy\" title=\"Folletto\">Fairy</span> assegnata ai tuoi Pokémon.",
			pt: "Esse ataque causa 30 de danos vezes a quantidade de Energia <span class=\"energy-symbol Fairy\" title=\"Fada\">Fairy</span> ligada a todos os seus Pokémon.",
			'es-mx': "Este ataque hace 30 puntos de daño por cada Energía <span class=\"energy-symbol Fairy\" title=\"Hada\">Fairy</span> unida a todos tus Pokémon."
		},

		damage: "30×",
		cost: ["Fairy", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	resistances: [{
		type: "Darkness",
		value: "-20"
	}],

	retreat: 2,
	variants: [
		{
			type: "holo",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907959,
				tcgplayer: 716204
			}
		}
	],
}

export default card
