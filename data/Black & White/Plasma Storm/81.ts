import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Conkeldurr",
		fr: "Bétochef",
		es: "Conkeldurr",
		it: "Conkeldurr",
		pt: "Conkeldurr",
		de: "Meistagrif"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		534,
	],

	hp: 140,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Gurdurr",
		fr: "Ouvrifier",
		de: "Strepoli"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Facade",
				fr: "Façade",
				de: "Fassade"
			},
			effect: {
				en: "If this Pokémon is Burned or Poisoned, this attack does 60 more damage.",
				fr: "Si ce Pokémon est Brûlé ou Empoisonné, cette attaque inflige 60 dégâts supplémentaires.",
				de: "Wenn dieses Pokémon verbrannt oder vergiftet ist, fügt dieser Angriff 60 weitere Schadenspunkte zu."
			},
			damage: 60,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Drain Punch",
				fr: "Vampipoing",
				de: "Ableithieb"
			},
			effect: {
				en: "Heal 20 damage from this Pokémon.",
				fr: "Soignez 20 dégâts à ce Pokémon.",
				de: "Heile 20 Schadenspunkte bei diesem Pokémon."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		en: "Rather than rely on force, they master moves that utilize the centrifugal force of spinning concrete.",
		de: "Es setzt Attacken ein, die sich die Zentrifugalkraft zunutze machen, indem es seine Betonpfeiler umherschwingt."
	},

	thirdParty: {
		cardmarket: 280821,
		tcgplayer: 84420
	}
}

export default card
