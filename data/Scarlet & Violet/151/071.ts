import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [71],
	set: Set,

	name: {
		fr: "Empiflor",
		en: "Victreebel",
		es: "Victreebel",
		it: "Victreebel",
		pt: "Victreebel",
		de: "Sarzenia"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],
	stage: "Stage2",

	attacks: [{
		cost: ["Grass"],

		name: {
			fr: "Relâche",
			en: "Spit Up",
			es: "Escupir",
			it: "Sfoghenergia",
			pt: "Cuspir",
			de: "Entfessler"
		},

		damage: 50
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			fr: "Acide Lent",
			en: "Slow-Acting Acid",
			es: "Ácido de Acción Lenta",
			it: "Acido a Rilento",
			pt: "Ácido de Efeito Lento",
			de: "Träge Säure"
		},

		effect: {
			fr: "À la fin du prochain tour de votre adversaire, placez 12 marqueurs de dégâts sur le Pokémon Défenseur.",
			en: "At the end of your opponent's next turn, put 12 damage counters on the Defending Pokémon.",
			es: "Al final del próximo turno de tu rival, pon 12 contadores de daño en el Pokémon Defensor.",
			it: "Alla fine del prossimo turno del tuo avversario, metti 12 segnalini danno sul Pokémon difensore.",
			pt: "Coloque 12 contadores de dano no Pokémon Defensor no final do próximo turno do seu oponente.",
			de: "Lege am Ende des nächsten Zuges deines Gegners 12 Schadensmarken auf das Verteidigende Pokémon."
		},

		damage: 120
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		holo: false
	},

	evolveFrom: {
		en: "Weepinbell",
		fr: "Boustiflor",
		es: "Weepinbell",
		it: "Weepinbell",
		pt: "Weepinbell",
		de: "Ultrigaria"
	}
}

export default card