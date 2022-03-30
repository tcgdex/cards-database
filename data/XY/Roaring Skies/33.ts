import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Deoxys",
		fr: "Deoxys",
		es: "Deoxys",
		it: "Deoxys",
		pt: "Deoxys",
		de: "Deoxys"
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		386,
	],
	hp: 110,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Close Encounter",
				fr: "Rencontre de l'Au-delà",
				es: "Encuentro Cercano",
				it: "Incontro Ravvicinato",
				pt: "Encontro Próximo",
				de: "Erste Begegnung"
			},
			effect: {
				en: "If you go first, you can use this attack on your first turn. Draw 2 cards.",
				fr: "Si vous jouez en premier, vous pouvez utiliser cette attaque lors de votre premier tour. Piochez 2 cartes.",
				es: "Si sales primero, puedes usar este ataque durante tu primer turno. Roba 2 cartas.",
				it: "Se inizi per primo, puoi usare questo attacco durante il tuo primo turno. Pesca due carte.",
				pt: "Se você for o primeiro, poderá usar este ataque na sua primeira vez de jogar. Compre 2 cards.",
				de: "Wenn du als Erster am Zug bist, kannst du diesen Angriff während deines ersten Zuges einsetzen. Ziehe 2 Karten."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Overdrive Smash",
				fr: "Boost Atomisant",
				es: "Sacudida",
				it: "Devastacolpo",
				pt: "Golpe Exaustivo",
				de: "Turbosmash"
			},
			effect: {
				en: "During your next turn, this Pokémon's Overdrive Smash attack does 60 more damage (before applying Weakness and Resistance).",
				fr: "Pendant votre prochain tour, l'attaque Boost Atomisant de ce Pokémon inflige 60 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				es: "Durante tu próximo turno, el ataque Sacudida de este Pokémon hace 60 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
				it: "Durante il tuo prossimo turno, l'attacco Devastacolpo di questo Pokémon infligge 60 danni in più, prima di aver applicato debolezza e resistenza.",
				pt: "Durante sua próxima vez de jogar, o ataque Golpe Exaustivo deste Pokémon causará 60 de danos adicionais (antes da aplicação de Fraqueza e Resistência).",
				de: "Während deines nächsten Zuges fügt die Attacke Turbosmash dieses Pokémon 60 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
