import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Ludicolo",
		fr: "Ludicolo",
		es: "Ludicolo",
		de: "Kappalores",
		it: "Ludicolo",
		pt: "Ludicolo",
		'es-mx': "Ludicolo"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Vibrant Dance",
			fr: "Danse Vivante",
			es: "Danza Vibrante",
			de: "Lebhafter Tanz",
			it: "Danza Vivace",
			pt: "Samba da Vitalidade",
			'es-mx': "Samba Vital"
		},

		effect: {
			en: "All of your Pokémon in play get +40 HP. The effect of Vibrant Dance doesn't stack.",
			fr: "Tous vos Pokémon en jeu reçoivent +40 PV. L'effet de Danse Vivante n'est pas cumulable.",
			es: "Cada uno de tus Pokémon en juego obtiene 40 PS más. El efecto de Danza Vibrante no se acumula.",
			de: "Alle deine Pokémon im Spiel erhalten +40 KP. Der Effekt von Lebhafter Tanz stapelt sich nicht.",
			it: "I tuoi Pokémon in gioco hanno 40 PS in più. L'effetto di Danza Vivace non è cumulabile.",
			pt: "Todos os seus Pokémon em jogo recebem 40 PS a mais. O efeito de Samba da Vitalidade não acumula.",
			'es-mx': "Cada uno de tus Pokémon en juego obtiene 40 PS más. El efecto de Samba Vital no se acumula."
		}
	}],

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Hydro Splash",
			fr: "Hydro-Éclaboussure",
			es: "Hidroestallido",
			de: "Hydroplatscher",
			it: "Idrosplash",
			pt: "Hidroborrifada",
			'es-mx': "Hidrosalpicadura"
		},

		damage: 130
	}],

	retreat: 2,
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": true,
		"normal": false
		"reverse": true,
		"wPromo": false,
		}
}

export default card
