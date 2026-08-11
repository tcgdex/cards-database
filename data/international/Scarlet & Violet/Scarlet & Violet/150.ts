import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [398],
	set: Set,

	name: {
		'en-us': "Staraptor",
		'fr-fr': "Étouraptor",
		'es-es': "Staraptor",
		'it-it': "Staraptor",
		'pt-br': "Staraptor",
		'de-de': "Staraptor"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Staravia",
		'fr-fr': "Étourvol"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Tailspin Away",
			'fr-fr': "Départ en Vrille",
			'es-es': "Caída en Picado",
			'it-it': "Avvitamento Evasivo",
			'pt-br': "Escapada Parafuso",
			'de-de': "Entfliegen"
		},

		effect: {
			'en-us': "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Basic Pokémon.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon de base.",
			'es-es': "Durante el próximo turno de tu rival, se evita todo el daño infligido a este Pokémon por ataques de Pokémon Básicos.",
			'it-it': "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon Base.",
			'pt-br': "Durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques de Pokémon Básicos.",
			'de-de': "Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken von Basis-Pokémon zugefügt wird."
		},

		damage: 60
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Power Blast",
			'fr-fr': "Violente Déflagration",
			'es-es': "Estallido Vigoroso",
			'it-it': "Forzacolpo",
			'pt-br': "Explosão Poderosa",
			'de-de': "Powerschuss"
		},

		effect: {
			'en-us': "Discard an Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie de ce Pokémon.",
			'es-es': "Descarta 1 Energía de este Pokémon.",
			'it-it': "Scarta un'Energia da questo Pokémon.",
			'pt-br': "Descarte uma Energia deste Pokémon.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 180
	}],

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
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],

	illustrator: "Atsushi Furusawa",

	description: {
		'en-us': "When Staravia evolve into Staraptor, they leave the flock to live alone. They have sturdy wings.",
	},

	thirdParty: {
        cardmarket: 702446,
        tcgplayer: 488040
    }
}

export default card