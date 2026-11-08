import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [967],
	set: Set,

	name: {
		'en-us': "Cyclizar",
		'fr-fr': "Motorizard",
		'es-es': "Cyclizar",
		'it-it': "Cyclizar",
		'pt-br': "Cyclizar",
		'de-de': "Mopex"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Touring",
			'fr-fr': "Virée Touristique",
			'es-es': "De Gira",
			'it-it': "Granturismo",
			'pt-br': "Turistando",
			'de-de': "Spritztour"
		},

		effect: {
			'en-us': "Draw 2 cards.",
			'fr-fr': "Piochez 2 cartes.",
			'es-es': "Roba 2 cartas.",
			'it-it': "Pesca due carte.",
			'pt-br': "Compre 2 cartas.",
			'de-de': "Ziehe 2 Karten."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Speed Attack",
			'fr-fr': "Attaque Rapide",
			'es-es': "Ataque Fugaz",
			'it-it': "Attacco Veloce",
			'pt-br': "Ataque em Velocidade",
			'de-de': "Tempoangriff"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "G",

	variants: [
		{
			type: "reverse"
		},
		{
			type: "holo"
		}
	],

	illustrator: "Ryota Murayama",

	description: {
		'en-us': "It can sprint at over 70 mph while carrying a human. The rider's body heat warms Cyclizar's back and lifts the Pokémon's spirit.",
	},

	thirdParty: {
        cardmarket: 702460,
        tcgplayer: 487059
    }
}

export default card