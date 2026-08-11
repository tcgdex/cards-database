import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Manectric",
		'fr-fr': "Élecsprint",
		'es-es': "Manectric",
		'es-mx': "Manectric",
		'de-de': "Voltenso",
		'it-it': "Manectric",
		'pt-br': "Manectric"
	},

	illustrator: "Uninori",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [310],
	hp: 120,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Electrike"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Flashing Barrier",
			'fr-fr': "Barrière Aveuglante",
			'es-es': "Barrera Destellante",
			'es-mx': "Barrera Destellante",
			'de-de': "Blitzbarriere",
			'it-it': "Barriera Abbagliante",
			'pt-br': "Barreira Elétrica"
		},

		cost: ["Lightning", "Lightning"],

		damage: 50,

		effect: {
			'en-us': "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Evolution Pokémon.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon Évolutifs.",
			'es-es': "Durante el próximo turno de tu rival, se evita todo el daño infligido a este Pokémon por ataques de Pokémon Evolución.",
			'es-mx': "Durante el próximo turno de tu rival, se evita todo el daño infligido por ataques de Pokémon Evolución a este Pokémon.",
			'de-de': "Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken von Entwicklungs-Pokémon zugefügt wird.",
			'it-it': "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon Evoluzione.",
			'pt-br': "Durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques de Pokémon de Evolução."
		}
	}, {
		name: {
			'en-us': "Sonic Edge",
			'fr-fr': "Tranchant Sonique",
			'es-es': "Tajo Sónico",
			'es-mx': "Filo Sónico",
			'de-de': "Schallkante",
			'it-it': "Muro del Suono",
			'pt-br': "Gume Sônico"
		},

		cost: ["Lightning", "Lightning", "Lightning"],

		damage: 110,

		effect: {
			'en-us': "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			'fr-fr': "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			'es-es': "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			'es-mx': "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			'de-de': "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert.",
			'it-it': "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			'pt-br': "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente."
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
			type: "normal",
			thirdParty: {
				cardmarket: 895812,
				tcgplayer: 704781
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895812,
				tcgplayer: 704781
			}
		},
	],
}

export default card
