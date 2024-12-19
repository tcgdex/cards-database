import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [65],
	set: Set,

	name: {
		en: "Alakazam",
		fr: "Alakazam",
		es: "Alakazam",
		it: "Alakazam",
		pt: "Alakazam",
		de: "Simsala"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],
	stage: "Stage2",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Strange Hacking",
			fr: "Piratage Étrange",
			es: "Hackeo Extraño",
			it: "Hacking Bizzarro",
			pt: "Hackeamento Estranho",
			de: "Seltsames Hacking"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused. You may move any number of damage counters from your opponent's Pokémon to their other Pokémon in any way you like.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus. Vous pouvez déplacer autant de marqueurs de dégâts que vous le voulez des Pokémon de votre adversaire vers ses autres Pokémon, comme il vous plaît.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido. Puedes mover cualquier cantidad de contadores de daño de los Pokémon de tu rival a sus otros Pokémon de la manera que desees.",
			it: "Il Pokémon attivo del tuo avversario viene confuso. Puoi spostare un numero qualsiasi di segnalini danno dai Pokémon del tuo avversario ai suoi altri Pokémon nel modo che preferisci.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso. Você pode mover qualquer número de contadores de dano dos Pokémon do seu oponente para os outros Pokémon dele como desejar.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt. Du kannst beliebig viele Schadensmarken von Pokémon deines Gegners beliebig auf seine anderen Pokémon verschieben."
		}
	}, {
		cost: ["Psychic"],

		name: {
			en: "Psychic",
			fr: "Psyko",
			es: "Psíquico",
			it: "Psichico",
			pt: "Psíquico",
			de: "Psychokinese"
		},

		effect: {
			en: "This attack does 50 more damage for each Energy attached to your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			es: "Este ataque hace 50 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			it: "Questo attacco infligge 50 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			pt: "Este ataque causa 50 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			de: "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 50 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		normal: false
	},

	evolveFrom: {
		en: "Kadabra",
	}
}

export default card
