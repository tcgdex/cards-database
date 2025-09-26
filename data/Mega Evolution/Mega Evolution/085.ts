import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Crawdaunt",
		fr: "Colhomard",
		de: "Krebutack",
		it: "Crawdaunt",
		es: "Crawdaunt",
		pt: "Crawdaunt",
		'es-mx': "Crawdaunt"
	},

	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Vise Grip",
			fr: "Force Poigne",
			de: "Klammer",
			it: "Presa",
			es: "Agarre",
			pt: "Agarramento Compressor",
			'es-mx': "Fuerza de Garra"
		},

		damage: 30
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Cutting Riposte",
			fr: "Riposte Coupante",
			de: "Schneidiger Gegenschlag",
			it: "Risposta Tagliente",
			es: "Contraataque Cortante",
			pt: "Retaliação Cortante",
			'es-mx': "Revancha Cortante"
		},

		effect: {
			en: "If this Pokémon has any damage counters on it, this attack can be used for {D}.",
			fr: "Si ce Pokémon a au moins un marqueur de dégâts, cette attaque peut être utilisée pour {D}.",
			de: "Wenn auf diesem Pokémon mindestens 1 Schadensmarke liegt, kann diese Attacke für {D} eingesetzt werden.",
			it: "Se questo Pokémon ha dei segnalini danno, questo attacco può essere usato al costo di {D}.",
			es: "Si este Pokémon tiene algún contador de daño sobre él, este ataque se puede usar por {D}.",
			pt: "Se este Pokémon tiver algum contador de dano nele, este ataque poderá ser usado por {D}.",
			'es-mx': "Si este Pokémon tiene algún contador de daño sobre él, este ataque se puede usar por {D}."
		},

		damage: 130
	}],

	retreat: 3,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654424
	}
}

export default card