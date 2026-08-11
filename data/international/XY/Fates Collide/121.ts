import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "M Altaria EX",
		'fr-fr': "M-Altaria EX",
		'es-es': "M-Altaria EX",
		'it-it': "M Altaria EX",
		'pt-br': "M-Altaria EX",
		'de-de': "M-Altaria EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		334,
	],

	hp: 220,

	types: [
		"Fairy",
	],

	evolveFrom: {
		'en-us': "Altaria-EX",
		'fr-fr': "Altaria-EX",
		'es-es': "Altaria-EX",
		'it-it': "Altaria-EX",
		'pt-br': "Altaria-EX",
		'de-de': "Altaria-EX"
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mist Purge",
				'fr-fr': "Nettoyage Brumeux",
				'es-es': "Neblina Purificadora",
				'it-it': "Depuranebbia",
				'pt-br': "Névoa Purificadora",
				'de-de': "Nebelaktion"
			},
			effect: {
				'en-us': "If this Pokémon has any Special Energy attached to it, this attack does 30 more damage and heal 30 damage from each of your Pokémon.",
				'fr-fr': "Si de l'Énergie spéciale est attachée à ce Pokémon, cette attaque inflige 30 dégâts supplémentaires et soigne 30 dégâts à chacun de vos Pokémon.",
				'es-es': "Si este Pokémon tiene alguna Energía Especial unida a él, este ataque hace 30 puntos de daño más y cura 30 puntos de daño a cada uno de tus Pokémon.",
				'it-it': "Se questo Pokémon ha delle Energie speciali assegnate, questo attacco infligge 30 danni in più e curi ciascuno dei tuoi Pokémon da 30 danni.",
				'pt-br': "Se este Pokémon possuir qualquer Energia Especial ligada a ele, este ataque causará 30 de danos adicionais e curará 30 de danos de cada um dos seus Pokémon.",
				'de-de': "Wenn an dieses Pokémon bereits Spezial-Energie angelegt ist, fügt dieser Angriff 30 weitere Schadenspunkte zu und heilt 30 Schadenspunkte bei jedem deiner Pokémon."
			},
			damage: "100+",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 2,
	suffix: "EX",

	thirdParty: {
		tcgplayer: 117893
	}
}

export default card
