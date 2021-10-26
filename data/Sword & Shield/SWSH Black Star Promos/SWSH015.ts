import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Cinderace V",
		fr: "Pyrobut V",
		es: "Cinderace V",
		it: "Cinderace V",
		pt: "Cinderace V",
		de: "Liberlo V"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],

	abilities: [{
		type: "Ability",

		name: {
			en: "Field Runner",
			fr: "Coureur de Fond",
			es: "Corredor de Campo",
			it: "Corridore",
			pt: "Field Runner",
			de: "Feldspieler"
		},

		effect: {
			en: "If a Stadium is in play, this Pokémon has no Retreat Cost.",
			fr: "Si un Stade est en jeu, ce Pokémon n'a pas de Coût de Retraite.",
			es: "Si hay un Estadio en juego, este Pokémon no tiene ningún Coste de Retirada.",
			it: "Se c'è in gioco una carta Stadio, questo Pokémon non ha costo di ritirata.",
			pt: "If a Stadium is in play, this Pokémon has no Retreat Cost.",
			de: "Wenn eine Stadionkarte im Spiel ist, hat dieses Pokémon keine Rückzugskosten."
		}
	}],

	attacks: [{
		name: {
			en: "Crimson Legs",
			fr: "Jambes Carmin",
			es: "Extremidades Carmesís",
			it: "Arti Incandescenti",
			pt: "Crimson Legs",
			de: "Rote Beine"
		},

		damage: 140,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	stage: "Basic",
	dexId: [815],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",
	suffix: "V"
}

export default card
