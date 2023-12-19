import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Buizel",
		fr: "Mustébouée",
		de: "Bamelin"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		418,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Splash About",
				fr: "Grosse trempette",
				de: "Herumspritzen"
			},
			effect: {
				en: "If Buizel has less Energy attached to it than the Defending Pokémon, this attack does 10 damage plus 10 more damage.",
				fr: "Si Mustébouée possède moins d'Énergies que le Pokémon Défenseur, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires.",
				de: "Wenn an das Verteidigende Pokémon mehr Energie angelegt ist als an Bamelin, fügt dieser Angriff 10 Schadenspunkte plus 10 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		fr: "Sa bouée est pareille à un collier gonflable. Quand il flotte, il garde la tête à l'air libre."
	}
}

export default card
