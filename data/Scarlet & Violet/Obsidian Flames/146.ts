import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [476],
	set: Set,

	name: {
		fr: "Tarinorme",
		en: "Probopass",
		es: "Probopass",
		it: "Probopass",
		pt: "Probopass",
		de: "Voluminas"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Metal"],
	stage: "Stage1",

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			fr: "Triple Nez",
			en: "Triple Nose",
			es: "Nariz Triple",
			it: "Triplo Naso",
			pt: "Nariz Triplo",
			de: "Dreifachnase"
		},

		effect: {
			fr: "Lancez 3 pièces. Cette attaque inflige 40 dégâts pour chaque côté face.",
			en: "Flip 3 coins. This attack does 40 damage for each heads.",
			es: "Lanza 3 monedas. Este ataque hace 40 puntos de daño por cada cara.",
			it: "Lancia tre volte una moneta. Questo attacco infligge 40 danni ogni volta che esce testa.",
			pt: "Jogue 3 moedas. Este ataque causa 40 pontos de dano para cada cara.",
			de: "Wirf 3 Münzen. Diese Attacke fügt 40 Schadenspunkte pro Kopf zu."
		},

		damage: "40×"
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			fr: "Buster de Fer",
			en: "Iron Buster",
			es: "Destructor Férreo",
			it: "Ferro Distruttivo",
			pt: "Destruidor Férreo",
			de: "Eisensprenger"
		},

		effect: {
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			en: "During your next turn, this Pokémon can't attack.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 160
	}],

	retreat: 4,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "takuyoa",

	thirdParty: {
		cardmarket: 725226
	}
}

export default card