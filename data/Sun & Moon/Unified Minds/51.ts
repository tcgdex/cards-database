import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Golisopod",
		fr: "Sarmuraï",
		es: "Golisopod",
		it: "Golisopod",
		pt: "Golisopod",
		de: "Tectass"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		768,
	],
	hp: 140,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Wimpod",
		fr: "Sovkipou",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Emergency Exit",
				fr: "Repli Tactique",
				es: "Retirada",
				it: "Passoindietro",
				pt: "Saída de Emergência",
				de: "Rückzug"
			},
			effect: {
				en: "If this Pokémon has 2 or fewer Energy attached to it, it has no Retreat Cost.",
				fr: "Si 2 Énergies ou moins sont attachées à ce Pokémon, il n’a pas de Coût de Retraite.",
				es: "Si este Pokémon tiene 2 o menos Energías unidas a él, no tiene ningún Coste de Retirada.",
				it: "Se questo Pokémon ha due o meno Energie assegnate, non ha costo di ritirata.",
				pt: "Se este Pokémon tiver 2 ou menos Energias ligadas a ele, não terá custo de Recuo.",
				de: "Wenn an dieses Pokémon 2 oder weniger Energien angelegt sind, hat es keine Rückzugskosten."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "First Impression",
				fr: "Escarmouche",
				es: "Escaramuza",
				it: "Schermaglia",
				pt: "Primeira Impressão",
				de: "Überrumpler"
			},
			effect: {
				en: "If this Pokémon was on the Bench and became your Active Pokémon this turn, this attack does 60 more damage.",
				fr: "Si ce Pokémon était sur le Banc et est devenu votre Pokémon Actif pendant ce tour, cette attaque inflige 60 dégâts supplémentaires.",
				es: "Si este Pokémon estaba en la Banca y se ha convertido en tu Pokémon Activo en este turno, este ataque hace 60 puntos de daño más.",
				it: "Se questo Pokémon era in panchina ed è diventato il tuo Pokémon attivo in questo turno, questo attacco infligge 60 danni in più.",
				pt: "Se este Pokémon estava no Banco e se tornou o seu Pokémon Ativo nesta rodada, este ataque causará 60 pontos de dano a mais.",
				de: "Wenn dieses Pokémon auf der Bank war und in diesem Zug zu deinem Aktiven Pokémon wurde, fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "120+",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
