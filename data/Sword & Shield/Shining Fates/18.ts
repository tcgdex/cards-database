import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Pyrobut V",
		en: "Cinderace V",
		es: "Cinderace V",
		it: "Cinderace V",
		pt: "Cinderace V",
		de: "Liberlo V"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],

	abilities: [{
		type: "Ability",

		name: {
			fr: "Coureur de Fond",
			en: "Field Runner",
			es: "Corredor de Campo",
			it: "[Ability] Corridore",
			pt: "[Ability] Corredor Campal",
			de: "Feldspieler"
		},

		effect: {
			fr: "Si un Stade est en jeu, ce Pokémon n'a pas de Coût de Retraite.",
			en: "If a Stadium is in play, this Pokémon has no Retreat Cost.",
			es: "Si hay un Estadio en juego, este Pokémon no tiene ningún Coste de Retirada.",
			it: "Se c'è in gioco una carta Stadio, questo Pokémon non ha costo di ritirata.",
			pt: "Se um Estádio estiver em jogo, este Pokémon não terá custo de Recuo.",
			de: "Wenn eine Stadionkarte im Spiel ist, hat dieses Pokémon keine Rückzugskosten."
		}
	}],

	attacks: [{
		name: {
			fr: "Jambes Carmin",
			en: "Crimson Legs",
			es: "Extremidades Carmesís",
			it: "Arti Incandescenti",
			pt: "Pernas Carmesins",
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
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V"
}

export default card
