import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [678],
	set: Set,

	name: {
		'en-us': "Meowstic",
		'fr-fr': "Mistigrix",
		'es-es': "Meowstic",
		'it-it': "Meowstic",
		'pt-br': "Meowstic",
		'de-de': "Psiaugon"
	},

	illustrator: "Yuu Nishida",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Espurr",
		'fr-fr': "Psystigri",
		'es-es': "Espurr",
		'it-it': "Espurr",
		'pt-br': "Espurr",
		'de-de': "Psiau"
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Ear Moves",
			'fr-fr': "Mouvements d'Oreilles",
			'es-es': "Movimiento de Orejas",
			'it-it': "Scuotiorecchie",
			'pt-br': "Movimentos de Orelha",
			'de-de': "Ohrenbewegung"
		},

		effect: {
			'en-us': "Once during your turn, you may move 1 damage counter from 1 of your Pokémon to 1 of your opponent's Pokémon.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez déplacer un marqueur de dégâts de l'un de vos Pokémon vers l'un des Pokémon de votre adversaire.",
			'es-es': "Una vez durante tu turno, puedes mover 1 contador de daño de 1 de tus Pokémon a 1 de los Pokémon de tu rival.",
			'it-it': "Una sola volta durante il tuo turno, puoi spostare un segnalino danno da uno dei tuoi Pokémon a un Pokémon del tuo avversario.",
			'pt-br': "Uma vez durante o seu turno, você poderá mover 1 contador de dano de 1 dos seus Pokémon para 1 dos Pokémon do seu oponente.",
			'de-de': "Einmal während deines Zuges kannst du 1 Schadensmarke von 1 deiner Pokémon auf 1 Pokémon deines Gegners verschieben."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Psychic Sphere",
			'fr-fr': "Sphère Psy",
			'es-es': "Esfera Psíquica",
			'it-it': "Psicosfera",
			'pt-br': "Esfera Psíquica",
			'de-de': "Psychosphäre"
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


	stage: "Stage1",

	description: {
		'en-us': "The defensive instinct of the males is strong. It's when they're protecting themselves or their partners that they unleash their full power."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 545416,
				tcgplayer: 234233
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545416,
				tcgplayer: 234233
			}
		},
	],
}

export default card
