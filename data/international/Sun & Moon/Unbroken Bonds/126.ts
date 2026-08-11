import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Lucario",
		'fr-fr': "Lucario",
		'es-es': "Lucario",
		'it-it': "Lucario",
		'pt-br': "Lucario",
		'de-de': "Lucario"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		448,
	],

	hp: 130,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Riolu",
		'fr-fr': "Riolu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Low Sweep",
				'fr-fr': "Balayette",
				'es-es': "Puntapié",
				'it-it': "Calciobasso",
				'pt-br': "Movimento Baixo",
				'de-de': "Fußtritt"
			},

			damage: 40,

		},
		{
			cost: [
				"Metal",
				"Metal",
			],
			name: {
				'en-us': "Rush Up",
				'fr-fr': "En Toute Hâte",
				'es-es': "Apresurarse",
				'it-it': "Corsa Affrettata",
				'pt-br': "Avanço Apressado",
				'de-de': "Ansturm"
			},
			effect: {
				'en-us': "If you attached a Pokémon Tool card from your hand to this Pokémon during this turn, this attack does 70 more damage.",
				'fr-fr': "Si vous avez attaché une carte Outil Pokémon de votre main à ce Pokémon pendant ce tour, cette attaque inflige 70 dégâts supplémentaires.",
				'es-es': "Si has unido 1 carta de Herramienta Pokémon de tu mano a este Pokémon durante este turno, este ataque hace 70 puntos de daño más.",
				'it-it': "Se hai assegnato una carta Oggetto Pokémon a questo Pokémon dalla tua mano durante questo turno, questo attacco infligge 70 danni in più.",
				'pt-br': "Se você ligou uma carta de Ferramenta Pokémon da sua mão a este Pokémon durante esta vez de jogar, este ataque causará 70 pontos de dano a mais.",
				'de-de': "Wenn du während dieses Zuges eine Pokémon-Ausrüstung aus deiner Hand an dieses Pokémon angelegt hast, fügt diese Attacke 70 Schadenspunkte mehr zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It concentrates its mental energy and fires off mysterious waves called auras, which can crush boulders of large size to dust.",
	},

	thirdParty: {
		cardmarket: 372415,
		tcgplayer: 189225
	}
}

export default card
