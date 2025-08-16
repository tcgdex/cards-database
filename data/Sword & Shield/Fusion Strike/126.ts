import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [770],
	set: Set,

	name: {
		en: "Palossand",
		fr: "Trépassable",
		es: "Palossand",
		it: "Palossand",
		pt: "Palossand",
		de: "Colossand"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	evolveFrom: {
		en: "Sandygast",
		fr: "Bacabouh",
		es: "Sandygast",
		it: "Sandygast",
		pt: "Sandygast",
		de: "Sankabuh"
	},

	stage: "Stage1",
	retreat: 4,
	regulationMark: "E",
	illustrator: "Shibuzoh.",

	description: {
		en: "Once it has whipped up a sandstorm to halt its opponents in their tracks, this terrifying Pokémon snatches away their vitality."
	},

	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			en: "Spooky Sand",
			fr: "Sable Effrayant",
			de: "Spuksand",
			es: "Arena Embrujada",
			pt: "Areia Assustadora",
			it: "Sabbia Inquietante"
		},

		damage: 120
	}, {
		cost: ["Psychic", "Psychic", "Psychic", "Colorless"],

		name: {
			en: "Oppressing Sandstorm",
			fr: "Sirocco Étouffant",
			de: "Schrecklicher Sandsturm",
			es: "Tormenta de Arena Opresiva",
			pt: "Tempestade de Areia Opressiva",
			it: "Terrempesta Opprimente"
		},

		effect: {
			en: "If your opponent's Active Pokémon is a Basic Pokémon, it is Knocked Out.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon de base, il est mis K.O.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Basis-Pokémon ist, ist es kampfunfähig.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon Básico, queda Fuera de Combate.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon Básico, ele será Nocauteado.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon Base, viene messo KO."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582660,
		tcgplayer: 253313
	}
}

export default card