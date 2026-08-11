import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [468],
	set: Set,

	name: {
		'fr-fr': "Togekiss",
		'en-us': "Togekiss",
		'es-es': "Togekiss",
		'it-it': "Togekiss",
		'pt-br': "Togekiss",
		'de-de': "Togekiss"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],
	evolveFrom: {
		'fr-fr': "Togetic",
		'en-us': "Togetic",
		'es-es': "Togetic",
		'it-it': "Togetic",
		'pt-br': "Togetic",
		'de-de': "Togetic"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Don Précieux",
			'en-us': "Precious Gift",
			'es-es': "Regalo Valioso",
			'it-it': "Dono Prezioso",
			'pt-br': "Presente Precioso",
			'de-de': "Kostbares Geschenk"
		},

		effect: {
			'fr-fr': "Une fois à la fin de votre tour (après votre attaque), vous pouvez utiliser ce talent. Piochez des cartes jusqu'à en avoir 8 en main.",
			'en-us': "Once at the end of your turn (after your attack), you may use this Ability. Draw cards until you have 8 cards in your hand.",
			'es-es': "Una vez al final de tu turno (después de tu ataque), puedes usar esta habilidad. Roba cartas hasta que tengas 8 cartas en tu mano.",
			'it-it': "Una sola volta alla fine del tuo turno, dopo il tuo attacco, puoi usare questa abilità. Pesca fino ad avere otto carte in mano.",
			'pt-br': "Uma vez no final do seu turno (depois do seu ataque), você poderá usar esta Habilidade. Compre cartas até ter 8 cartas na sua mão.",
			'de-de': "Einmal am Ende deines Zuges (nachdem du angegriffen hast) kannst du diese Fähigkeit einsetzen. Ziehe so lange Karten, bis du 8 Karten auf deiner Hand hast."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Cyclone d'Énergie",
			'en-us': "Power Cyclone",
			'es-es': "Ciclón Poderoso",
			'it-it': "Ciclone Potente",
			'pt-br': "Ciclone Poderoso",
			'de-de': "Kraftwirbel"
		},

		effect: {
			'fr-fr': "Déplacez une Énergie de ce Pokémon vers l'un de vos Pokémon de Banc.",
			'en-us': "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
			'es-es': "Mueve 1 Energía de este Pokémon a uno de tus Pokémon en Banca.",
			'it-it': "Sposta un'Energia da questo Pokémon a uno di quelli nella tua panchina.",
			'pt-br': "Mova uma Energia deste Pokémon para 1 dos seus Pokémon no Banco.",
			'de-de': "Verschiebe 1 Energie von diesem Pokémon auf 1 Pokémon auf deiner Bank."
		},

		damage: 110
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "G",

	description: {
		'en-us': "Known as a bringer of blessings, it's been depicted on good-luck charms since ancient times.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 725165,
				tcgplayer: 509840,
				cardtrader: 255770
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 785705
			}
		},
		{
			type: 'holo',
			stamp: ['pre-release'],
			thirdParty: {
				cardmarket: 727120
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725165,
				tcgplayer: 509840,
				cardtrader: 255770
			}
		},
	],

	illustrator: "Cona Nitanda",

	
}

export default card
