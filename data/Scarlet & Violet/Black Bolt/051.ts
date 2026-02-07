import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [557],
	set: Set,

	name: {
		en: "Dwebble",
		fr: "Crabicoque",
		de: "Lithomith",
		it: "Dwebble",
		pt: "Dwebble",
		es: "Dwebble",
		'es-mx': "Dwebble"
	},

	illustrator: "Tetsu Kayama",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Flail",
			fr: "Gigotage",
			de: "Dreschflegel",
			it: "Flagello",
			pt: "Mangual",
			es: "Azote",
			'es-mx': "Azote"
		},

		effect: {
			en: "This attack does 10 damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 10 dégâts pour chaque marqueur de dégâts sur ce Pokémon.",
			de: "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 10 Schadenspunkte zu.",
			it: "Questo attacco infligge 10 danni per ogni segnalino danno presente su questo Pokémon.",
			pt: "Este ataque causa 10 pontos de dano para cada contador de dano neste Pokémon.",
			es: "Este ataque hace 10 puntos de daño por cada contador de daño en este Pokémon.",
			'es-mx': "Este ataque hace 10 puntos de daño por cada contador de daño en este Pokémon."
		},

		damage: "10×"
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Dig Claws",
			fr: "Creusogriffes",
			de: "Schaufelkrallen",
			it: "Scavazanne",
			pt: "Fincar Garras",
			es: "Hundir Garras",
			'es-mx': "Clavar Garras"
		},

		damage: 20
	}],

	retreat: 2,
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 836011
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 836011
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836380
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836382
			}
		}
	]
}

export default card
