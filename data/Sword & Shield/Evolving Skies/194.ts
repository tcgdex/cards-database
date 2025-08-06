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
		en: "Rayquaza V",
		fr: "Rayquaza V",
		es: "Rayquaza V",
		it: "Rayquaza V",
		pt: "Rayquaza V",
		de: "Rayquaza V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Dragon"],
	stage: "Basic",
	illustrator: "Ryuta Fuse",

	attacks: [{
		name: {
			en: "Dragon Pulse",
			fr: "Draco-Choc",
			es: "Pulso Dragón",
			it: "Dragopulsar",
			pt: "Dragon Pulse",
			de: "Drachenpuls"
		},

		effect: {
			en: "Discard the top 2 cards of your deck.",
			fr: "Défaussez les 2 cartes du dessus de votre deck.",
			es: "Descarta las 2 primeras cartas de tu baraja.",
			it: "Scarta le prime due carte del tuo mazzo.",
			pt: "Discard the top 2 cards of your deck.",
			de: "Lege die obersten 2 Karten deines Decks auf deinen Ablagestapel."
		},

		damage: 40,
		cost: ["Lightning"]
	}, {
		name: {
			en: "Spiral Burst",
			fr: "Spirale Détonante",
			es: "Explosión en Espiral",
			it: "Spiralscoppio",
			pt: "Spiral Burst",
			de: "Spiral-Detonation"
		},

		effect: {
			en: "You may discard up to 2 basic Fire Energy or up to 2 basic Lightning Energy from this Pokémon. This attack does 80 more damage for each card you discarded in this way.",
			fr: "Vous pouvez défausser jusqu'à 2 Énergies Fire de base ou jusqu'à 2 Énergies Lightning de base de ce Pokémon. Cette attaque inflige 80 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
			es: "Puedes descartar hasta 2 Energías Fire Básicas o hasta 2 Energías Lightning Básicas de este Pokémon. Este ataque hace 80 puntos de daño más por cada carta que hayas descartado de esta manera.",
			it: "Puoi scartare fino a due Energie base Fire o due Energie base Lightning da questo Pokémon. Questo attacco infligge 80 danni in più per ogni carta che hai scartato in questo modo.",
			pt: "You may discard up to 2 basic Fire Energy or up to 2 basic Lightning Energy from this Pokémon. This attack does 80 more damage for each card you discarded in this way.",
			de: "Du kannst bis zu 2 Basis-Fire-Energien oder bis zu 2 Basis-Lightning-Energien von diesem Pokémon auf deinen Ablagestapel legen. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 80 Schadenspunkte mehr zu."
		},

		damage: "20+",
		cost: ["Fire", "Lightning"]
	}],

	retreat: 2,
	dexId: [384],
	regulationMark: "E",
	suffix: "V",

	thirdParty: {
		cardmarket: 574158,
		tcgplayer: 246728
	}
}

export default card
