import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Scizor",
		fr: "Cizayox",
		es: "Scizor",
		it: "Scizor",
		pt: "Scizor",
		de: "Scherox"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Scyther",
		fr: "Insécateur",
		es: "Scyther",
		it: "Scyther",
		pt: "Scyther",
		de: "Sichlor"
	},

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Raid",
				fr: "Razzia Obscure",
				es: "Raid Oscuro",
				it: "Raid",
				pt: "Reide",
				de: "Überfall"
			},
			effect: {
				en: "If this Pokémon evolved from Scyther during this turn, this attack does 90 more damage.",
				fr: "Si ce Pokémon a évolué d'Insécateur pendant ce tour, cette attaque inflige 90 dégâts supplémentaires.",
				es: "Si este Pokémon ha evolucionado de Scyther durante este turno, este ataque hace 90 puntos de daño más.",
				it: "Se questo Pokémon si è evoluto da Scyther durante questo turno, questo attacco infligge 90 danni in più.",
				pt: "Se este Pokémon evoluiu de Scyther durante este turno, este ataque causará 90 pontos de dano a mais.",
				de: "Wenn sich dieses Pokémon während dieses Zuges aus Sichlor entwickelt hat, fügt diese Attacke 90 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Guard Claw",
				fr: "Griffe de Garde",
				es: "Garra Guardia",
				it: "Difesartiglio",
				pt: "Garra Protetora",
				de: "Abwehrklaue"
			},
			effect: {
				en: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				es: "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				pt: "Durante o próximo turno do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
				de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 1,
	hp: 130,
	types: ["Metal"],
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "Once it has identified something as an enemy, it will continue beating them with its steel-hard pincers until there's nothing left but scraps."
	}
}

export default card
