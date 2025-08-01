import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Pupitar",
		fr: "Ymphect",
		es: "Pupitar",
		it: "Pupitar",
		pt: "Pupitar",
		de: "Pupitar"
	},

	illustrator: "Yuka Morii",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		247,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Larvitar",
		fr: "Embrylex",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Hard Shell Evolution",
				fr: "Évolution Carapadure",
				es: "Evolución Caparazón",
				it: "Evoluzione Guscioduro",
				pt: "Evolução Casco Duro",
				de: "Hartschale-Entwicklung"
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may prevent all damage done to this Pokémon by your opponent’s attacks until the end of your opponent’s next turn.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez éviter tous les dégâts infligés à ce Pokémon par les attaques de votre adversaire jusqu’à la fin du prochain tour de votre adversaire.",
				es: "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes evitar todo el daño infligido a este Pokémon por ataques de tu rival hasta el final del próximo turno de tu rival.",
				it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi prevenire tutti i danni inflitti a questo Pokémon dagli attacchi del tuo avversario fino alla fine del suo prossimo turno.",
				pt: "Quando você joga este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante a sua vez de jogar, você poderá prevenir todo o dano causado a este Pokémon por ataques do seu oponente até o final da próxima vez de jogar do seu oponente.",
				de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du bis zum Ende des nächsten Zuges deines Gegners allen Schaden durch Attacken deines Gegners, der diesem Pokémon zugefügt wird, verhindern."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hammer In",
				fr: "Enfoncement",
				es: "Martillear",
				it: "Martello",
				pt: "Martelada",
				de: "Einhämmern"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 365753
	}
}

export default card
