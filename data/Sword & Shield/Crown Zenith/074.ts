import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [745],
	set: Set,

	name: {
		en: "Lycanroc",
		fr: "Lougaroc",
		es: "Lycanroc",
		it: "Lycanroc",
		pt: "Lycanroc",
		de: "Wolwerock"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	evolveFrom: {
		en: "Rockruff",
		fr: "Rocabot",
		es: "Rockruff",
		it: "Rockruff",
		pt: "Rockruff",
		de: "Wuffels"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Midnight Fang",
			fr: "Croc de Minuit",
			es: "Colmillo Nocturno",
			it: "Zanna della Notte",
			pt: "Presa da Meia-noite",
			de: "Mitternachtsfänge"
		},

		effect: {
			en: "This attack does 80 less damage for each Energy attached to your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 80 dégâts de moins pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			es: "Este ataque hace 80 puntos de daño menos por cada Energía unida al Pokémon Activo de tu rival.",
			it: "Questo attacco infligge 80 danni in meno per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			pt: "Este ataque causa 80 pontos de dano a menos para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			de: "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 80 Schadenspunkte weniger zu."
		},

		damage: "240-"
	}],

	retreat: 1,
	regulationMark: "F",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card