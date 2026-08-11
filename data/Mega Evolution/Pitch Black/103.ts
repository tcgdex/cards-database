import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Excadrill ex",
		fr: "Méga-Minotaupe-ex",
		es: "Mega-Excadrill ex",
		'es-mx': "Mega-Excadrill ex",
		de: "Mega-Stalobor-ex",
		it: "Mega Excadrill-ex",
		pt: "Mega Excadrill ex"
	},

	illustrator: "Keisuke Azuma",
	rarity: "Ultra Rare",
	category: "Pokemon",
	dexId: [530],
	hp: 340,
	types: ["Metal"],

	evolveFrom: {
		en: "Drilbur"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Undermine",
			fr: "Sape Souterraine",
			es: "Horadar",
			'es-mx': "Minería",
			de: "Untergraben",
			it: "Dissestare",
			pt: "Minar"
		},

		cost: ["Metal", "Metal"],

		damage: 90,

		effect: {
			en: "Discard the top 2 cards of your opponent's deck.",
			fr: "Défaussez les 2 cartes du dessus du deck de votre adversaire.",
			es: "Descarta las 2 primeras cartas de la baraja de tu rival.",
			'es-mx': "Descarta las primeras 2 cartas del mazo de tu rival.",
			de: "Lege die obersten 2 Karten des Decks deines Gegners auf seinen Ablagestapel.",
			it: "Scarta le prime due carte del mazzo del tuo avversario.",
			pt: "Descarte as 2 cartas de cima do baralho do seu oponente."
		}
	}, {
		name: {
			en: "Maximum Drilling",
			fr: "Perçage Maximum",
			es: "Perforación Total",
			'es-mx': "Taladrado Total",
			de: "Maximalbohrer",
			it: "Maxitrivellazione",
			pt: "Perfuração Máxima"
		},

		cost: ["Metal", "Metal", "Metal"],

		damage: "200+",

		effect: {
			en: "If this Pokémon has at least 2 extra Energy attached (in addition to this attack's cost), this attack does 130 more damage.",
			fr: "Si au moins 2 Énergies supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), cette attaque inflige 130 dégâts supplémentaires.",
			es: "Si este Pokémon tiene por lo menos 2 Energías adicionales unidas (además de las del coste de este ataque), este ataque hace 130 puntos de daño más.",
			'es-mx': "Si este Pokémon tiene al menos 2 Energías adicionales unidas (además de las del costo de este ataque), este ataque hace 130 puntos de daño más.",
			de: "Wenn an dieses Pokémon mindestens 2 extra Energien angelegt sind (zusätzlich zu den Kosten dieser Attacke), fügt diese Attacke 130 Schadenspunkte mehr zu.",
			it: "Se questo Pokémon ha almeno due Energie extra assegnate, in aggiunta a quelle del costo di questo attacco, questo attacco infligge 130 danni in più.",
			pt: "Se este Pokémon tiver pelo menos 2 Energias adicionais ligadas a ele (além do custo deste ataque), este ataque causará 130 pontos de dano a mais."
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
				cardmarket: 895888,
				tcgplayer: 704860
			}
		},
	],
}

export default card
