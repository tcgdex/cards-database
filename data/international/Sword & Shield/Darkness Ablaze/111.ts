import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [720],

	name: {
		'en-us': "Hoopa",
		'fr-fr': "Hoopa",
		'es-es': "Hoopa",
		'it-it': "Hoopa",
		'pt-br': "Hoopa",
		'de-de': "Hoopa"
	},

	illustrator: "so-taro",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Darkness",
	],

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Assault Gate",
				'fr-fr': "Portail d'Assaut",
				'es-es': "Puerta de Asalto",
				'it-it': "Portaleassalto",
				'pt-br': "Portal Ofensivo",
				'de-de': "Überfallportal"
			},
			effect: {
				'en-us': "If this Pokémon didn't move from the Bench to the Active Spot this turn, this attack does nothing. This attack's damage isn't affected by Weakness.",
				'fr-fr': "Si ce Pokémon n'a pas été déplacé du Banc vers le Poste Actif pendant ce tour, cette attaque ne fait rien. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse.",
				'es-es': "Si este Pokémon no se ha movido de la Banca al Puesto Activo en este turno, este ataque no hace nada. El daño de este ataque no se ve afectado por Debilidad.",
				'it-it': "Se questo Pokémon non si è spostato dalla panchina in posizione attiva nel turno in corso, questo attacco non ha effetto. I danni di questo attacco non sono influenzati dalla debolezza.",
				'pt-br': "Se este Pokémon não foi movido do Banco para o Campo Ativo durante este turno, este ataque não fará nada. O dano deste ataque não é afetado por Fraqueza.",
				'de-de': "Wenn dieses Pokémon während dieses Zuges nicht von der Bank in die Aktive Position gewechselt ist, hat diese Attacke keine Auswirkungen. Der Schaden dieser Attacke wird durch Schwäche nicht verändert."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "It gathers things it likes and passes them through its loop to teleport them to a secret place."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 483434,
				tcgplayer: 219424
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483434,
				tcgplayer: 219424
			}
		},
	],
}

export default card
