import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Clefable",
		fr: "Mélodelfe",
		es: "Clefable",
		it: "Clefable",
		pt: "Clefable",
		de: "Pixi"
	},
	illustrator: "Sanosuke Sakuma",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		36,
	],
	hp: 100,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Clefairy",
		fr: "Mélofée",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Moon Barrier",
				fr: "Barrière Lunaire",
				es: "Barrera Lunar",
				it: "Barriera Lunare",
				pt: "Barreira de Lua",
				de: "Mondbarriere"
			},
			effect: {
				en: "During your opponent's next turn, prevent all effects of attacks, including damage, done to this Pokémon by Dragon Pokémon.",
				fr: "Pendant le prochain tour de votre adversaire, évitez tous les effets d'attaques, y compris les dégâts, infligés à ce Pokémon par des Pokémon Dragon.",
				es: "Durante el próximo turno de tu rival, evita todos los efectos de los ataques, incluido el daño, infligidos a este Pokémon por Pokémon Dragon.",
				it: "Durante il prossimo turno del tuo avversario, previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti a questo Pokémon da Pokémon Dragon.",
				pt: "Durante a próxima vez de jogar do seu oponente, previna todos os efeitos dos ataques a este Pokémon, inclusive danos, causados por Pokémon Dragon.",
				de: "Verhindere alle Effekte von Angriffen, einschließlich Schaden, die diesem Pokémon durch Dragon-Pokémon während des nächsten Zuges deines Gegners zugefügt werden."
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
				en: "Tumbling Attack",
				fr: "Attaque Trébuchante",
				es: "Ataque Tambaleante",
				it: "Attacco Capriola",
				pt: "Ataque Cambalhota",
				de: "Taumler"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
				pt: "Jogue uma moeda. Se sair cara, este ataque causará 30 de danos adicionais.",
				de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: "50+",

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
	retreat: 1,



}

export default card
