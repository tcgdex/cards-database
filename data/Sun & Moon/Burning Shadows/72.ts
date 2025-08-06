import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Sawk",
		fr: "Karaclée",
		es: "Sawk",
		it: "Sawk",
		pt: "Sawk",
		de: "Karadonis"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		539,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Quick Guard",
				fr: "Prévention",
				es: "Anticipo",
				it: "Anticipo",
				pt: "Prevenção",
				de: "Rapidschutz"
			},
			effect: {
				en: "Prevent all damage done to this Pokémon by attacks from Basic Pokémon during your opponent’s next turn. This Pokémon can’t use Quick Guard during your next turn.",
				fr: "Évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon de base pendant le prochain tour de votre adversaire. Ce Pokémon ne peut pas utiliser Prévention pendant votre prochain tour.",
				es: "Evita todo el daño infligido a este Pokémon por ataques de Pokémon Básicos durante el próximo turno de tu rival. Este Pokémon no puede usar Anticipo durante tu próximo turno.",
				it: "Previeni tutti i danni da attacchi inflitti a questo Pokémon dai Pokémon Base durante il prossimo turno del tuo avversario. Durante il tuo prossimo turno, questo Pokémon non può usare Anticipo.",
				pt: "Prevenirá todo o dano causado a este Pokémon por ataques de Pokémon Básicos durante a próxima vez de jogar do seu oponente. Este Pokémon não poderá usar Prevenção durante a sua próxima vez de jogar.",
				de: "Verhindere allen Schaden, der diesem Pokémon während des nächsten Zuges deines Gegners durch Attacken von Basis-Pokémon zugefügt wird. Dieses Pokémon kann Rapidschutz während deines nächsten Zuges nicht einsetzen."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Brick Break",
				fr: "Casse-Brique",
				es: "Demolición",
				it: "Breccia",
				pt: "Quebra-telha",
				de: "Durchbruch"
			},
			effect: {
				en: "This attack’s damage isn’t affected by Resistance or any effects on your opponent’s Active Pokémon.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance ou tout autre effet en action sur le Pokémon Actif de votre adversaire.",
				es: "El daño de este ataque no se ve afectado por Resistencia o cualquier otro efecto en el Pokémon Activo de tu rival.",
				it: "I danni di questo attacco non sono influenzati dalla resistenza o da alcun effetto presente sul Pokémon attivo del tuo avversario.",
				pt: "O dano deste ataque não é afetado por Resistência ou por quaisquer efeitos no Pokémon Ativo do seu oponente.",
				de: "Der Schaden dieser Attacke wird durch Resistenz oder Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 299474,
		tcgplayer: 138558
	}
}

export default card
