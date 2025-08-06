import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Solgaleo",
		fr: "Solgaleo",
		es: "Solgaleo",
		it: "Solgaleo",
		pt: "Solgaleo",
		de: "Solgaleo"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		791,
	],

	hp: 160,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Cosmoem",
		fr: "Cosmovum",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Full Metal Body",
				fr: "Métallo-Garde",
				es: "Guardia Metálica",
				it: "Metalprotezione",
				pt: "Corpo Metálico",
				de: "Metallprotektor"
			},
			effect: {
				en: "If this Pokémon has any Metal Energy attached to it, it has no Weakness.",
				fr: "Si de l’Énergie Metal est attachée à ce Pokémon, il n’a pas de Faiblesse.",
				es: "Si este Pokémon tiene alguna Energía Metal unida a él, no tiene ninguna Debilidad.",
				it: "Se questo Pokémon ha delle Energie Metal assegnate, non ha debolezza.",
				pt: "Se este Pokémon tiver alguma Energia Metal ligada a ele, não terá Fraqueza.",
				de: "Wenn an dieses Pokémon mindestens 1 Metal-Energie angelegt ist, hat es keine Schwäche."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Rising Dash",
				fr: "Ruée Ascendante",
				es: "Carrera Ascendente",
				it: "Balzo Scattante",
				pt: "Corrida Crescente",
				de: "Steigender Sprint"
			},
			effect: {
				en: "This attack’s damage isn’t affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				es: "El daño de este ataque no se ve afectado por Resistencia.",
				it: "I danni di questo attacco non sono influenzati dalla resistenza.",
				pt: "O dano deste ataque não é afetado por Resistência.",
				de: "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
			},
			damage: 130,

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

	retreat: 3,

	thirdParty: {
		cardmarket: 361341,
		tcgplayer: 170924
	}
}

export default card
