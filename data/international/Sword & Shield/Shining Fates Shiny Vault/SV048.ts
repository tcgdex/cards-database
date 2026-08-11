import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [78],
	set: Set,

	name: {
		'fr-fr': "Galopa de Galar",
		'en-us': "Galarian Rapidash",
		'es-es': "Rapidash de Galar",
		'it-it': "Rapidash di Galar",
		'pt-br': "Rapidash de Galar",
		'de-de': "Galar-Gallopa"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	evolveFrom: {
		'fr-fr': "Ponyta de Galar",
		'en-us': "Galarian Ponyta"
	},

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Voile Pastel",
			'en-us': "Pastel Veil",
			'es-es': "Velo Pastel",
			'it-it': "Pastelvelo",
			'pt-br': "Véu de Tons Pastéis",
			'de-de': "Pastellhülle"
		},

		effect: {
			'fr-fr': "Vos Pokémon guérissent de tous les États Spéciaux et ne peuvent être affectés par aucun État Spécial.",
			'en-us': "Your Pokémon recover from all Special Conditions and can't be affected by any Special Conditions.",
			'es-es': "Tu Pokémon se recupera de todas las Condiciones Especiales y no puede verse afectado por ninguna Condición Especial.",
			'it-it': "I tuoi Pokémon guariscono da tutte le condizioni speciali e non possono esserne influenzati.",
			'pt-br': "Seus Pokémon se recuperam de todas as Condições Especiais e não podem ser afetados por quaisquer Condições Especiais.",
			'de-de': "Deine Pokémon erholen sich von allen Speziellen Zuständen und können von keinen Speziellen Zuständen betroffen werden."
		}
	}],

	attacks: [{
		name: {
			'fr-fr': "Psyko",
			'en-us': "Psychic",
			'es-es': "Psíquico",
			'it-it': "Psichico",
			'pt-br': "Psíquico",
			'de-de': "Psychokinese"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			'en-us': "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			'de-de': "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 30 Schadenspunkte mehr zu."
		},

		damage: "30+",
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Stage1",

	description: {
		'en-us': "Brave and prideful, this Pokémon dashes airily through the forest, its steps aided by the psychic power stored in the fur on its fetlocks."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539623,
				tcgplayer: 232410
			}
		},
	],
}

export default card
