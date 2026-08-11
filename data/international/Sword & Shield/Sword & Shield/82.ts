import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Galarian Rapidash",
		'fr-fr': "Galopa de Galar",
		'es-es': "Rapidash de Galar",
		'it-it': "Rapidash di Galar",
		'pt-br': "Rapidash de Galar",
		'de-de': "Galar-Gallopa"
	},

	illustrator: "You Iribi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 100,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Galarian Ponyta",
		'fr-fr': "Ponyta de Galar",
		'es-es': "Ponyta de Galar",
		'it-it': "Ponyta di Galar",
		'pt-br': "Ponyta de Galar",
		'de-de': "Galar-Ponita"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Pastel Veil",
				'fr-fr': "Voile Pastel",
				'es-es': "Velo Pastel",
				'it-it': "Pastelvelo",
				'pt-br': "Véu de Tons Pastéis",
				'de-de': "Pastellhülle"
			},
			effect: {
				'en-us': "Your Pokémon recover from all Special Conditions and can't be affected by any Special Conditions.",
				'fr-fr': "Vos Pokémon guérissent de tous les États Spéciaux et ne peuvent être affectés par aucun État Spécial.",
				'es-es': "Tu Pokémon se recupera de todas las Condiciones Especiales y no puede verse afectado por ninguna Condición Especial.",
				'it-it': "I tuoi Pokémon guariscono da tutte le condizioni speciali e non possono esserne influenzati.",
				'pt-br': "Seus Pokémon se recuperam de todas as Condições Especiais e não podem ser afetados por quaisquer Condições Especiais.",
				'de-de': "Deine Pokémon erholen sich von allen Speziellen Zuständen und können von keinen Speziellen Zuständen betroffen werden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Psychic",
				'fr-fr': "Psyko",
				'es-es': "Psíquico",
				'it-it': "Psichico",
				'pt-br': "Psíquico",
				'de-de': "Psychokinese"
			},
			effect: {
				'en-us': "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon.",
				'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
				'es-es': "Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
				'it-it': "Questo attacco infligge 30 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
				'de-de': "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 30 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		'en-us': "Brave and prideful, this Pokémon dashes airily through the forest, its steps aided by the psychic power stored in the fur on its fetlocks."
	},

	dexId: [78],

	thirdParty: {
		cardmarket: 436534,
		tcgplayer: 208387
	}
}

export default card
