import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [101],
	set: Set,

	name: {
		fr: "Électrode",
		en: "Electrode",
		es: "Electrode",
		it: "Electrode",
		pt: "Electrode",
		de: "Lektrobal"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			fr: "Bim Boum en Chaîne",
			en: "Bang Boom Chain",
			es: "Cadena Bum Bum",
			it: "Bum Bang a Catena",
			pt: "Corrente Estrondosa",
			de: "Bumm-Bumm-Kette"
		},

		effect: {
			fr: "Avant d'infliger des dégâts, vous pouvez défausser le nombre voulu de cartes Outil Pokémon de vos Pokémon. Cette attaque inflige 40 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
			en: "Before doing damage, you may discard any number of Pokémon Tools from your Pokémon. This attack does 40 more damage for each card you discarded in this way.",
			es: "Antes de infligir daño, puedes descartar cualquier cantidad de Herramientas Pokémon de tus Pokémon. Este ataque hace 40 puntos de daño más por cada carta que hayas descartado de esta manera.",
			it: "Prima di infliggere danni, puoi scartare un numero qualsiasi di carte Oggetto Pokémon dai tuoi Pokémon. Questo attacco infligge 40 danni in più per ogni carta che hai scartato in questo modo.",
			pt: "Antes de causar dano, você poderá descartar qualquer número de Ferramentas Pokémon dos seus Pokémon. Este ataque causa 40 pontos de dano a mais para cada carta descartada desta forma.",
			de: "Bevor du Schaden zufügst, kannst du beliebig viele Pokémon-Ausrüstungen von deinen Pokémon auf deinen Ablagestapel legen. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 40 Schadenspunkte mehr zu."
		},

		damage: "20+"
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			fr: "Boule Élek",
			en: "Electro Ball",
			es: "Bola Voltio",
			it: "Energisfera",
			pt: "Bola Elétrica",
			de: "Elektroball"
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		normal: false
	},

	illustrator: "nagimiso",

	thirdParty: {
		cardmarket: 733696
	}
}

export default card
