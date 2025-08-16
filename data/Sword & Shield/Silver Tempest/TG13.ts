import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [497],
	set: Set,

	name: {
		en: "Serperior V",
		fr: "Majaspic V",
		es: "Serperior V",
		it: "Serperior V",
		pt: "Serperior V",
		de: "Serpiroyal V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Noble Light",
			fr: "Noble Lumière",
			es: "Luz Noble",
			it: "Luce Nobile",
			pt: "Luz Nobre",
			de: "Nobles Licht"
		},

		effect: {
			en: "Heal 30 damage from each Pokémon (both yours and your opponent's).",
			fr: "Soignez 30 dégâts de chaque Pokémon (les vôtres et ceux de votre adversaire).",
			es: "Cura 30 puntos de daño a cada Pokémon (tanto tuyos como de tu rival).",
			it: "Cura tutti i Pokémon, sia tuoi che del tuo avversario, da 30 danni.",
			pt: "Cure 30 pontos de dano de cada Pokémon (seus e do seu oponente).",
			de: "Heile 30 Schadenspunkte bei jedem Pokémon (deinen und denen deines Gegners)."
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Solar Beam",
			fr: "Lance-Soleil",
			es: "Rayo Solar",
			it: "Solarraggio",
			pt: "Raio Solar",
			de: "Solarstrahl"
		},

		damage: 120
	}],

	retreat: 1,
	regulationMark: "F",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
