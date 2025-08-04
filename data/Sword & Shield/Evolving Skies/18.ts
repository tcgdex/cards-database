import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Flareon VMAX",
		fr: "Pyroli VMAX",
		es: "Flareon VMAX",
		it: "Flareon VMAX",
		pt: "Flareon VMAX",
		de: "Flamara VMAX"
	},

	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	hp: 320,
	types: ["Fire"],
	stage: "VMAX",
	illustrator: "5ban Graphics",

	attacks: [{
		name: {
			en: "Max Detonate",
			fr: "Éclatomax",
			es: "Maxidetonación",
			it: "Dynadeflagrazione",
			pt: "Max Detonate",
			de: "Dyna-Sprengung"
		},

		effect: {
			en: "Discard the top 5 cards of your deck. This attack does 100 damage for each Energy card you discarded in this way.",
			fr: "Défaussez les 5 cartes du dessus de votre deck. Cette attaque inflige 100 dégâts pour chaque carte Énergie défaussée de cette façon.",
			es: "Descarta las 5 primeras cartas de tu baraja. Este ataque hace 100 puntos de daño por cada carta de Energía que hayas descartado de esta manera.",
			it: "Scarta le prime cinque carte del tuo mazzo. Questo attacco infligge 100 danni per ogni carta Energia che hai scartato in questo modo.",
			pt: "Discard the top 5 cards of your deck. This attack does 100 damage for each Energy card you discarded in this way.",
			de: "Lege die obersten 5 Karten deines Decks auf deinen Ablagestapel. Diese Attacke fügt für jede auf diese Weise abgelegte Energiekarte 100 Schadenspunkte zu."
		},

		damage: "100×",
		cost: ["Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,

	evolveFrom: {
		en: "Flareon V",
		fr: "Pyroli-V",
		es: "Flareon V",
		it: "Flareon-V",
		pt: "Flareon V",
		de: "Flamara-V"
	},

	dexId: [136],
	regulationMark: "E",

	thirdParty: {
		cardmarket: 574042,
		tcgplayer: 246712
	}
}

export default card
