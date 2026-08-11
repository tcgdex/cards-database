import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "M Glalie EX",
		'fr-fr': "M-Oniglali EX",
		'es-es': "M-Glalie EX",
		'it-it': "M Glalie EX",
		'pt-br': "M-Glalie EX",
		'de-de': "M-Firnontor EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		362,
	],

	hp: 220,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Glalie-EX",
		'fr-fr': "Oniglali-EX",
		'es-es': "Glalie-EX",
		'it-it': "Glalie-EX",
		'pt-br': "Glalie-EX",
		'de-de': "Firnontor-EX"
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Cryo Mouth",
				'fr-fr': "Cryo Bouche",
				'es-es': "Cryoboca",
				'it-it': "Criobocca",
				'pt-br': "Boca Criogênica",
				'de-de': "Kryo-Mund"
			},
			effect: {
				'en-us': "If this Pokémon has 10 or more damage counters on it, this attack does 150 more damage.",
				'fr-fr': "Si ce Pokémon a 10 marqueurs de dégâts ou plus, cette attaque inflige 150 dégâts supplémentaires.",
				'es-es': "Si este Pokémon tiene 10 o más contadores de daño sobre él, este ataque hace 150 puntos de daño más.",
				'it-it': "Se questo Pokémon ha 10 o più segnalini danno, questo attacco infligge 150 danni in più.",
				'pt-br': "Se este Pokémon possuir 10 ou mais contadores de danos, este ataque causará 150 de danos adicionais.",
				'de-de': "Wenn auf diesem Pokémon mindestens 10 Schadensmarken liegen, fügt dieser Angriff 150 weitere Schadenspunkte zu."
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

	retreat: 3,
	suffix: "EX",

	thirdParty: {
		tcgplayer: 107154
	}
}

export default card
