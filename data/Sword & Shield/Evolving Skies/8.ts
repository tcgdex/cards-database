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
		en: "Leafeon VMAX",
		fr: "Phyllali VMAX",
		es: "Leafeon VMAX",
		it: "Leafeon VMAX",
		pt: "Leafeon VMAX",
		de: "Folipurba VMAX"
	},

	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	hp: 310,
	types: ["Grass"],
	stage: "VMAX",
	illustrator: "PLANETA Tsuji",

	attacks: [{
		name: {
			en: "Grass Knot",
			fr: "Nœud Herbe",
			es: "Hierba Lazo",
			it: "Laccioerboso",
			pt: "Grass Knot",
			de: "Strauchler"
		},

		effect: {
			en: "This attack does 60 damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
			fr: "Cette attaque inflige 60 dégâts pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
			es: "Este ataque hace 60 puntos de daño por cada Colorless en el Coste de Retirada del Pokémon Activo de tu rival.",
			it: "Questo attacco infligge 60 danni per ogni Colorless nel costo di ritirata del Pokémon attivo del tuo avversario.",
			pt: "This attack does 60 damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
			de: "Diese Attacke fügt für jedes Colorless in den Rückzugskosten des Aktiven Pokémon deines Gegners 60 Schadenspunkte zu."
		},

		damage: "60×",
		cost: ["Grass", "Colorless"]
	}, {
		name: {
			en: "Max Leaf",
			fr: "Feuillomax",
			es: "Maxihoja",
			it: "Dynafoglia",
			pt: "Max Leaf",
			de: "Dyna-Blatt"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			pt: "Heal 30 damage from this Pokémon.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 170,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,

	evolveFrom: {
		en: "Leafeon V",
		fr: "Phyllali-V",
		es: "Leafeon V",
		it: "Leafeon-V",
		pt: "Leafeon V",
		de: "Folipurba-V"
	},

	dexId: [470],
	regulationMark: "E",

	thirdParty: {
		cardmarket: 574032,
		tcgplayer: 246691
	}
}

export default card
