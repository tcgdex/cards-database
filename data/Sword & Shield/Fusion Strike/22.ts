import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [812],
	set: Set,

	name: {
		en: "Rillaboom V",
		fr: "Gorythmic V",
		es: "Rillaboom V",
		it: "Rillaboom V",
		pt: "Rillaboom V",
		de: "Gortrom V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 220,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",
	retreat: 2,
	regulationMark: "E",
	illustrator: "5ban Graphics",

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Drain Punch",
			fr: "Vampi-Poing",
			de: "Ableithieb",
			es: "Puño Drenaje",
			pt: "Soco Dreno",
			it: "Assorbipugno"
		},

		damage: 60,

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			pt: "Cure 30 pontos de dano deste Pokémon.",
			it: "Cura questo Pokémon da 30 danni."
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Drum Rush",
			fr: "Charge Tambour",
			de: "Trommelansturm",
			es: "Embestida Percusión",
			pt: "Investida de Tambores",
			it: "Raffica di Tamburi"
		},

		damage: 160
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582081
	}
}

export default card
