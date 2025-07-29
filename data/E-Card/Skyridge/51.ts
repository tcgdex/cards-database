import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Ditto",
		de: "Ditto"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		132,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Prismatic Body",
				de: "Prismatischer Körper"
			},
			effect: {
				en: "Each basic Energy card attached to Ditto provides every type of Energy but provides only 1 Energy at a time.",
				de: "Jede an Ditto angelegte Basis-Energiekarte erzeugt jeden Energietyp, aber nur 1 Energie auf einmal."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Copy",
				de: "Kopie"
			},
			effect: {
				en: "Choose 1 of the Defending Pokémon's attacks. Copy copies that attack. This attack does nothing if Ditto doesn't have the Energy necessary to use that attack. (You must still do anything else required in order to use that attack.)",
				de: "Wähle 1 der Angriffe des verteidigenden Pokémon. Kopie kopiert diesen Angriff. Dieser Angriff hat keine Auswirkungen, wenn an Ditto nicht die für diesen Angriff benötigte Energie angelegt ist. (Du musst immer noch alles tun, was verlangt wird, um diesen Angriff durchzuführen.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275309
	}
}

export default card
