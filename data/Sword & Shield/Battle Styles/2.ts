import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [70],
	set: Set,

	name: {
		en: "Weepinbell",
		fr: "Boustiflor",
		es: "Weepinbell",
		it: "Weepinbell",
		pt: "Weepinbell",
		de: "Ultrigaria"
	},

	illustrator: "Shibuzoh.",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		en: "Bellsprout",
		fr: "Chétiflor",
		es: "Bellsprout",
		it: "Bellsprout",
		pt: "Bellsprout",
		de: "Knofensa"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Dangerous Mucus",
			fr: "Mucus Dangereux",
			es: "Mucosidad Peligrosa",
			it: "Mucosa Pericolosa",
			pt: "Mucosa Perigosa",
			de: "Gefährlicher Schleim"
		},

		effect: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may make your opponent's Active Pokémon Burned and Poisoned.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez laisser le Pokémon Actif de votre adversaire Brûlé et Empoisonné.",
			es: "Cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes dejar al Pokémon Activo de tu rival Envenenado y Quemado.",
			it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi lasciare il Pokémon attivo del tuo avversario bruciato e avvelenato.",
			pt: "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá deixar o Pokémon Ativo do seu oponente Envenenado e Queimado.",
			de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du das Aktive Pokémon deines Gegners verbrennen und vergiften."
		}
	}],

	attacks: [{
		name: {
			en: "Vine Whip",
			fr: "Fouet Lianes",
			es: "Látigo Cepa",
			it: "Frustata",
			pt: "Chicote de Vinha",
			de: "Rankenhieb"
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

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "It spits out Poison Powder to immobilize the enemy and then finishes it with a spray of Acid."
	}
}

export default card
