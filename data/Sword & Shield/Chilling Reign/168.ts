import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [78],
	set: Set,

	name: {
		fr: "Galopa de Galar V",
		en: "Galarian Rapidash V",
		es: "Rapidash de Galar V",
		it: "Rapidash di Galar V",
		pt: "Rapidash de Galar V",
		de: "Galar-Gallopa V"
	},

	illustrator: "sui",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Psychic"],

	attacks: [{
		name: {
			fr: "Corne Balance",
			en: "Libra Horn",
			es: "Cuerno Libra",
			it: "Bilanciacorno",
			pt: "Chifre de Libra",
			de: "Waagehorn"
		},

		effect: {
			fr: "Placez des marqueurs de dégâts sur l'un des Pokémon de votre adversaire jusqu'à ce qu'il ne lui reste que 100 PV.",
			en: "Put damage counters on 1 of your opponent's Pokémon until its remaining HP is 100.",
			es: "Pon contadores de daño en 1 de los Pokémon de tu rival hasta que le queden 100 PS.",
			it: "Metti dei segnalini danno su uno dei Pokémon del tuo avversario finché i suoi PS rimanenti diventano 100.",
			pt: "Coloque contadores de dano em 1 dos Pokémon do seu oponente até o PS restante dele ser 100.",
			de: "Lege so lange Schadensmarken auf 1 Pokémon deines Gegners, bis seine verbleibenden KP gleich 100 sind."
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			fr: "Psyko",
			en: "Psychic",
			es: "Psíquico",
			it: "Psichico",
			pt: "Psíquico",
			de: "Psychokinese"
		},

		effect: {
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			en: "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon.",
			es: "Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			it: "Questo attacco infligge 30 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			de: "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 30 Schadenspunkte mehr zu."
		},

		damage: "60+",
		cost: ["Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V"
}

export default card
