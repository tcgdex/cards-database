import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Torgamord",
		en: "Drednaw",
		es: "Drednaw",
		it: "Drednaw",
		pt: "Drednaw",
		de: "Kamalm"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	evolveFrom: {
		fr: "Khélocrok",
		en: "Chewtle"
	},

	attacks: [{
		name: {
			fr: "Étau Mordant",
			en: "Vise Bite",
			es: "Mordisco Atornillador",
			it: "Serramorso",
			pt: "Mordida Compressora",
			de: "Klammerbiss"
		},

		effect: {
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
			en: "This attack does 30 more damage for each Colorless in your opponent’s Active Pokémon’s Retreat Cost.",
			es: "Este ataque hace 30 puntos de daño más por cada Colorless en el Coste de Retirada del Pokémon Activo de tu rival.",
			it: "Questo attacco infligge 30 danni in più per ogni Colorless nel costo di ritirata del Pokémon attivo del tuo avversario.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada Colorless no custo de Recuo do Pokémon Ativo do seu oponente.",
			de: "Diese Attacke fügt für jedes Colorless in den Rückzugskosten des Aktiven Pokémon deines Gegners 30 Schadenspunkte mehr zu."
		},

		damage: "60+",
		cost: ["Water", "Colorless", "Colorless"]
	}, {
		name: {
			fr: "Croque Fort",
			en: "Jaw Lock",
			es: "Presa Maxilar",
			it: "Morsostretto",
			pt: "Trava de Mandíbula",
			de: "Fesselbiss"
		},

		effect: {
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			en: "During your opponent’s next turn, the Defending Pokémon can’t retreat.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 130,
		cost: ["Water", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D",
	stage: "Stage1",

	description: {
		en: "This Pokémon rapidly extends its retractable neck to sink its sharp fangs into distant enemies and take them down."
	}
}

export default card