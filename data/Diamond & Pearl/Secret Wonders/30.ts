import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Jynx",
		fr: "Lippoutou",
		de: "Rossana"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		124,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Icy Kiss",
				fr: "Baiser glacial",
				de: "Frostiger Kuss"
			},
			effect: {
				en: "If Jynx was damaged by an attack during your opponent's last turn, the Defending Pokémon is now Paralyzed.",
				fr: "Si une attaque a infligé des dégâts à Lippoutou lors du dernier tour de votre adversaire, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wenn Rossana im letzten Zug deines Gegners durch einen Angriff Schaden zugefügt wurde, ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Lovely Kiss",
				fr: "Grobisou",
				de: "Todeskuss"
			},
			effect: {
				en: "Move 2 damage counters from Jynx to the Defending Pokémon. If Smoochum is anywhere under Jynx, move 4 damage counters instead.",
				fr: "Déplacez 2 marqueurs de dégât de Lippoutou sur le Pokémon Défenseur. Si Lippouti se trouve sous Lippoutou, déplacez 4 marqueurs de dégât.",
				de: "Entferne 2 Schadensmarken von Rossana und lege sie auf das Verteidigende Pokémon. Wenn Kussilla sich an beliebiger Stelle unter Rossana befindet, entferne stattdessen 4 Schadensmarken und lege sie auf das Verteidigende Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 277783
	}
}

export default card
