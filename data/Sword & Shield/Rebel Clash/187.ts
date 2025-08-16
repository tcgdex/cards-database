import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [879],

	name: {
		en: "Copperajah V",
		fr: "Pachyradjah V",
		es: "Copperajah V",
		it: "Copperajah V",
		pt: "Copperajah V",
		de: "Patinaraja V"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Adamantine Press",
				fr: "Charge Adamantine",
				es: "Presión Adamantina",
				it: "Pressa Adamantina",
				pt: "Pressão de Adamantina",
				de: "Steinharter Druck"
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
		{
			cost: [
				"Metal",
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Wrack Down",
				fr: "Réduire en Poussière",
				es: "Desmoronar",
				it: "Abbattere",
				pt: "Desmoronar",
				de: "Niederschleudern"
			},

			damage: 180,

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

	retreat: 4,
	hp: 220,
	types: ["Metal"],
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V",

	thirdParty: {
		cardmarket: 456523,
		tcgplayer: 213233
	}
}

export default card
