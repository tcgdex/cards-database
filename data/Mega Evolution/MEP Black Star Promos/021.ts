import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Weavile",
		fr: "Dimoret",
		de: "Snibunna",
		it: "Weavile",
		es: "Weavile",
		pt: "Weavile"
	},

	illustrator: "matazo",
	rarity: "None",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],
	stage: "Stage1",
	dexId: [461],

	evolveFrom: {
		en: "Sneasel",
		fr: "Farfuret",
		de: "Sniebel",
		it: "Sneasel",
		es: "Sneasel",
		pt: "Sneasel"
	},

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			en: "Retaliatory Claw",
			fr: "Griffe Représailles",
			de: "Vergeltungskralle",
			it: "Artiglio Ritorsivo",
			es: "Garra Vengativa",
			pt: "Garra Retaliatória"
		},

		damage: "20+",

		effect: {
			en: "If this Pokémon's remaining HP is 50 or less, this attack does 170 more damage.",
			fr: "S'il reste 50 PV ou moins à ce Pokémon, cette attaque inflige 170 dégâts supplémentaires.",
			de: "Wenn dieses Pokémon 50 oder weniger verbleibende KP hat, fügt diese Attacke 170 Schadenspunkte mehr zu.",
			it: "Se i PS rimanenti di questo Pokémon sono 50 o meno, questo attacco infligge 170 danni in più.",
			es: "Si a este Pokémon le quedan 50 PS o menos, este ataque hace 170 puntos de daño más.",
			pt: "Se o PS restante deste Pokémon for 50 ou menos, este ataque causará 170 pontos de dano a mais."
		}
	}, {
		cost: ["Darkness", "Darkness"],

		name: {
			en: "Cut",
			fr: "Coupe",
			de: "Zerschneider",
			it: "Taglio",
			es: "Corte",
			pt: "Cortar"
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "I",
}

export default card
