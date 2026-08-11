import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Jynx",
		'fr-fr': "Lippoutou",
		'de-de': "Rossana"
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
				'en-us': "Icy Kiss",
				'fr-fr': "Baiser glacial",
				'de-de': "Frostiger Kuss"
			},
			effect: {
				'en-us': "If Jynx was damaged by an attack during your opponent's last turn, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Si une attaque a infligé des dégâts à Lippoutou lors du dernier tour de votre adversaire, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wenn Rossana im letzten Zug deines Gegners durch einen Angriff Schaden zugefügt wurde, ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Lovely Kiss",
				'fr-fr': "Grobisou",
				'de-de': "Todeskuss"
			},
			effect: {
				'en-us': "Move 2 damage counters from Jynx to the Defending Pokémon. If Smoochum is anywhere under Jynx, move 4 damage counters instead.",
				'fr-fr': "Déplacez 2 marqueurs de dégât de Lippoutou sur le Pokémon Défenseur. Si Lippouti se trouve sous Lippoutou, déplacez 4 marqueurs de dégât.",
				'de-de': "Entferne 2 Schadensmarken von Rossana und lege sie auf das Verteidigende Pokémon. Wenn Kussilla sich an beliebiger Stelle unter Rossana befindet, entferne stattdessen 4 Schadensmarken und lege sie auf das Verteidigende Pokémon."
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

	description: {
		'en-us': "It cries sound like human speech. However, it is impossible to tell what it is trying to say.",
	},

	thirdParty: {
		cardmarket: 277783,
		tcgplayer: 86376
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
