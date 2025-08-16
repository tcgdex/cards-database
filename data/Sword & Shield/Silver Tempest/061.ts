import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [97],
	set: Set,

	name: {
		en: "Hypno",
		fr: "Hypnomade",
		es: "Hypno",
		it: "Hypno",
		pt: "Hypno",
		de: "Hypno"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	evolveFrom: {
		en: "Drowzee",
		fr: "Soporifik",
		es: "Drowzee",
		it: "Drowzee",
		pt: "Drowzee",
		de: "Traumato"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Psy Call",
			fr: "Appel Psy",
			es: "Psicollamada",
			it: "Psicochiamata",
			pt: "Chamado Psíquico",
			de: "Psyruf"
		},

		effect: {
			en: "Search your deck for up to 2 Stage 1 Pokémon and put them onto your Bench. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 Pokémon de Niveau 1 et placez-les sur votre Banc. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 2 Pokémon de Fase 1 y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a due Pokémon di Fase 1 e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 2 Pokémon Estágio 1 no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach bis zu 2 Phase-1-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			en: "Zen Headbutt",
			fr: "Psykoud'Boul",
			es: "Cabezazo Zen",
			it: "Cozzata Zen",
			pt: "Cabeçada Zen",
			de: "Zen-Kopfstoß"
		},

		damage: 90
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 682108,
		tcgplayer: 451715
	}
}

export default card