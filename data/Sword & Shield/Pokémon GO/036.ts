import { Card } from "../../../interfaces"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [95],
	set: Set,

	name: {
		en: "Onix",
		fr: "Onix",
		es: "Onix",
		it: "Onix",
		pt: "Onix",
		de: "Onix"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Rock Tomb",
			fr: "Tomberoche",
			es: "Tumba Rocas",
			it: "Rocciotomba",
			pt: "Tumba de Rochas",
			de: "Felsgrab"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 50
	}, {
		cost: ["Fighting", "Fighting", "Colorless", "Colorless"],

		name: {
			en: "Raging Swing",
			fr: "Frappe Acharnée",
			es: "Sacudida Rabiosa",
			it: "Oscillafuria",
			pt: "Giro Feroz",
			de: "Wütendes Winden"
		},

		effect: {
			en: "This attack does 50 damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 50 dégâts pour chaque marqueur de dégâts sur ce Pokémon.",
			es: "Este ataque hace 50 puntos de daño por cada contador de daño en este Pokémon.",
			it: "Questo attacco infligge 50 danni per ogni segnalino danno presente su questo Pokémon.",
			pt: "Este ataque causa 50 pontos de dano para cada contador de dano neste Pokémon.",
			de: "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 50 Schadenspunkte zu."
		},

		damage: "50×"
	}],

	retreat: 4,
	regulationMark: "F",
	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	}
}

export default card