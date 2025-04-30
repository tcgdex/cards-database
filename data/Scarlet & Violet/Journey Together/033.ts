import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Remoraid",
		fr: "Rémoraid",
		es: "Remoraid",
		de: "Remoraid",
		it: "Remoraid",
		pt: "Remoraid",
		'es-mx': "Remoraid"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Flail",
			fr: "Gigotage",
			es: "Azote",
			de: "Dreschflegel",
			it: "Flagello",
			pt: "Mangual",
			'es-mx': "Azote"
		},

		effect: {
			en: "This attack does 10 damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 10 dégâts pour chaque marqueur de dégâts sur ce Pokémon.",
			es: "Este ataque hace 10 puntos de daño por cada contador de daño en este Pokémon.",
			de: "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 10 Schadenspunkte zu.",
			it: "Questo attacco infligge 10 danni per ogni segnalino danno presente su questo Pokémon.",
			pt: "Este ataque causa 10 pontos de dano para cada contador de dano neste Pokémon.",
			'es-mx': "Este ataque hace 10 puntos de daño por cada contador de daño en este Pokémon."
		},

		damage: "10×"
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Rain Splash",
			fr: "Pluie Éclaboussante",
			es: "Golpe de Lluvia",
			de: "Regenplatscher",
			it: "Spruzzapioggia",
			pt: "Chuva Borrifante",
			'es-mx': "Salpicalluvia"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
