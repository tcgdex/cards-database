import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Goodra",
		'fr-fr': "Muplodocus",
		'es-es': "Goodra",
		'it-it': "Goodra",
		'pt-br': "Goodra",
		'de-de': "Viscogon"
	},

	illustrator: "hatachu",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		706,
	],

	hp: 160,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Sliggoo",
		'fr-fr': "Colimucus",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Hydration",
				'fr-fr': "Hydratation",
				'es-es': "Hidratación",
				'it-it': "Idratazione",
				'pt-br': "Hidratação",
				'de-de': "Hydration"
			},
			effect: {
				'en-us': "Whenever you attach a Water Energy card from your hand to this Pokémon, heal 20 damage from it.",
				'fr-fr': "Chaque fois que vous attachez une carte Énergie Water de votre main à ce Pokémon, soignez 20 dégâts à ce Pokémon.",
				'es-es': "Cada vez que unas 1 carta de Energía Water de tu mano a este Pokémon, cúrale 20 puntos de daño.",
				'it-it': "Ogni volta che assegni una carta Energia Water a questo Pokémon dalla tua mano, curalo da 20 danni.",
				'pt-br': "Sempre que ligar 1 carta de Energia Water da sua mão a este Pokémon, cure 20 pontos de dano dele.",
				'de-de': "Heile jedes Mal, wenn du 1 Water-Energiekarte aus deiner Hand an dieses Pokémon anlegst, 20 Schadenspunkte bei ihm."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fairy",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Soaking Horn",
				'fr-fr': "Corne Trempage",
				'es-es': "Cuerno Anegador",
				'it-it': "Inondacorno",
				'pt-br': "Chifre Encharcador",
				'de-de': "Triefendes Horn"
			},
			effect: {
				'en-us': "If this Pokémon was healed during this turn, this attack does 80 more damage.",
				'fr-fr': "Si ce Pokémon a été soigné pendant ce tour, cette attaque inflige 80 dégâts supplémentaires.",
				'es-es': "Si este Pokémon ha sido curado durante este turno, este ataque hace 80 puntos de daño más.",
				'it-it': "Se questo Pokémon è stato curato durante questo turno, questo attacco infligge 80 danni in più.",
				'pt-br': "Se este Pokémon foi curado durante esta vez de jogar, este ataque causará 80 pontos de dano a mais.",
				'de-de': "Wenn dieses Pokémon während dieses Zuges geheilt wurde, fügt diese Attacke 80 Schadenspunkte mehr zu."
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It gets picked on because it's meek. But then, whoever teased it gets to feel the full force of its horns and a good swatting from its thick tail.",
	},

	thirdParty: {
		cardmarket: 355608,
		tcgplayer: 165754
	}
}

export default card
