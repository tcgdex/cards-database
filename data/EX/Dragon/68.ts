import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Nincada",
		fr: "Ningale",
		de: "Nincada"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		290,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			name: {
				en: "Leech Life",
				fr: "Vampirisme",
				de: "Blutsauger"
			},

			effect: {
				en: "After your attack, remove from Nincada the number of damage counters equal to the damage you did to the Defending Pokémon. If Nincada has fewer damage counters than that, remove all of them.",
				fr: "Après votre attaque, retirez à Ningale autant de marqueurs de dégât que vous avez infligé de dégâts au Pokémon Défenseur. Si Ningale a moins de marqueurs de dégât que de dégâts infligés, retirez-les lui tous.",
				de: "Nach dem Kampf entferne pro 10 Schadenspunkte, die Nincada dem Verteidigenden Pokémon zugefügt hat, 1 Schadensmarke von Nincada. Falls zu wenig Schadensmarken vorhanden sind, entferne alle."
			},

			cost: ["Grass"],
			damage: 10
		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 275943,
		tcgplayer: 87758
	}
}

export default card
