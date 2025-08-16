import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [488],
	set: Set,

	name: {
		en: "Cresselia",
		fr: "Cresselia",
		es: "Cresselia",
		it: "Cresselia",
		pt: "Cresselia",
		de: "Cresselia"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Moonglow Reverse",
			fr: "Éclat de Lune Inversé",
			es: "Brillo Lunar Inverso",
			it: "Invertiluna",
			pt: "Brilho Lunar Reverso",
			de: "Mondschimmerumkehr"
		},

		effect: {
			en: "Move 2 damage counters from each of your Pokémon to 1 of your opponent's Pokémon.",
			fr: "Déplacez 2 marqueurs de dégâts de chacun de vos Pokémon vers l'un des Pokémon de votre adversaire.",
			es: "Mueve 2 contadores de daño de cada uno de tus Pokémon a 1 de los Pokémon de tu rival.",
			it: "Sposta due segnalini danno da ciascuno dei tuoi Pokémon a uno dei Pokémon del tuo avversario.",
			pt: "Mova 2 contadores de dano de cada um dos seus Pokémon para 1 dos Pokémon do seu oponente.",
			de: "Verschiebe 2 Schadensmarken von jedem deiner Pokémon auf 1 Pokémon deines Gegners."
		}
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			en: "Lunar Blast",
			fr: "Explosion Lunaire",
			es: "Explosión Lunar",
			it: "Furia Lunare",
			pt: "Detonação Lunar",
			de: "Mondsturm"
		},

		damage: 110
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	},

	thirdParty: {
		cardmarket: 674086,
		tcgplayer: 283953
	}
}

export default card
