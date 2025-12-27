import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Archaludon",
		fr: "Pondralugon",
		es: "Archaludon",
		'es-mx': "Archaludon",
		de: "Briduradon",
		it: "Archaludon",
		pt: "Archaludon"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 180,
	types: ["Metal"],
	stage: "Stage1",
	dexId: [1018],

	attacks: [{
		cost: ["Metal", "Metal", "Metal"],

		name: {
			en: "Coated Attack",
			fr: "Attaque Enrobée",
			es: "Ataque Confitado",
			'es-mx': "Ataque Recubierto",
			de: "Kandierte Attacke",
			it: "Attacco Glassato",
			pt: "Ataque Revestido"
		},

		effect: {
			en: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Basic Pokémon.",
			fr: "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon de base.",
			es: "Durante el próximo turno de tu rival, se evita todo el daño infligido a este Pokémon por ataques de Pokémon Básicos.",
			'es-mx': "Durante el próximo turno de tu rival, se evita todo el daño infligido por ataques de Pokémon Básicos a este Pokémon.",
			de: "Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken von Basis-Pokémon zugefügt wird.",
			it: "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon Base.",
			pt: "Durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques de Pokémon Básicos."
		},

		damage: 120
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		cardmarket: 857650
	}
}

export default card