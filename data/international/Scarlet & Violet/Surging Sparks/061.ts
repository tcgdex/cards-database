import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [479],
	set: Set,

	name: {
		'en-us': "Rotom",
		'fr-fr': "Motisma",
		'es-es': "Rotom",
		'it-it': "Rotom",
		'pt-br': "Rotom",
		'de-de': "Rotom"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Crushing Pulse",
			'fr-fr': "Pulsation Écrasante",
			'es-es': "Pulso Demoledor",
			'it-it': "Impulso Dirompente",
			'pt-br': "Pulso Esmagador",
			'de-de': "Zerschmetternder Puls"
		},

		effect: {
			'en-us': "Your opponent reveals their hand. Discard all Item cards and Pokémon Tool cards you find there.",
			'fr-fr': "Votre adversaire montre sa main. Défaussez toutes les cartes Objet et cartes Outil Pokémon que vous y trouvez.",
			'es-es': "Tu rival enseña las cartas de su mano. Descarta todas las cartas de Objeto y de Herramienta Pokémon que encuentres entre ellas.",
			'it-it': "Il tuo avversario mostra le carte che ha in mano. Scarta tutte le carte Strumento e le carte Oggetto Pokémon presenti tra esse.",
			'pt-br': "Seu oponente revela a mão dele. Descarte todas as cartas de Item e cartas de Ferramenta Pokémon que encontrar lá.",
			'de-de': "Dein Gegner zeigt dir seine Handkarten. Lege alle Itemkarten und Pokémon-Ausrüstungen, die du dort findest, auf seinen Ablagestapel."
		}
	}, {
		cost: ["Lightning"],

		name: {
			'en-us': "Energy Short",
			'fr-fr': "Énergie Dérivée",
			'es-es': "Cortocircuito de Energía",
			'it-it': "Crisi Energetica",
			'pt-br': "Colapso de Energia",
			'de-de': "Umkehrenergie"
		},

		effect: {
			'en-us': "This attack does 20 damage for each Energy attached to your opponent's Active Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			'es-es': "Este ataque hace 20 puntos de daño por cada Energía unida al Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 20 danni per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 20 pontos de dano para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			'de-de': "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 20 Schadenspunkte zu."
		},

		damage: "20×"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794339,
				tcgplayer: 590036
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794339,
				tcgplayer: 590036
			}
		},
	],

	illustrator: "Shinya Mizuno",
	
}

export default card
