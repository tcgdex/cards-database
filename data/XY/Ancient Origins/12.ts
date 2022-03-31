import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Virizion",
		fr: "Viridium",
		es: "Virizion",
		it: "Virizion",
		pt: "Virizion",
		de: "Viridium"
	},
	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		640,
	],
	hp: 110,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Bail Out",
				fr: "Renflouage",
				es: "Sacar de Apuros",
				it: "Soccorso",
				pt: "Resgate",
				de: "Freilassen"
			},
			effect: {
				en: "Put 2 Pokémon from your discard pile into your hand.",
				fr: "Ajoutez 2 Pokémon de votre pile de défausse à votre main.",
				es: "Pon 2 Pokémon de tu pila de descartes en tu mano.",
				it: "Prendi due Pokémon dalla tua pila degli scarti e aggiungili alle carte che hai in mano.",
				pt: "Coloque 2 Pokémon da sua pilha de descarte em sua mão.",
				de: "Nimm 2 Pokémon von deinem Ablagestapel auf deine Hand."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Prize Count",
				fr: "Compteur de Récompense",
				es: "Cuenta de Premios",
				it: "Contapremi",
				pt: "Contagem de Prêmios",
				de: "Preiszähler"
			},
			effect: {
				en: "If you have more Prize cards left than your opponent, this attack does 80 more damage.",
				fr: "S'il vous reste plus de cartes Récompense que votre adversaire, cette attaque inflige 80 dégâts supplémentaires.",
				es: "Si te quedan más cartas de Premio que a tu rival, este ataque hace 80 puntos de daño más.",
				it: "Se il numero di carte Premio che ti restano è superiore a quello del tuo avversario, questo attacco infligge 80 danni in più.",
				pt: "Se sobrarem a você mais cards de Prêmios do que ao seu oponente, este ataque causará 80 de danos adicionais.",
				de: "Wenn du mehr Preiskarten übrig hast als dein Gegner, fügt dieser Angriff 80 weitere Schadenspunkte zu."
			},
			damage: "40+",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
