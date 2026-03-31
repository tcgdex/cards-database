import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Serperior",
		fr: "Majaspic",
		es: "Serperior",
		de: "Serpiroyal",
		it: "Serperior",
		pt: "Serperior"
	},
	set: Set,
	rarity: "Rare",
	category: "Pokemon",
	dexId: [
		497
	],
	hp: 160,
	types: [
		"Grass"
	],
	stage: "Stage2",
	evolveFrom: {
		en: "Servine",
		fr: "Lianaja",
		es: "Servine",
		"es-mx": "Servine",
		de: "Efoserp",
		it: "Servine",
		pt: "Servine"
	},
	attacks: [
		{
			cost: [
				"Grass"
			],
			name: {
				en: "Regal Command",
				fr: "Ordre Majestueux",
				es: "Mandato Realeza",
				de: "Hoheitlicher Befehl",
				it: "Comando Regale",
				pt: "Comando Real"
			},
			damage: "20×",
			effect: {
				en: "This attack does 20 damage for each of your Pokémon in play.",
				fr: "Cette attaque inflige 20 dégâts pour chacun de vos Pokémon en jeu.",
				es: "Este ataque hace 20 puntos de daño por cada uno de tus Pokémon en juego.",
				de: "Diese Attacke fügt für jedes deiner Pokémon im Spiel 20 Schadenspunkte zu.",
				it: "Questo attacco infligge 20 danni per ciascuno dei tuoi Pokémon in gioco.",
				pt: "Este ataque causa 20 pontos de dano para cada um dos seus Pokémon em jogo."
			}
		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass"
			],
			name: {
				en: "Solar Coiling",
				fr: "Enroulement Solaire",
				es: "Enrosque Solar",
				de: "Solarschlinge",
				it: "Avvolgimento Solare",
				pt: "Enrolada Solar"
			},
			damage: "100+",
			effect: {
				en: "If Rosa's Encouragement is in your discard pile, this attack does 150 more damage.",
				fr: "Si Encouragement d'Écho est dans votre pile de défausse, cette attaque inflige 150 dégâts supplémentaires.",
				es: "Si Apoyo de Nanci está en tu pila de descartes, este ataque hace 150 puntos de daño más.",
				de: "Wenn Rosys Ermutigung in deinem Ablagestapel ist, fügt diese Attacke 150 Schadenspunkte mehr zu.",
				it: "Se Incoraggiamento di Rina è nella tua pila degli scarti, questo attacco infligge 150 danni in più.",
				pt: "Se Encorajamento da Rose estiver na sua pilha de descarte, este ataque causará 150 pontos de dano a mais."
			}
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	retreat: 2,
	regulationMark: "J",
	illustrator: "kodama",
	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	],
	thirdParty: {
		tcgplayer: 684402,
		cardmarket: 877418
	}
}

export default card
