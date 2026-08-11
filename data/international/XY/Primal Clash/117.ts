import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Bidoof",
		'fr-fr': "Keunotor",
		'es-es': "Bidoof",
		'it-it': "Bidoof",
		'pt-br': "Bidoof",
		'de-de': "Bidiza"
	},

	illustrator: "PLANETA",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		399,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ancient Trait",
			name: {
				'fr-fr': "Régénération α",
				'en-us': "α Recovery",
				'es-es': "{title}:",
				'it-it': "{title}:",
				'pt-br': "{title}:",
				'de-de': "{title}:"
			},
			effect: {
				'fr-fr': "Lorsque ce Pokémon est soigné, doublez la quantité de soins.",
				'en-us': "When this Pokémon is healed, double the amount healed.",
				'es-es': "{title}: Cuando este Pokémon sea curado, dobla la cantidad curada.",
				'it-it': "{title}: Quando curi questo Pokémon, raddoppia la quantità di danni che stai curando.",
				'pt-br': "{title}: Quando este Pokémon for curado, dobre a quantidade curada.",
				'de-de': "{title}: Wenn dieses Pokémon geheilt wird, verdoppele die geheilten Schadenspunkte."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Drench",
				'fr-fr': "Trempage",
				'es-es': "Empapar",
				'it-it': "Inzuppato",
				'pt-br': "Encharcar",
				'de-de': "Durchnässen"
			},
			effect: {
				'en-us': "If this Pokémon has any Water Energy attached to it, this attack does 20 more damage.",
				'fr-fr': "Si de l'Énergie Water est attachée à ce Pokémon, cette attaque inflige 20 dégâts supplémentaires.",
				'es-es': "Si este Pokémon tiene alguna Energía Water unida a él, este ataque hace 20 puntos de daño más.",
				'it-it': "Se questo Pokémon ha delle Energie Water assegnate, questo attacco infligge 20 danni in più.",
				'pt-br': "Se este Pokémon possuir alguma Energia Water ligada a ele, esse ataque causará 20 de danos adicionais.",
				'de-de': "Wenn an dieses Pokémon bereits Water-Energie angelegt ist, fügt dieser Angriff 20 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It constantly gnaws on logs and rocks to whittle down its front teeth. It nests alongside water.",
	},

	thirdParty: {
		cardmarket: 273647,
		tcgplayer: 96015
	}
}

export default card
