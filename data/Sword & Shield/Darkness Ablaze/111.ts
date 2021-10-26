import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Hoopa",
		fr: "Hoopa",
		es: "Hoopa",
		it: "Hoopa",
		pt: "Hoopa",
		de: "Hoopa"
	},

	illustrator: "so-taro",
	rarity: "Rare",
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
				en: "Assault Gate",
				fr: "Portail d'Assaut",
				es: "Puerta de Asalto",
				it: "Portaleassalto",
				pt: "Portal Ofensivo",
				de: "Überfallportal"
			},
			effect: {
				en: "If this Pokémon didn't move from the Bench to the Active Spot this turn, this attack does nothing. This attack's damage isn't affected by Weakness.",
				fr: "Si ce Pokémon n'a pas été déplacé du Banc vers le Poste Actif pendant ce tour, cette attaque ne fait rien. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse.",
				es: "Si este Pokémon no se ha movido de la Banca al Puesto Activo en este turno, este ataque no hace nada. El daño de este ataque no se ve afectado por Debilidad.",
				it: "Se questo Pokémon non si è spostato dalla panchina in posizione attiva nel turno in corso, questo attacco non ha effetto. I danni di questo attacco non sono influenzati dalla debolezza.",
				pt: "Se este Pokémon não foi movido do Banco para o Campo Ativo durante este turno, este ataque não fará nada. O dano deste ataque não é afetado por Fraqueza.",
				de: "Wenn dieses Pokémon während dieses Zuges nicht von der Bank in die Aktive Position gewechselt ist, hat diese Attacke keine Auswirkungen. Der Schaden dieser Attacke wird durch Schwäche nicht verändert."
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

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "It gathers things it likes and passes them through its loop to teleport them to a secret place."
	}
}

export default card
