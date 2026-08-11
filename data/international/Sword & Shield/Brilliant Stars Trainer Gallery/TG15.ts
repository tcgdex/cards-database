import { Card } from "models/database/card"
import Set from "../Brilliant Stars Trainer Gallery"

const card: Card = {
	dexId: [700],
	set: Set,

	name: {
		'en-us': "Sylveon VMAX",
		'fr-fr': "Nymphali VMAX",
		'es-es': "Sylveon VMAX",
		'it-it': "Sylveon VMAX",
		'pt-br': "Sylveon VMAX",
		'de-de': "Feelinara VMAX"
	},

	illustrator: "sui",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 310,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Sylveon V",
		'fr-fr': "Nymphali-V",
		'es-es': "Sylveon V",
		'it-it': "Sylveon-V",
		'pt-br': "Sylveon V",
		'de-de': "Feelinara-V"
	},

	stage: "VMAX",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Precious Touch",
			'fr-fr': "Touche Précieuse",
			'es-es': "Toque Precioso",
			'it-it': "Tocco Prezioso",
			'pt-br': "Toque Precioso",
			'de-de': "Edle Berührung"
		},

		effect: {
			'en-us': "Attach an Energy card from your hand to 1 of your Benched Pokémon. If you do, heal 120 damage from that Pokémon.",
			'fr-fr': "Attachez une carte Énergie de votre main à l'un de vos Pokémon de Banc. Dans ce cas, soignez 120 dégâts de ce Pokémon-là.",
			'es-es': "Une 1 carta de Energía de tu mano a 1 de tus Pokémon en Banca. Si lo haces, cura 120 puntos de daño a ese Pokémon.",
			'it-it': "Assegna a uno dei tuoi Pokémon in panchina una carta Energia dalla tua mano. Se lo fai, cura quel Pokémon da 120 danni.",
			'pt-br': "Ligue 1 carta de Energia da sua mão a 1 dos seus Pokémon no Banco. Se fizer isto, cure 120 pontos de dano daquele Pokémon.",
			'de-de': "Lege 1 Energiekarte aus deiner Hand an 1 Pokémon auf deiner Bank an. Wenn du das machst, heile 120 Schadenspunkte bei jenem Pokémon."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Max Harmony",
			'fr-fr': "Harmoniomax",
			'es-es': "Maxiarmonía",
			'it-it': "Dynarmonia",
			'pt-br': "Harmonia Max",
			'de-de': "Dyna-Harmonie"
		},

		effect: {
			'en-us': "This attack does 30 more damage for each different type of Pokémon on your Bench.",
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque type différent de Pokémon sur votre Banc.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada tipo de Pokémon diferente en tu Banca.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni Pokémon di tipo diverso nella tua panchina.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada tipo diferente de Pokémon no seu Banco.",
			'de-de': "Diese Attacke fügt für jeden verschiedenen Pokémon-Typ auf deiner Bank 30 Schadenspunkte mehr zu."
		},

		damage: "70+"
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 608747,
				tcgplayer: 264208
			}
		},
	],
}

export default card
