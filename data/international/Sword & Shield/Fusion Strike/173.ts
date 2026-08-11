import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [630],
	set: Set,

	name: {
		'en-us': "Mandibuzz",
		'fr-fr': "Vaututrice",
		'es-es': "Mandibuzz",
		'it-it': "Mandibuzz",
		'pt-br': "Mandibuzz",
		'de-de': "Grypheldis"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Vullaby",
		'fr-fr': "Vostourno",
		'es-es': "Vullaby",
		'it-it': "Vullaby",
		'pt-br': "Vullaby",
		'de-de': "Skallyk"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "Narumi Sato",

	description: {
		'en-us': "They adorn themselves with bones. There seem to be fashion trends among them, as different bones come into and fall out of popularity."
	},

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Bone Block",
			'fr-fr': "Blocage Osseux",
			'de-de': "Knochenblockade",
			'es-es': "Bloqueo Hueso",
			'pt-br': "Bloqueio Ossudo",
			'it-it': "Blocco Osseo"
		},

		damage: 20,

		effect: {
			'en-us': "During your opponent's next turn, Pokémon can't be played from your opponent's hand to evolve the Defending Pokémon.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, aucun Pokémon ne peut être joué de la main de votre adversaire sur le Pokémon Défenseur pour le faire évoluer.",
			'de-de': "Während des nächsten Zuges deines Gegners können keine Pokémon aus der Hand deines Gegners gespielt werden, um das Verteidigende Pokémon zu entwickeln.",
			'es-es': "Durante el próximo turno de tu rival, no se pueden jugar Pokémon de la mano de tu rival para hacer evolucionar al Pokémon Defensor.",
			'pt-br': "Durante o próximo turno do seu oponente, Pokémon não poderão ser jogados da mão do seu oponente para evoluir o Pokémon Defensor.",
			'it-it': "Durante il prossimo turno del tuo avversario, nessun Pokémon può essere giocato dalla mano del tuo avversario per far evolvere il Pokémon difensore."
		}
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Dark Cutter",
			'fr-fr': "Tranch'Obscur",
			'de-de': "Dunkler Zerschneider",
			'es-es': "Cuchilla Oscura",
			'pt-br': "Cortador de Escuridão",
			'it-it': "Oscurotaglio"
		},

		damage: 70
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582801,
				tcgplayer: 253387
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582801,
				tcgplayer: 253387
			}
		},
	],
}

export default card
