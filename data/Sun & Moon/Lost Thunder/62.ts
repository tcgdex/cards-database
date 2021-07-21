import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Beartic",
		fr: "Polagriffe",
		es: "Beartic",
		it: "Beartic",
		pt: "Beartic",
		de: "Siberio"
	},
	illustrator: "Mina Nakai",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		614,
	],
	hp: 140,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Cubchoo",
		fr: "Polarhume",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Resolute Claws",
				fr: "Griffes Résolues",
				es: "Garras Resueltas",
				it: "Artigli Saldi",
				pt: "Garras Resolutas",
				de: "Resolute Klauen"
			},
			effect: {
				en: "If your opponent’s Active Pokémon is a Pokémon-GX or a Pokémon-EX, this attack does 60 more damage (before applying Weakness and Resistance).",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-GX ou un Pokémon-EX, cette attaque inflige 60 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				es: "Si el Pokémon Activo de tu rival es un Pokémon-GX o un Pokémon-EX, este ataque hace 60 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
				it: "Se il Pokémon attivo del tuo avversario è un Pokémon-GX o un Pokémon-EX, questo attacco infligge 60 danni in più, prima di aver applicato debolezza e resistenza.",
				pt: "Se o Pokémon Ativo do seu oponente for um Pokémon-GX ou um Pokémon-EX, este ataque causará 60 pontos de dano a mais (antes de aplicar Fraqueza e Resistência).",
				de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-GX oder ein Pokémon-EX ist, fügt diese Attacke 60 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: "60+",

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Blizzard Burn",
				fr: "Blizzard Étourdissant",
				es: "Quemadura de Hielo",
				it: "Pirobora",
				pt: "Queimadura de Neve",
				de: "Blizzardbrand"
			},
			effect: {
				en: "This Pokémon can’t attack during your next turn.",
				fr: "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
				es: "Este Pokémon no puede atacar durante tu próximo turno.",
				it: "Questo Pokémon non può attaccare durante il tuo prossimo turno.",
				pt: "Este Pokémon não poderá atacar durante a sua próxima vez de jogar.",
				de: "Dieses Pokémon kann während deines nächsten Zuges nicht angreifen."
			},
			damage: 150,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
