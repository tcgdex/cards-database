import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [70],
	set: Set,

	name: {
		'en-us': "Weepinbell",
		'fr-fr': "Boustiflor",
		'es-es': "Weepinbell",
		'it-it': "Weepinbell",
		'pt-br': "Weepinbell",
		'de-de': "Ultrigaria"
	},

	illustrator: "Shibuzoh.",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Bellsprout",
		'fr-fr': "Chétiflor",
		'es-es': "Bellsprout",
		'it-it': "Bellsprout",
		'pt-br': "Bellsprout",
		'de-de': "Knofensa"
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Dangerous Mucus",
			'fr-fr': "Mucus Dangereux",
			'es-es': "Mucosidad Peligrosa",
			'it-it': "Mucosa Pericolosa",
			'pt-br': "Mucosa Perigosa",
			'de-de': "Gefährlicher Schleim"
		},

		effect: {
			'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may make your opponent's Active Pokémon Burned and Poisoned.",
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez laisser le Pokémon Actif de votre adversaire Brûlé et Empoisonné.",
			'es-es': "Cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes dejar al Pokémon Activo de tu rival Envenenado y Quemado.",
			'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi lasciare il Pokémon attivo del tuo avversario bruciato e avvelenato.",
			'pt-br': "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá deixar o Pokémon Ativo do seu oponente Envenenado e Queimado.",
			'de-de': "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du das Aktive Pokémon deines Gegners verbrennen und vergiften."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Vine Whip",
			'fr-fr': "Fouet Lianes",
			'es-es': "Látigo Cepa",
			'it-it': "Frustata",
			'pt-br': "Chicote de Vinha",
			'de-de': "Rankenhieb"
		},

		damage: 40,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "It spits out Poison Powder to immobilize the enemy and then finishes it with a spray of Acid."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 544906,
				tcgplayer: 234037
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 544906,
				tcgplayer: 234037
			}
		},
	],
}

export default card
