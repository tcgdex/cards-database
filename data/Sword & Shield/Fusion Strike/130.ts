import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Dragapult",
		fr: "Lanssorien",
		es: "Dragapult",
		it: "Dragapult",
		pt: "Dragapult",
		de: "Katapuldra"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],

	evolveFrom: {
		en: "Drakloak",
		fr: "Dispareptil",
		es: "Drakloak",
		it: "Drakloak",
		pt: "Drakloak",
		de: "Phandra"
	},

	stage: "Stage2",
	retreat: 0,
	regulationMark: "E",
	illustrator: "Souichirou Gunjima",

	description: {
		en: "Apparently the Dreepy inside Dragapult's horns eagerly look forward to being launched out at Mach speeds."
	},

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Fusion Strike Assault",
			fr: "Assaut Poing de Fusion",
			es: "Asalto Golpe Fusión",
			it: "Assalto Colpo Fusione",
			de: "Fusionsangriff-Offensive"
		},

		damage: "30×",

		effect: {
			en: "This attack does 30 damage for each of your Fusion Strike Pokémon in play.",
			fr: "Cette attaque inflige 30 dégâts pour chacun de vos Pokémon Poing de Fusion en jeu.",
			es: "Este ataque hace 30 puntos de daño por cada uno de tus Pokémon Golpe Fusión en juego.",
			it: "Questo attacco infligge 30 danni per ogni tuo Pokémon Colpo Fusione in gioco.",
			de: "Diese Attacke fügt für jedes deiner Fusionsangriff-Pokémon im Spiel 30 Schadenspunkte zu."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Speed Attack",
			fr: "Attaque Rapide",
			es: "Ataque Fugaz",
			it: "Attacco Veloce",
			de: "Tempoangriff"
		},

		damage: 120
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	}
}

export default card