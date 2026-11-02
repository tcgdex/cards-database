import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Noivern)'

const card: Card = {
	dexId: [715],
	set: Set,

	name: {
		en: "Noivern",
		fr: "Bruyverne",
		es: "Noivern",
		it: "Noivern",
		pt: "Noivern",
		de: "UHaFnir"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",

	description: {
		en: "They fly around on moonless nights and attack careless prey. Nothing can beat them in a battle in the dark.",
		de: "Es fliegt in finsterer, mondloser Nacht umher und macht Jagd auf achtlose Beute. Ist bei Dunkelheit jedem Gegner überlegen."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Second Bite",
			fr: "Double Morsure",
			de: "Wunde Stelle"
		},

		damage: "20+",

		effect: {
			en: "This attack does 10 more damage for each damage counter on your opponent’s Active Pokémon.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur le Pokémon Actif de votre adversaire.",
			de: "Dieser Angriff fügt 10 weitere Schadenspunkte für jede Schadensmarke auf dem Aktiven Pokémon deines Gegners zu."
		}
	}, {
		name: {
			en: "Sonic Bazooka",
			fr: "Canon Supersonique",
			de: "Bazookaschall"
		},

		damage: "60+",

		effect: {
			en: "Flip a coin. If heads, this attack does 30 more damage and your opponent’s Active Pokémon is now Confused.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires et le Pokémon Actif de votre adversaire est maintenant Confus.",
			de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 30 weitere Schadenspunkte zu und das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		}
	}],

	hp: 110,
	types: ["Dragon"],

	evolveFrom: {
		en: "Noibat",
		fr: "Sonistrelle",
		es: "Noibat",
		it: "Noibat",
		pt: "Noibat",
		de: "eF-eM"
	},

	retreat: 1,

	weaknesses: [{
		type: "Fairy",
		value: "×2"
	}],

	thirdParty: {
		tcgplayer: 98025
	}
}

export default card