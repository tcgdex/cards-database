import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Meowstic",
		fr: "Mistigrix",
		es: "Meowstic",
		it: "Meowstic",
		pt: "Meowstic",
		de: "Psiaugon"
	},

	illustrator: "Yuu Nishida",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		en: "Espurr",
		fr: "Psystigri",
		es: "Espurr",
		it: "Espurr",
		pt: "Espurr",
		de: "Psiau"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Ear Moves",
			fr: "Mouvements d'Oreilles",
			es: "Movimiento de Orejas",
			it: "Scuotiorecchie",
			pt: "Movimentos de Orelha",
			de: "Ohrenbewegung"
		},

		effect: {
			en: "Once during your turn, you may move 1 damage counter from 1 of your Pokémon to 1 of your opponent's Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez déplacer un marqueur de dégâts de l'un de vos Pokémon vers l'un des Pokémon de votre adversaire.",
			es: "Una vez durante tu turno, puedes mover 1 contador de daño de 1 de tus Pokémon a 1 de los Pokémon de tu rival.",
			it: "Una sola volta durante il tuo turno, puoi spostare un segnalino danno da uno dei tuoi Pokémon a un Pokémon del tuo avversario.",
			pt: "Uma vez durante o seu turno, você poderá mover 1 contador de dano de 1 dos seus Pokémon para 1 dos Pokémon do seu oponente.",
			de: "Einmal während deines Zuges kannst du 1 Schadensmarke von 1 deiner Pokémon auf 1 Pokémon deines Gegners verschieben."
		}
	}],

	attacks: [{
		name: {
			en: "Psychic Sphere",
			fr: "Sphère Psy",
			es: "Esfera Psíquica",
			it: "Psicosfera",
			pt: "Esfera Psíquica",
			de: "Psychosphäre"
		},

		damage: 50,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "The defensive instinct of the males is strong. It's when they're protecting themselves or their partners that they unleash their full power."
	}
}

export default card
