import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Galarian Obstagoon",
		fr: "Ixon de Galar",
		es: "Obstagoon de Galar",
		it: "Obstagoon di Galar",
		pt: "Obstagoon de Galar",
		de: "Galar-Barrikadax"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 160,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Galarian Linoone",
		fr: "Linéon de Galar",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Untamed Shout",
				fr: "Cri Sauvage",
				es: "Grito Salvaje",
				it: "Squarciagola",
				pt: "Grito Indomado",
				de: "Ungezähmter Schrei"
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may put 3 damage counters on 1 of your opponent’s Pokémon.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez placer 3 marqueurs de dégâts sur l’un des Pokémon de votre adversaire.",
				es: "Cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes poner 3 contadores de daño en 1 de los Pokémon de tu rival.",
				it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi mettere tre segnalini danno su uno dei Pokémon del tuo avversario.",
				pt: "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá colocar 3 contadores de dano em 1 dos Pokémon do seu oponente.",
				de: "Wenn du dieses Pokémon während deines Zuges aus deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du 3 Schadensmarken auf 1 Pokémon deines Gegners legen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Obstruct",
				fr: "Blocage",
				es: "Obstrucción",
				it: "Sbarramento",
				pt: "Obstruir",
				de: "Abblocker"
			},
			effect: {
				en: "During your opponent’s next turn, prevent all damage done to this Pokémon by attacks from Basic Pokémon.",
				fr: "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon de base.",
				es: "Durante el próximo turno de tu rival, evita todo el daño infligido a este Pokémon por ataques de Pokémon Básicos.",
				it: "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon Base.",
				pt: "Durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques de Pokémon Básicos.",
				de: "Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken von Basis-Pokémon zugefügt wird."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D"
}

export default card
