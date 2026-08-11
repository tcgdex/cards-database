import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [853],

	name: {
		'en-us': "Grapploct",
		'fr-fr': "Krakos",
		'es-es': "Grapploct",
		'it-it': "Grapploct",
		'pt-br': "Grapploct",
		'de-de': "Kaocto"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 130,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Clobbopus",
		'fr-fr': "Poulpaf",
		'es-es': "Clobbopus",
		'it-it': "Clobbopus",
		'pt-br': "Clobbopus",
		'de-de': "Klopptopus"
	},

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Full Nelson",
				'fr-fr': "Double Nelson",
				'es-es': "Nelson Completa",
				'it-it': "Doppia Nelson",
				'pt-br': "Chave Imobilizadora",
				'de-de': "Doppelnelson"
			},
			effect: {
				'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
				'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
				'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
				'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
				'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Tentacle Buster",
				'fr-fr': "Buster Tentaculaire",
				'es-es': "Tentáculo Destructor",
				'it-it': "Tentacolo Distruttivo",
				'pt-br': "Tentáculo Destruidor",
				'de-de': "Tentakelknacker"
			},
			effect: {
				'en-us': "If this Pokémon used Full Nelson during your last turn, this attack does 120 more damage.",
				'fr-fr': "Si ce Pokémon a utilisé Double Nelson pendant votre dernier tour, cette attaque inflige 120 dégâts supplémentaires.",
				'es-es': "Si este Pokémon usó Nelson Completa durante tu último turno, este ataque hace 120 puntos de daño más.",
				'it-it': "Se questo Pokémon ha usato Doppia Nelson durante il tuo ultimo turno, questo attacco infligge 120 danni in più.",
				'pt-br': "Se este Pokémon usou Chave Imobilizadora durante o seu último turno, este ataque causará 120 pontos de dano a mais.",
				'de-de': "Wenn dieses Pokémon während deines letzten Zuges Doppelnelson eingesetzt hat, fügt diese Attacke 120 Schadenspunkte mehr zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "A body made up of nothing but muscle makes the grappling moves this Pokémon performs with its tentacles tremendously powerful."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511925,
				tcgplayer: 226553
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511925,
				tcgplayer: 226553
			}
		},
	],
}

export default card
