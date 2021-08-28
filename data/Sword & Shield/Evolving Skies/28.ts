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
		en: "Gyarados V",
		fr: "Léviator V",
		es: "Gyarados V",
		it: "Gyarados V",
		pt: "Gyarados V",
		de: "Garados V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Water"],
	stage: "Basic",
	illustrator: "PLANETA Tsuji",
	suffix: "V",

	attacks: [{
		name: {
			en: "Get Angry",
			fr: "Coléreux",
			es: "Enfadarse",
			it: "Tutte le Furie",
			pt: "Get Angry",
			de: "Rotsehen"
		},

		effect: {
			en: "This attack does 20 damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 20 dégâts pour chaque marqueur de dégâts sur ce Pokémon.",
			es: "Este ataque hace 20 puntos de daño por cada contador de daño en este Pokémon.",
			it: "Questo attacco infligge 20 danni per ogni segnalino danno presente su questo Pokémon.",
			pt: "This attack does 20 damage for each damage counter on this Pokémon.",
			de: "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 20 Schadenspunkte zu."
		},

		damage: "20×",
		cost: ["Water", "Water", "Colorless"]
	}, {
		name: {
			en: "Heavy Storm",
			fr: "Grosse Tempête",
			es: "Fuerte Tormenta",
			it: "Grantempesta",
			pt: "Heavy Storm",
			de: "Schwerer Sturm"
		},

		damage: 180,
		cost: ["Water", "Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3
}

export default card