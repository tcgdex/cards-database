import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Dialga",
		fr: "Dialga",
		es: "Dialga",
		it: "Dialga",
		pt: "Dialga",
		de: "Dialga"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],
	stage: "Basic",
	illustrator: "Ryuta Fuse",

	attacks: [{
		name: {
			en: "Chrono Wind",
			fr: "Vent Temporel",
			es: "Retroceso Cronológico",
			it: "Cronolancetta",
			pt: "Chrono Wind",
			de: "Zeitsturm"
		},

		effect: {
			en: "If the Defending Pokémon is a Pokémon V, it can't attack during your opponent's next turn.",
			fr: "Si le Pokémon Défenseur est un Pokémon-V, il ne peut pas attaquer pendant le prochain tour de votre adversaire.",
			es: "Si el Pokémon Defensor es un Pokémon V, no puede atacar durante el próximo turno de tu rival.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare se è un Pokémon-V.",
			pt: "If the Defending Pokémon is a Pokémon V, it can't attack during your opponent's next turn.",
			de: "Wenn das Verteidigende Pokémon ein Pokémon-V ist, kann es während des nächsten Zuges deines Gegners nicht angreifen."
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			en: "Heavy Impact",
			fr: "Gros Impact",
			es: "Impacto Pesado",
			it: "Impatto Pesante",
			pt: "Heavy Impact",
			de: "Schwerer Einschlag"
		},

		damage: 210,
		cost: ["Psychic", "Metal", "Metal", "Colorless"]
	}],

	retreat: 2,
	dexId: [483],

	description: {
		en: "It has the power to control time. It appears in Sinnoh-region myths as an ancient deity."
	},

	regulationMark: "E"
}

export default card
