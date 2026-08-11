import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Crawdaunt",
		'fr-fr': "Colhomard",
		'de-de': "Krebutack",
		'it-it': "Crawdaunt",
		'es-es': "Crawdaunt",
		'pt-br': "Crawdaunt",
		'es-mx': "Crawdaunt"
	},

	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Corphish",
		'fr-fr': "Écrapince",
		'de-de': "Krebscorps",
		'it-it': "Corphish",
		'es-es': "Corphish",
		'pt-br': "Corphish",
		'es-mx': "Corphish"
	},
	stage: "Stage1",
	dexId: [342],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Vise Grip",
			'fr-fr': "Force Poigne",
			'de-de': "Klammer",
			'it-it': "Presa",
			'es-es': "Agarre",
			'pt-br': "Agarramento Compressor",
			'es-mx': "Fuerza de Garra"
		},

		damage: 30
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'en-us': "Cutting Riposte",
			'fr-fr': "Riposte Coupante",
			'de-de': "Schneidiger Gegenschlag",
			'it-it': "Risposta Tagliente",
			'es-es': "Contraataque Cortante",
			'pt-br': "Retaliação Cortante",
			'es-mx': "Revancha Cortante"
		},

		effect: {
			'en-us': "If this Pokémon has any damage counters on it, this attack can be used for {D}.",
			'fr-fr': "Si ce Pokémon a au moins un marqueur de dégâts, cette attaque peut être utilisée pour {D}.",
			'de-de': "Wenn auf diesem Pokémon mindestens 1 Schadensmarke liegt, kann diese Attacke für {D} eingesetzt werden.",
			'it-it': "Se questo Pokémon ha dei segnalini danno, questo attacco può essere usato al costo di {D}.",
			'es-es': "Si este Pokémon tiene algún contador de daño sobre él, este ataque se puede usar por {D}.",
			'pt-br': "Se este Pokémon tiver algum contador de dano nele, este ataque poderá ser usado por {D}.",
			'es-mx': "Si este Pokémon tiene algún contador de daño sobre él, este ataque se puede usar por {D}."
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851156,
				tcgplayer: 654424
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851156,
				tcgplayer: 654424
			}
		},
	],
}

export default card
