import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mega Excadrill ex",
		'fr-fr': "Méga-Minotaupe-ex",
		'es-es': "Mega-Excadrill ex",
		'es-mx': "Mega-Excadrill ex",
		'de-de': "Mega-Stalobor-ex",
		'it-it': "Mega Excadrill-ex",
		'pt-br': "Mega Excadrill ex"
	},

	illustrator: "Keisuke Azuma",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [530],
	hp: 340,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Drilbur"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Undermine",
			'fr-fr': "Sape Souterraine",
			'es-es': "Horadar",
			'es-mx': "Minería",
			'de-de': "Untergraben",
			'it-it': "Dissestare",
			'pt-br': "Minar"
		},

		cost: ["Metal", "Metal"],

		damage: 90,

		effect: {
			'en-us': "Discard the top 2 cards of your opponent's deck.",
			'fr-fr': "Défaussez les 2 cartes du dessus du deck de votre adversaire.",
			'es-es': "Descarta las 2 primeras cartas de la baraja de tu rival.",
			'es-mx': "Descarta las primeras 2 cartas del mazo de tu rival.",
			'de-de': "Lege die obersten 2 Karten des Decks deines Gegners auf seinen Ablagestapel.",
			'it-it': "Scarta le prime due carte del mazzo del tuo avversario.",
			'pt-br': "Descarte as 2 cartas de cima do baralho do seu oponente."
		}
	}, {
		name: {
			'en-us': "Maximum Drilling",
			'fr-fr': "Perçage Maximum",
			'es-es': "Perforación Total",
			'es-mx': "Taladrado Total",
			'de-de': "Maximalbohrer",
			'it-it': "Maxitrivellazione",
			'pt-br': "Perfuração Máxima"
		},

		cost: ["Metal", "Metal", "Metal"],

		damage: "200+",

		effect: {
			'en-us': "If this Pokémon has at least 2 extra Energy attached (in addition to this attack's cost), this attack does 130 more damage.",
			'fr-fr': "Si au moins 2 Énergies supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), cette attaque inflige 130 dégâts supplémentaires.",
			'es-es': "Si este Pokémon tiene por lo menos 2 Energías adicionales unidas (además de las del coste de este ataque), este ataque hace 130 puntos de daño más.",
			'es-mx': "Si este Pokémon tiene al menos 2 Energías adicionales unidas (además de las del costo de este ataque), este ataque hace 130 puntos de daño más.",
			'de-de': "Wenn an dieses Pokémon mindestens 2 extra Energien angelegt sind (zusätzlich zu den Kosten dieser Attacke), fügt diese Attacke 130 Schadenspunkte mehr zu.",
			'it-it': "Se questo Pokémon ha almeno due Energie extra assegnate, in aggiunta a quelle del costo di questo attacco, questo attacco infligge 130 danni in più.",
			'pt-br': "Se este Pokémon tiver pelo menos 2 Energias adicionais ligadas a ele (além do custo deste ataque), este ataque causará 130 pontos de dano a mais."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],
	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 4,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895785,
				tcgplayer: 704822
			}
		},
	],
}

export default card
