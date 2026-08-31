import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Beautifly",
		fr: "Charmillon",
		de: "Papinella"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [267],

	hp: 120,

	types: [
		"Grass"
	],

	evolveFrom: {
		en: "Silcoon",
		fr: "Armulys",
		de: "Schaloko"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Colorful Powder",
				fr: "Poudre colorée",
				de: "Farbpuder"
			},
			effect: {
				en: "If Beautifly has 2 or less Energy attached to it, the Defending Pokémon is now Poisoned. If Beautifly has 3 Energy attached to it, the Defending Pokémon is now Burned and Poisoned. If Beautifly has 4 or more Energy attached to it, this attack does 20 damage plus 40 more damage and the Defending Pokémon is now Asleep, Burned, and Poisoned.",
				fr: "Si Charmillon possède un maximum de 2 Énergies, le Pokémon Défenseur est maintenant Empoisonné. Si Charmillon possède 3 Énergies, le Pokémon Défenseur est maintenant Brûlé et Empoisonné. Si Charmillon possède au moins 4 Énergies, cette attaque inflige 20 dégâts plus 40 dégâts supplémentaires et le Pokémon Défenseur est maintenant Endormi, Brûlé et Empoisonné.",
				de: "Wenn an Papinella 2 oder weniger Energien angelegt sind, ist das Verteidigende Pokémon jetzt vergiftet. Wenn an Papinella 3 Energien angelegt sind, ist das Verteidigende Pokémon jetzt verbrannt und vergiftet. Wenn an Papinella 4 oder mehr Energien angelegt sind, fügt dieser Angriff 20 Schadenspunkte plus 40 weitere Schadenspunkte zu und das Verteidigende Pokémon schläft jetzt und ist verbrannt und vergiftet."
			},
			damage: "20+",

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Silver Scale",
				fr: "Écaille argentée",
				de: "Silberschuppe"
			},
			effect: {
				en: "If the Defending Pokémon has any Resistance, this attack's base damage is 60 damage instead of 30.",
				fr: "Si le Pokémon Défenseur possède une Résistance, les dégâts de base de cette attaque sont de 60 au lieu de 30.",
				de: "Wenn das Verteidigende Pokémon mindestens eine Resistenz hat, beträgt der Grundschaden dieses Angriffs 60 Schadenspunkte anstelle von 30 Schadenspunkten."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	description: {
		en: "Despite its looks, it is aggressive. It jabs with its long, thin mouth if disturbed while collecting pollen.",
		de: "Stört man es, während es Pollen sucht, stößt es mit seinem langen, dünnen Mund zu."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 83759,
				cardmarket: 278442
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278442,
				tcgplayer: 83759
			}
		}
	],

	retreat: 0
}

export default card
