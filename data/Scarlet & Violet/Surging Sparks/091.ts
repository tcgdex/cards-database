import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Palossand ex",
		fr: "Trépassable-ex",
		es: "Palossand ex",
		it: "Palossand-ex",
		pt: "Palossand ex",
		de: "Colossand-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 280,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Sand Tomb",
			fr: "Tourbi-Sable",
			es: "Bucle Arena",
			it: "Sabbiotomba",
			pt: "Fosso de Areia",
			de: "Sandgrab"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 160
	}, {
		cost: ["Water", "Psychic", "Fighting"],

		name: {
			en: "Barite Jail",
			fr: "Prison de Barytine",
			es: "Prisión Barita",
			it: "Sbarre di Barite",
			pt: "Prisão de Barita",
			de: "Baryt-Gefängnis"
		},

		effect: {
			en: "Put damage counters on each of your opponent's Benched Pokémon until its remaining HP is 100.",
			fr: "Placez des marqueurs de dégâts sur chacun des Pokémon de Banc de votre adversaire jusqu'à ce qu'il ne lui reste que 100 PV.",
			es: "Pon contadores de daño en cada uno de los Pokémon en Banca de tu rival hasta que le queden 100 PS a cada uno de ellos.",
			it: "Metti dei segnalini danno su ciascuno dei Pokémon nella panchina del tuo avversario finché i suoi PS rimanenti diventano 100.",
			pt: "Coloque contadores de dano em cada um dos Pokémon no Banco do seu oponente até o PS restante dele ser 100.",
			de: "Lege so lange Schadensmarken auf jedes Pokémon auf der Bank deines Gegners, bis seine verbleibenden KP gleich 100 sind."
		}
	}],

	retreat: 4,
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "5ban Graphics",

	thirdParty: {
		cardmarket: 794400
	}
}

export default card
