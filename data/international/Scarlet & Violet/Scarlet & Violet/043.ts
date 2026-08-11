import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [80],
	set: Set,

	name: {
		'en-us': "Slowbro",
		'fr-fr': "Flagadoss",
		'es-es': "Slowbro",
		'it-it': "Slowbro",
		'pt-br': "Slowbro",
		'de-de': "Lahmus"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Slowpoke",
		'fr-fr': "Ramoloss"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Strange Behavior",
			'fr-fr': "Comportement Étrange",
			'es-es': "Comportamiento Extraño",
			'it-it': "Strano Comportamento",
			'pt-br': "Comportamento Estranho",
			'de-de': "Seltsames Verhalten"
		},

		effect: {
			'en-us': "As often as you like during your turn, you may move 1 damage counter from 1 of your other Pokémon to this Pokémon.",
			'fr-fr': "Autant de fois que vous le voulez pendant votre tour, vous pouvez déplacer un marqueur de dégâts de l'un de vos autres Pokémon vers ce Pokémon.",
			'es-es': "Todas las veces que quieras durante tu turno, puedes mover 1 contador de daño de uno de tus otros Pokémon a este Pokémon.",
			'it-it': "Durante il tuo turno, puoi spostare un segnalino danno da uno dei tuoi altri Pokémon a questo Pokémon tutte le volte che vuoi.",
			'pt-br': "Quantas vezes desejar durante o seu turno, você poderá mover 1 contador de dano de 1 dos seus outros Pokémon para este Pokémon.",
			'de-de': "Beliebig oft während deines Zuges kannst du 1 Schadensmarke von 1 deiner anderen Pokémon auf dieses Pokémon verschieben."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Bubble Drain",
			'fr-fr': "Vide Bulle",
			'es-es': "Drenaje Burbujas",
			'it-it': "Assorbibolla",
			'pt-br': "Dreno de Bolha",
			'de-de': "Blasengully"
		},

		effect: {
			'en-us': "Heal 30 damage from this Pokémon.",
			'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
			'es-es': "Cura 30 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 30 danni.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: "reverse"
		},
		{
			type: "holo"
		}
	],

	illustrator: "Shinji Kanda",

	description: {
		'en-us': "If the tail-biting Shellder is thrown off in a harsh battle, this Pokémon reverts to being an ordinary Slowpoke.",
	},

	thirdParty: {
        cardmarket: 702338,
        tcgplayer: 487887
    }
}

export default card
