import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	set: Set,

	name: {
		fr: "Séléroc",
		en: "Lunatone",
		es: "Lunatone",
		it: "Lunatone",
		pt: "Lunatone",
		de: "Lunastein"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Nouvelle Lune",
			en: "New Moon",
			es: "Luna Nueva",
			it: "Novilunio",
			pt: "Lua Nova",
			de: "Neumond"
		},

		effect: {
			fr: "Si vous avez Solaroc en jeu, évitez tous les effets infligés par n'importe quel Stade à vos Pokémon en jeu.",
			en: "If you have Solrock in play, prevent all effects of any Stadium done to your Pokémon in play.",
			es: "Si tienes a Solrock en juego, se evitan todos los efectos de cualquier Estadio que afecten a tus Pokémon en juego.",
			it: "Se hai in gioco Solrock, previeni tutti gli effetti di qualsiasi carta Stadio inflitti ai tuoi Pokémon in gioco.",
			pt: "Se você tiver Solrock em jogo, previna todos os efeitos de qualquer Estádio causados aos seus Pokémon em jogo.",
			de: "Wenn du Sonnfel im Spiel hast, verhindere alle Effekte von Stadionkarten, die deinen Pokémon im Spiel zugefügt werden."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			fr: "Pression Lunaire",
			en: "Moon Press",
			es: "Presión Lunar",
			it: "Pressa Lunare",
			pt: "Pressão Lunar",
			de: "Mondkraft"
		},

		damage: 100
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card