import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Larry's Dudunsparce ex",
		fr: "Deusolourdo-ex d'Okuba",
		es: "Dudunsparce ex de Laureano",
		'es-mx': "Dudunsparce ex de Laureano",
		de: "Aokis Dummimisel-ex",
		it: "Dudunsparce-ex di Ubaldo",
		pt: "Dudunsparce ex do Lauro"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 270,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Work Rush",
			fr: "Ruée Travailleuse",
			es: "Trabajo Apresurado",
			'es-mx': "Mucha Chamba",
			de: "Arbeitsrausch",
			it: "Frenesia Lavorativa",
			pt: "Carga de Trabalho"
		},

		effect: {
			en: "Flip a coin for each Energy attached to this Pokémon. This attack does 80 damage for each heads.",
			fr: "Lancez une pièce pour chaque Énergie attachée à ce Pokémon. Cette attaque inflige 80 dégâts pour chaque côté face.",
			es: "Lanza 1 moneda por cada Energía unida a este Pokémon. Este ataque hace 80 puntos de daño por cada cara.",
			'es-mx': "Lanza 1 moneda por cada Energía unida a este Pokémon. Este ataque hace 80 puntos de daño por cada cara.",
			de: "Wirf 1 Münze für jede an dieses Pokémon angelegte Energie. Diese Attacke fügt 80 Schadenspunkte pro Kopf zu.",
			it: "Lancia una moneta per ogni Energia assegnata a questo Pokémon. Questo attacco infligge 80 danni ogni volta che esce testa.",
			pt: "Jogue uma moeda para cada Energia ligada a este Pokémon. Este ataque causa 80 pontos de dano para cada cara."
		},

		damage: "80×"
	}],

	retreat: 3,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 675976,
		cardmarket: 869775
	}
}

export default card