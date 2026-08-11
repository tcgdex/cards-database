import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Pumpkaboo",
		'fr-fr': "Pitrouille",
		'es-es': "Pumpkaboo",
		'it-it': "Pumpkaboo",
		'pt-br': "Pumpkaboo",
		'de-de': "Irrbis"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",
	illustrator: "Yuka Morii",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Pumpkin Pit",
			'fr-fr': "Citrouille Trouée",
			'es-es': "Calabaza Orificio",
			'it-it': "Zucca Cava",
			'pt-br': "Pumpkin Pit",
			'de-de': "Kürbisloch"
		},

		effect: {
			'en-us': "When you play this Pokémon from your hand onto your Bench during your turn, you may discard a Stadium in play.",
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez défausser un Stade en jeu.",
			'es-es': "Cuando juegas este Pokémon de tu mano a tu Banca durante tu turno, puedes descartar un Estadio en juego.",
			'it-it': "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi scartare una carta Stadio in gioco.",
			'pt-br': "When you play this Pokémon from your hand onto your Bench during your turn, you may discard a Stadium in play.",
			'de-de': "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du 1 Stadionkarte im Spiel auf den Ablagestapel legen."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Stampede",
			'fr-fr': "Ruée",
			'es-es': "Estampida",
			'it-it': "Fuggi Fuggi",
			'pt-br': "Stampede",
			'de-de': "Zertrampeln"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,

	description: {
		'en-us': "The light that streams out from the holes in the pumpkin can hypnotize and control the people and Pokémon that see it."
	},

	dexId: [710],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574124,
				tcgplayer: 246857
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574124,
				tcgplayer: 246857
			}
		},
	],
}

export default card
