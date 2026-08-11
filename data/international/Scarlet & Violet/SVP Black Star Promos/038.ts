import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [468],
	set: Set,

	name: {
		'en-us': "Togekiss",
		'fr-fr': "Togekiss",
		'es-es': "Togekiss",
		'it-it': "Togekiss",
		'pt-br': "Togekiss",
		'de-de': "Togekiss"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Togetic",
		'fr-fr': "Togetic",
		'es-es': "Togetic",
		'it-it': "Togetic",
		'pt-br': "Togetic",
		'de-de': "Togetic"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Precious Gift",
			'fr-fr': "Don Précieux",
			'es-es': "Regalo Valioso",
			'it-it': "Dono Prezioso",
			'pt-br': "Presente Precioso",
			'de-de': "Kostbares Geschenk"
		},

		effect: {
			'en-us': "Once at the end of your turn (after your attack), you may use this Ability. Draw cards until you have 8 cards in your hand.",
			'fr-fr': "Une fois à la fin de votre tour (après votre attaque), vous pouvez utiliser ce talent. Piochez des cartes jusqu'à en avoir 8 en main.",
			'es-es': "Una vez al final de tu turno (después de tu ataque), puedes usar esta habilidad. Roba cartas hasta que tengas 8 cartas en tu mano.",
			'it-it': "Una sola volta alla fine del tuo turno, dopo il tuo attacco, puoi usare questa abilità. Pesca fino ad avere otto carte in mano.",
			'pt-br': "Uma vez no final do seu turno (depois do seu ataque), você poderá usar esta Habilidade. Compre cartas até ter 8 cartas na sua mão.",
			'de-de': "Einmal am Ende deines Zuges (nachdem du angegriffen hast) kannst du diese Fähigkeit einsetzen. Ziehe so lange Karten, bis du 8 Karten auf deiner Hand hast."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Power Cyclone",
			'fr-fr': "Cyclone d'Énergie",
			'es-es': "Ciclón Poderoso",
			'it-it': "Ciclone Potente",
			'pt-br': "Ciclone Poderoso",
			'de-de': "Kraftwirbel"
		},

		effect: {
			'en-us': "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
			'fr-fr': "Déplacez une Énergie de ce Pokémon vers l'un de vos Pokémon de Banc.",
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
	illustrator: "OKACHEKE",
	description: {
		'en-us': "Known as a bringer of blessings, it's been depicted on good-luck charms since ancient times.",
	},
	variants: [
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 720388,
				tcgplayer: 513426
			},
		},
		{
			type: "holo",
			stamp: ["set-logo", "staff"],
			thirdParty: {
				cardmarket: 761129,
				tcgplayer: 513427
			},
		}
	],
}

export default card
