import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [853],
	set: Set,

	name: {
		en: "Grapploct",
		fr: "Krakos",
		es: "Grapploct",
		it: "Grapploct",
		pt: "Grapploct",
		de: "Kaocto"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Slow-Acting Syncope",
			fr: "Syncope à Retardement",
			es: "Síncope de Acción Lenta",
			it: "Sincope Differita",
			pt: "Síncope a Conta-gotas",
			de: "Schleichende Ohnmacht"
		},

		effect: {
			en: "At the end of your opponent's next turn, the Defending Pokémon will be Knocked Out.",
			fr: "À la fin du prochain tour de votre adversaire, le Pokémon Défenseur sera mis K.O.",
			es: "Al final del próximo turno de tu rival, el Pokémon Defensor quedará Fuera de Combate.",
			it: "Alla fine del prossimo turno del tuo avversario, il Pokémon difensore verrà messo KO.",
			pt: "No final do próximo turno do seu oponente, o Pokémon Defensor será Nocauteado.",
			de: "Am Ende des nächsten Zuges deines Gegners wird das Verteidigende Pokémon kampfunfähig."
		},

		damage: 30
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Mach Cross",
			fr: "Passage Éclair",
			es: "Puñetazo Mach",
			it: "Incromach",
			pt: "Cruzado Veloz",
			de: "Tempo-Cross"
		},

		damage: 120
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card