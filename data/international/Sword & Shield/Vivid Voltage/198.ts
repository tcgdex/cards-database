import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [862],
	set: Set,

	name: {
		'fr-fr': "Ixon de Galar",
		'en-us': "Galarian Obstagoon",
		'es-es': "Obstagoon de Galar",
		'it-it': "Obstagoon di Galar",
		'pt-br': "Obstagoon de Galar",
		'de-de': "Galar-Barrikadax"
	},

	illustrator: "aky CG Works",
	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Darkness"],

	evolveFrom: {
		'fr-fr': "Linéon de Galar",
		'en-us': "Galarian Linoone",
		'es-es': "Linoone de Galar",
		'it-it': "Linoone di Galar",
		'pt-br': "Linoone de Galar",
		'de-de': "Galar-Geradaks"
	},

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Cri Sauvage",
			'en-us': "Untamed Shout",
			'es-es': "Grito Salvaje",
			'it-it': "Squarciagola",
			'pt-br': "Grito Indomado",
			'de-de': "Ungezähmter Schrei"
		},

		effect: {
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez placer 3 marqueurs de dégâts sur l'un des Pokémon de votre adversaire.",
			'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may put 3 damage counters on 1 of your opponent's Pokémon.",
			'es-es': "Cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes poner 3 contadores de daño en 1 de los Pokémon de tu rival.",
			'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi mettere tre segnalini danno su uno dei Pokémon del tuo avversario.",
			'pt-br': "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá colocar 3 contadores de dano em 1 dos Pokémon do seu oponente.",
			'de-de': "Wenn du dieses Pokémon während deines Zuges aus deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du 3 Schadensmarken auf 1 Pokémon deines Gegners legen."
		}
	}],

	attacks: [{
		name: {
			'fr-fr': "Blocage",
			'en-us': "Obstruct",
			'es-es': "Obstrucción",
			'it-it': "Sbarramento",
			'pt-br': "Obstruir",
			'de-de': "Abblocker"
		},

		effect: {
			'fr-fr': "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon de base.",
			'en-us': "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Basic Pokémon.",
			'es-es': "Durante el próximo turno de tu rival, evita todo el daño infligido a este Pokémon por ataques de Pokémon Básicos.",
			'it-it': "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon Base.",
			'pt-br': "Durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques de Pokémon Básicos.",
			'de-de': "Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken von Basis-Pokémon zugefügt wird."
		},

		damage: 90,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D",


	stage: "Stage2",

	description: {
		'en-us': "It evolved after experiencing numerous fights. While crossing its arms, it lets out a shout that would make any opponent flinch."
	},

	variants: [
		{
			type: 'holo',
			foil: 'gold',
			thirdParty: {
				cardmarket: 512700,
				tcgplayer: 226604
			}
		},
	],
}

export default card
