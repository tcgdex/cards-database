import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Wigglytuff",
		fr: "Grodoudou",
		es: "Wigglytuff",
		it: "Wigglytuff",
		pt: "Wigglytuff",
		de: "Knuddeluff"
	},
	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		40,
	],
	hp: 120,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Jigglypuff",
		fr: "Rondoudou",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Expand",
				fr: "Expansion",
				es: "Expandir",
				it: "Potenzia",
				pt: "Expandir",
				de: "Ausdehnen"
			},
			effect: {
				en: "During your opponent’s next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				es: "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				pt: "Durante a próxima vez de jogar do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (após a aplicação de Fraqueza e Resistência).",
				de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 30,

		},
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Charmed Slap",
				fr: "Gifle Décorée",
				es: "Bofetada Encantada",
				it: "Sberla Incantata",
				pt: "Tapa Pingente",
				de: "Schmuckschlag"
			},
			effect: {
				en: "If this Pokémon has a Pokémon Tool card that has \"Fairy Charm\" in its name attached to it, this attack does 70 more damage.",
				fr: "Si une carte Outil Pokémon avec « Amulette Féerique » dans son nom est attachée à ce Pokémon, cette attaque inflige 70 dégâts supplémentaires.",
				es: "Si este Pokémon tiene 1 carta de Herramienta Pokémon que tenga \"Amuleto Hada\" en su nombre unida a él, este ataque hace 70 puntos de daño más.",
				it: "Se questo Pokémon ha una carta Oggetto Pokémon assegnata con “Amuleto Folletto” nel nome, questo attacco infligge 70 danni in più.",
				pt: "Se este Pokémon tiver uma carta de Ferramenta Pokémon que tenha “Pingente de Fada” em seu nome ligada a ele, este ataque causará 70 pontos de dano a mais.",
				de: "Wenn an dieses Pokémon eine Pokémon-Ausrüstung angelegt ist, bei der Feenschmuck zum Namen gehört, fügt diese Attacke 70 Schadenspunkte mehr zu."
			},
			damage: "70+",

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
