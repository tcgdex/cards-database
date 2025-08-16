import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [11],
	set: Set,

	name: {
		fr: "Chrysacier",
		en: "Metapod",
		es: "Metapod",
		it: "Metapod",
		pt: "Metapod",
		de: "Safcon"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			fr: "Charge",
			en: "Tackle",
			es: "Placaje",
			it: "Azione",
			pt: "Investida",
			de: "Tackle"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Posture de Défense",
			en: "Defensive Posture",
			es: "Postura Defensiva",
			it: "Posizione Difensiva",
			pt: "Pose Defensiva",
			de: "Defensive Haltung"
		},

		effect: {
			fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques.",
			en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage done to this Pokémon by attacks.",
			es: "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, se evita todo el daño infligido a este Pokémon por ataques.",
			it: "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon da qualsiasi attacco.",
			pt: "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques.",
			de: "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken zugefügt wird."
		}
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Tika Matsuno",

	thirdParty: {
		cardmarket: 733606
	}
}

export default card