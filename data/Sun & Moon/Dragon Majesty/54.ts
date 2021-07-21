import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Kommo-o",
		fr: "Ékaïser",
		es: "Kommo-o",
		it: "Kommo-o",
		pt: "Kommo-o",
		de: "Grandiras"
	},
	illustrator: "so-taro",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		784,
	],
	hp: 160,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Hakamo-o",
		fr: "Écaïd",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Guard Press",
				fr: "Pression de Garde",
				es: "Presión de Guardia",
				it: "Pressadifesa",
				pt: "Aperto Protetor",
				de: "Schutzdruck"
			},
			effect: {
				en: "During your opponent’s next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				es: "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				pt: "Durante a próxima vez de jogar do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (após a aplicação de Fraqueza e Resistência).",
				de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 60,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Raging Uppercut",
				fr: "Uppercut Enragé",
				es: "Gancho Furioso",
				it: "Montante Furioso",
				pt: "Gancho Devastador",
				de: "Wuthieb"
			},
			effect: {
				en: "If this Pokémon has 8 or more damage counters on it, this attack does 120 more damage.",
				fr: "Si ce Pokémon a 8 marqueurs de dégâts ou plus, cette attaque inflige 120 dégâts supplémentaires.",
				es: "Si este Pokémon tiene 8 o más contadores de daño sobre él, este ataque hace 120 puntos de daño más.",
				it: "Se questo Pokémon ha otto o più segnalini danno, questo attacco infligge 120 danni in più.",
				pt: "Se este Pokémon tiver 8 ou mais contadores de dano nele, este ataque causará 120 pontos de dano a mais.",
				de: "Wenn auf diesem Pokémon mindestens 8 Schadensmarken liegen, fügt diese Attacke 120 Schadenspunkte mehr zu."
			},
			damage: "90+",

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
