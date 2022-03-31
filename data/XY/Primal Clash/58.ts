import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Lanturn",
		fr: "Lanturn",
		es: "Lanturn",
		it: "Lanturn",
		pt: "Lanturn",
		de: "Lanturn"
	},
	illustrator: "MAHOU",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		171,
	],
	hp: 100,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Chinchou",
		fr: "Loupio",
		es: "Chinchou",
		it: "Chinchou",
		pt: "Chinchou",
		de: "Lampi"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Dive",
				fr: "Plongée",
				es: "Buceo",
				it: "Sub",
				pt: "Mergulho",
				de: "Taucher"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, évitez tous les effets d'attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
				es: "Lanza 1 moneda. Si sale cara, evita todos los efectos de los ataques, incluido el daño, infligidos a este Pokémon durante el próximo turno de tu rival.",
				it: "Lancia una moneta. Se esce testa, previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti a questo Pokémon durante il prossimo turno del tuo avversario.",
				pt: "Jogue uma moeda. Se sair cara, impedirá todos os efeitos dos ataques a este Pokémon, inclusive danos, durante a próxima vez de jogar do seu oponente.",
				de: "Wirf 1 Münze. Verhindere bei \"Kopf\" während des nächsten Zuges deines Gegners alle Effekte von Angriffen, einschließlich Schaden, die diesem Pokémon zugefügt werden."
			},
			damage: 40,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Take Down",
				fr: "Bélier",
				es: "Derribo",
				it: "Riduttore",
				pt: "Desmantelar",
				de: "Bodycheck"
			},
			effect: {
				en: "This Pokémon does 20 damage to itself.",
				fr: "Ce Pokémon s'inflige 20 dégâts.",
				es: "Este Pokémon se hace 20 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge 20 danni a se stesso.",
				pt: "Esse Pokémon causa 20 de danos a ele mesmo.",
				de: "Dieses Pokémon fügt sich selbst 20 Schadenspunkte zu."
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
