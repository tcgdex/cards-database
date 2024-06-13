import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [168],
	set: Set,

	name: {
		en: "Ariados",
		fr: "Migalos",
		es: "Ariados",
		it: "Ariados",
		pt: "Ariados",
		de: "Ariados"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		en: "Spinarak",
		fr: "Mimigal",
		es: "Spinarak",
		it: "Spinarak",
		pt: "Spinarak",
		de: "Webarak"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Hidden Threads",
			fr: "Toile Dissimulée",
			es: "Hilos Ocultos",
			it: "Tela Occulta",
			pt: "Fios Ocultos",
			de: "Verborgene Fäden"
		},

		effect: {
			en: "Your opponent's Pokémon VSTAR's attacks cost Colorless more. You can't apply more than 1 Hidden Threads Ability at a time.",
			fr: "Les attaques des Pokémon-VSTAR de votre adversaire coûtent Colorless de plus. Vous ne pouvez utiliser qu'un talent Toile Dissimulée à la fois.",
			es: "Los ataques de los Pokémon V-ASTRO de tu rival cuestan Colorless más. No puedes aplicar más de 1 habilidad Hilos Ocultos a la vez.",
			it: "Il costo degli attacchi dei Pokémon-V ASTRO del tuo avversario aumenta di Colorless. Non puoi applicare più di un'abilità Tela Occulta alla volta.",
			pt: "Os ataques dos Pokémon V-ASTRO do seu oponente custam Colorless a mais. Você não pode usar mais de 1 Habilidade Fios Ocultos por vez.",
			de: "Die Kosten der Attacken von Pokémon-VSTAR deines Gegners erhöhen sich um Colorless. Du kannst immer nur jeweils 1 Fähigkeit Verborgene Fäden einsetzen."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Pierce",
			fr: "Transpercement",
			es: "Perforar",
			it: "Perforare",
			pt: "Perfurar",
			de: "Durchbohren"
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "F",
	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	}
}

export default card
