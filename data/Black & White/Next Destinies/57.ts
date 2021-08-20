import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Gardevoir",
		fr: "Gardevoir",
		es: "Gardevoir",
		it: "Gardevoir",
		pt: "Gardevoir",
		de: "Guardevoir"
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
		en: "Kirlia",
		fr: "Kirlia",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Psychic Mirage",
				fr: "Mirage Psychique",
				es: "Espejismo Psíquico",
				it: "Psicomiraggio",
				pt: "Miragem Psíquica",
				de: "Psycho-Trugbild"
			},
			effect: {
				en: "Each basic Psychic Energy attached to your Psychic Pokémon provides PsychicPsychic Energy. You can’t apply more than 1 Psychic Mirage Ability at a time.",
				fr: "Chaque Énergie Psychic de base attachée à vos Pokémon Psychic fournit de l’Énergie PsychicPsychic. Vous ne pouvez pas appliquer plus d’une capacité spéciale Mirage Psychique à la fois.",
				es: "Cada Energía Psychic Básica unida a tus Pokémon Psychic proporciona Energía PsychicPsychic. No puedes aplicar más de 1 Habilidad Espejismo Psíquico a la vez.",
				it: "Ogni Energia base Psychic assegnata ai tuoi Pokémon Psychic fornisce PsychicPsychic. Può essere applicata solo un’abilità Psicomiraggio alla volta.",
				pt: "Cada Energia Psychic básica ligada ao seu Pokémon Psychic fornece Energias PsychicPsychic. Não é possível aplicar mais de 1 habilidade Miragem Psíquica ao mesmo tempo.",
				de: "Jede an deine Psychic-Pokémon angelegte Psychic-Basis-Energie liefert PsychicPsychic-Energie. Du kannst nicht mehr als jeweils 1 Fähigkeit Psycho-Trugbild anwenden."
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
				en: "Mind Shock",
				fr: "Choc Cérébral",
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness or Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
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



}

export default card
