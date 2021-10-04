import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Drampa",
		fr: "Draïeul",
		es: "Drampa",
		it: "Drampa",
		pt: "Drampa",
		de: "Sen-Long"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],
	stage: "Basic",
	illustrator: "Tomokazu Komiya",

	attacks: [{
		name: {
			en: "Corkscrew Punch",
			fr: "Poing Tire-Bouchon",
			es: "Puño Tirabuzón",
			it: "Pugno Rotante",
			pt: "Corkscrew Punch",
			de: "Korkenzieherhieb"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			en: "Berserk",
			fr: "Dracolère",
			es: "Cólera",
			it: "Furore",
			pt: "Berserk",
			de: "Wutausbruch"
		},

		effect: {
			en: "If your Benched Pokémon have any damage counters on them, this attack does 90 more damage.",
			fr: "Si au moins un marqueur de dégâts est placé sur vos Pokémon de Banc, cette attaque inflige 90 dégâts supplémentaires.",
			es: "Si tus Pokémon en Banca tienen algún contador de daño sobre ellos, este ataque hace 90 puntos de daño más.",
			it: "Se i tuoi Pokémon in panchina hanno dei segnalini danno, questo attacco infligge 90 danni in più.",
			pt: "If your Benched Pokémon have any damage counters on them, this attack does 90 more damage.",
			de: "Wenn auf den Pokémon auf deiner Bank mindestens 1 Schadensmarke liegt, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "70+",
		cost: ["Water", "Fighting"]
	}],

	retreat: 2,
	dexId: [780],

	description: {
		en: "Drampa is a kind and friendly Pokémon—up until it’s angered. When that happens, it stirs up a gale and flattens everything around."
	}
}

export default card