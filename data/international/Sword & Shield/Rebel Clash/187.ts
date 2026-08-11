import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [879],

	name: {
		'en-us': "Copperajah V",
		'fr-fr': "Pachyradjah V",
		'es-es': "Copperajah V",
		'it-it': "Copperajah V",
		'pt-br': "Copperajah V",
		'de-de': "Patinaraja V"
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
				'en-us': "Adamantine Press",
				'fr-fr': "Charge Adamantine",
				'es-es': "Presión Adamantina",
				'it-it': "Pressa Adamantina",
				'pt-br': "Pressão de Adamantina",
				'de-de': "Steinharter Druck"
			},
			effect: {
				'en-us': "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				'es-es': "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
				'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
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
				'en-us': "Wrack Down",
				'fr-fr': "Réduire en Poussière",
				'es-es': "Desmoronar",
				'it-it': "Abbattere",
				'pt-br': "Desmoronar",
				'de-de': "Niederschleudern"
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


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 458308,
				tcgplayer: 213233
			}
		},
	],
}

export default card
