import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Solgaleo",
		'fr-fr': "Solgaleo",
		'es-es': "Solgaleo",
		'it-it': "Solgaleo",
		'pt-br': "Solgaleo",
		'de-de': "Solgaleo"
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
		'en-us': "Cosmoem",
		'fr-fr': "Cosmovum",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Full Metal Body",
				'fr-fr': "Métallo-Garde",
				'es-es': "Guardia Metálica",
				'it-it': "Metalprotezione",
				'pt-br': "Corpo Metálico",
				'de-de': "Metallprotektor"
			},
			effect: {
				'en-us': "If this Pokémon has any Metal Energy attached to it, it has no Weakness.",
				'fr-fr': "Si de l’Énergie Metal est attachée à ce Pokémon, il n’a pas de Faiblesse.",
				'es-es': "Si este Pokémon tiene alguna Energía Metal unida a él, no tiene ninguna Debilidad.",
				'it-it': "Se questo Pokémon ha delle Energie Metal assegnate, non ha debolezza.",
				'pt-br': "Se este Pokémon tiver alguma Energia Metal ligada a ele, não terá Fraqueza.",
				'de-de': "Wenn an dieses Pokémon mindestens 1 Metal-Energie angelegt ist, hat es keine Schwäche."
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
				'en-us': "Rising Dash",
				'fr-fr': "Ruée Ascendante",
				'es-es': "Carrera Ascendente",
				'it-it': "Balzo Scattante",
				'pt-br': "Corrida Crescente",
				'de-de': "Steigender Sprint"
			},
			effect: {
				'en-us': "This attack’s damage isn’t affected by Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				'es-es': "El daño de este ataque no se ve afectado por Resistencia.",
				'it-it': "I danni di questo attacco non sono influenzati dalla resistenza.",
				'pt-br': "O dano deste ataque não é afetado por Resistência.",
				'de-de': "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
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

	description: {
		'en-us': "It is said to live in another world. The intense light it radiates from the surface of its body can make the darkest of nights light up like midday.",
	},

	thirdParty: {
		cardmarket: 361341,
		tcgplayer: 170924
	}
}

export default card
