import { Card } from 'models/database/card'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		'en-us': "Gardevoir",
		'fr-fr': "Gardevoir",
		'es-es': "Gardevoir",
		'it-it': "Gardevoir",
		'pt-br': "Gardevoir",
		'de-de': "Guardevoir"
	},

	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		282,
	],

	hp: 110,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Kirlia",
		'fr-fr': "Kirlia",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Psychic Mirage",
				'fr-fr': "Mirage Psychique",
				'es-es': "Espejismo Psíquico",
				'it-it': "Psicomiraggio",
				'pt-br': "Miragem Psíquica",
				'de-de': "Psycho-Trugbild"
			},
			effect: {
				'en-us': "Each basic Psychic Energy attached to your Psychic Pokémon provides PsychicPsychic Energy. You can’t apply more than 1 Psychic Mirage Ability at a time.",
				'fr-fr': "Chaque Énergie Psychic de base attachée à vos Pokémon Psychic fournit de l’Énergie PsychicPsychic. Vous ne pouvez pas appliquer plus d’une capacité spéciale Mirage Psychique à la fois.",
				'es-es': "Cada Energía Psychic Básica unida a tus Pokémon Psychic proporciona Energía PsychicPsychic. No puedes aplicar más de 1 Habilidad Espejismo Psíquico a la vez.",
				'it-it': "Ogni Energia base Psychic assegnata ai tuoi Pokémon Psychic fornisce PsychicPsychic. Può essere applicata solo un’abilità Psicomiraggio alla volta.",
				'pt-br': "Cada Energia Psychic básica ligada ao seu Pokémon Psychic fornece Energias PsychicPsychic. Não é possível aplicar mais de 1 habilidade Miragem Psíquica ao mesmo tempo.",
				'de-de': "Jede an deine Psychic-Pokémon angelegte Psychic-Basis-Energie liefert PsychicPsychic-Energie. Du kannst nicht mehr als jeweils 1 Fähigkeit Psycho-Trugbild anwenden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mind Shock",
				'fr-fr': "Choc Cérébral",
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Weakness or Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "To protect its Trainer, it will expend all its psychic power to create a small black hole.",
	},

	thirdParty: {
		cardmarket: 280282,
		tcgplayer: 85637
	}
}

export default card
