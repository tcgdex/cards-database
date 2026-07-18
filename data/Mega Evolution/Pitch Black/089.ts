import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Manectric",
		fr: "Élecsprint",
		es: "Manectric",
		'es-mx': "Manectric",
		de: "Voltenso",
		it: "Manectric",
		pt: "Manectric"
	},

	illustrator: "HICO KIM",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [310],
	hp: 120,
	types: ["Lightning"],

	evolveFrom: {
		en: "Electrike"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Flashing Barrier",
			fr: "Barrière Aveuglante",
			es: "Barrera Destellante",
			'es-mx': "Barrera Destellante",
			de: "Blitzbarriere",
			it: "Barriera Abbagliante",
			pt: "Barreira Elétrica"
		},

		cost: ["Lightning", "Lightning"],

		damage: 50,

		effect: {
			en: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Evolution Pokémon.",
			fr: "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon Évolutifs.",
			es: "Durante el próximo turno de tu rival, se evita todo el daño infligido a este Pokémon por ataques de Pokémon Evolución.",
			'es-mx': "Durante el próximo turno de tu rival, se evita todo el daño infligido por ataques de Pokémon Evolución a este Pokémon.",
			de: "Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken von Entwicklungs-Pokémon zugefügt wird.",
			it: "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon Evoluzione.",
			pt: "Durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques de Pokémon de Evolução."
		}
	}, {
		name: {
			en: "Sonic Edge",
			fr: "Tranchant Sonique",
			es: "Tajo Sónico",
			'es-mx': "Filo Sónico",
			de: "Schallkante",
			it: "Muro del Suono",
			pt: "Gume Sônico"
		},

		cost: ["Lightning", "Lightning", "Lightning"],

		damage: 110,

		effect: {
			en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			es: "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			'es-mx': "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			de: "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert.",
			it: "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			pt: "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895873,
				tcgplayer: 704846
			}
		},
	],
}

export default card
