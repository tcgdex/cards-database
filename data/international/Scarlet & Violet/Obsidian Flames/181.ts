import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [915],
	set: Set,

	name: {
		'fr-fr': "Gourmelet",
		'en-us': "Lechonk",
		'es-es': "Lechonk",
		'it-it': "Lechonk",
		'pt-br': "Lechonk",
		'de-de': "Ferkuli"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Voix Enjôleuse",
			'en-us': "Disarming Voice",
			'es-es': "Voz Cautivadora",
			'it-it': "Incantavoce",
			'pt-br': "Voz Desarmante",
			'de-de': "Säuselstimme"
		},

		effect: {
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "It searches for food all day. It possesses a keen sense of smell but doesn't use it for anything other than foraging.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725261,
				tcgplayer: 509764,
				cardtrader: 256077
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725261,
				tcgplayer: 509764,
				cardtrader: 256077
			}
		},
	],

	illustrator: "Tomokazu Komiya",

	
}

export default card
