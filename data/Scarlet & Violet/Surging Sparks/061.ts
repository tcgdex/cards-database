import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [479],
	set: Set,

	name: {
		en: "Rotom",
		fr: "Motisma",
		es: "Rotom",
		it: "Rotom",
		pt: "Rotom",
		de: "Rotom"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Crushing Pulse",
			fr: "Pulsation Écrasante",
			es: "Pulso Demoledor",
			it: "Impulso Dirompente",
			pt: "Pulso Esmagador",
			de: "Zerschmetternder Puls"
		},

		effect: {
			en: "Your opponent reveals their hand. Discard all Item cards and Pokémon Tool cards you find there.",
			fr: "Votre adversaire montre sa main. Défaussez toutes les cartes Objet et cartes Outil Pokémon que vous y trouvez.",
			es: "Tu rival enseña las cartas de su mano. Descarta todas las cartas de Objeto y de Herramienta Pokémon que encuentres entre ellas.",
			it: "Il tuo avversario mostra le carte che ha in mano. Scarta tutte le carte Strumento e le carte Oggetto Pokémon presenti tra esse.",
			pt: "Seu oponente revela a mão dele. Descarte todas as cartas de Item e cartas de Ferramenta Pokémon que encontrar lá.",
			de: "Dein Gegner zeigt dir seine Handkarten. Lege alle Itemkarten und Pokémon-Ausrüstungen, die du dort findest, auf seinen Ablagestapel."
		}
	}, {
		cost: ["Lightning"],

		name: {
			en: "Energy Short",
			fr: "Énergie Dérivée",
			es: "Cortocircuito de Energía",
			it: "Crisi Energetica",
			pt: "Colapso de Energia",
			de: "Umkehrenergie"
		},

		effect: {
			en: "This attack does 20 damage for each Energy attached to your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 20 dégâts pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			es: "Este ataque hace 20 puntos de daño por cada Energía unida al Pokémon Activo de tu rival.",
			it: "Questo attacco infligge 20 danni per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			pt: "Este ataque causa 20 pontos de dano para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			de: "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 20 Schadenspunkte zu."
		},

		damage: "20×"
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Shinya Mizuno",

	thirdParty: {
		cardmarket: 794339
	}
}

export default card
