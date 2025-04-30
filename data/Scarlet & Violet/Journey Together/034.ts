import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Octillery",
		fr: "Octillery",
		es: "Octillery",
		de: "Octillery",
		it: "Octillery",
		pt: "Octillery",
		'es-mx': "Octillery"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Aqua Wash",
			fr: "Aqua-Lavage",
			es: "Limpieza Acuática",
			de: "Aquawäsche",
			it: "Idrolavaggio",
			pt: "Limpeza Aquática",
			'es-mx': "Acualavado"
		},

		effect: {
			en: "You may put an Energy attached to your opponent's Active Pokémon into their hand.",
			fr: "Vous pouvez ajouter à la main de votre adversaire une Énergie attachée à son Pokémon Actif.",
			es: "Puedes poner 1 Energía unida al Pokémon Activo de tu rival en su mano.",
			de: "Du kannst deinem Gegner 1 an sein Aktives Pokémon angelegte Energie auf seine Hand geben.",
			it: "Puoi prendere un'Energia assegnata al Pokémon attivo del tuo avversario e aggiungerla alle carte che ha in mano.",
			pt: "Você pode colocar uma Energia ligada ao Pokémon Ativo do seu oponente na mão dele.",
			'es-mx': "Puedes poner 1 Energía unida al Pokémon Activo de tu rival en su mano."
		},

		damage: 20
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Octo Beatdown",
			fr: "Octo-Dérouillée",
			es: "Octogolpe",
			de: "Octoprügel",
			it: "Polpobatosta",
			pt: "Soco Tentacular",
			'es-mx': "Octopaliza"
		},

		effect: {
			en: "Flip a coin until you get tails. This attack does 90 damage for each heads.",
			fr: "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 90 dégâts pour chaque côté face.",
			es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 90 puntos de daño por cada cara.",
			de: "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 90 Schadenspunkte pro Kopf zu.",
			it: "Lancia una moneta finché non esce croce. Questo attacco infligge 90 danni ogni volta che esce testa.",
			pt: "Jogue uma moeda até sair coroa. Este ataque causa 90 pontos de dano para cada cara.",
			'es-mx': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 90 puntos de daño por cada cara."
		},

		damage: "90×"
	}],

	retreat: 2,
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
