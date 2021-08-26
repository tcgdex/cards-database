import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Galarian Rapidash",
		fr: "Galopa de Galar",
		es: "Rapidash de Galar",
		it: "Rapidash di Galar",
		pt: "Rapidash de Galar",
		de: "Galar-Gallopa"
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
		en: "Galarian Ponyta",
		fr: "Ponyta de Galar",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Pastel Veil",
				fr: "Voile Pastel",
				es: "Velo Pastel",
				it: "Pastelvelo",
				pt: "Véu de Tons Pastéis",
				de: "Pastellhülle"
			},
			effect: {
				en: "Your Pokémon recover from all Special Conditions and can’t be affected by any Special Conditions.",
				fr: "Vos Pokémon guérissent de tous les États Spéciaux et ne peuvent être affectés par aucun État Spécial.",
				es: "Tu Pokémon se recupera de todas las Condiciones Especiales y no puede verse afectado por ninguna Condición Especial.",
				it: "I tuoi Pokémon guariscono da tutte le condizioni speciali e non possono esserne influenzati.",
				pt: "Seus Pokémon se recuperam de todas as Condições Especiais e não podem ser afetados por quaisquer Condições Especiais.",
				de: "Deine Pokémon erholen sich von allen Speziellen Zuständen und können von keinen Speziellen Zuständen betroffen werden."
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
				en: "Psychic",
				fr: "Psyko",
				es: "Psíquico",
				it: "Psichico",
				pt: "Psíquico",
				de: "Psychokinese"
			},
			effect: {
				en: "This attack does 30 more damage for each Energy attached to your opponent’s Active Pokémon.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
				es: "Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
				it: "Questo attacco infligge 30 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
				pt: "Este ataque causa 30 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
				de: "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 30 Schadenspunkte mehr zu."
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
		en: "Brave and prideful, this Pokémon dashes airily through the forest, its steps aided by the psychic power stored in the fur on its fetlocks."
	}
}

export default card
