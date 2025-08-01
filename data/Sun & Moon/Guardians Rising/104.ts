import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Swellow",
		fr: "Hélédelle",
		es: "Swellow",
		it: "Swellow",
		pt: "Swellow",
		de: "Schwalboss"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		277,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Taillow",
		fr: "Nirondelle",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Agility",
				fr: "Hâte",
				es: "Agilidad",
				it: "Agilità",
				pt: "Agilidade",
				de: "Agilität"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent’s next turn.",
				fr: "Lancez une pièce. Si c’est face, évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
				es: "Lanza 1 moneda. Si sale cara, evita todos los efectos de los ataques, incluido el daño, infligidos a este Pokémon durante el próximo turno de tu rival.",
				it: "Lancia una moneta. Se esce testa, previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti a questo Pokémon durante il prossimo turno del tuo avversario.",
				pt: "Jogue 1 moeda. Se sair cara, prevenirá todos os efeitos de ataques, incluindo dano, causados a este Pokémon durante a próxima vez de jogar do seu oponente.",
				de: "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners alle Effekte von Attacken, einschließlich Schaden, die diesem Pokémon zugefügt werden."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Swallow Dive",
				fr: "Plongeon d’Hirondelle",
				es: "Buche en Picado",
				it: "Tuffo Pennuto",
				pt: "Mergulho de Andorinha",
				de: "Schwalbensprung"
			},
			effect: {
				en: "If this Pokémon used Agility during your last turn, this attack does 80 more damage.",
				fr: "Si ce Pokémon a utilisé Hâte pendant votre dernier tour, cette attaque inflige 80 dégâts supplémentaires.",
				es: "Si este Pokémon usó Agilidad durante tu último turno, este ataque hace 80 puntos de daño más.",
				it: "Se questo Pokémon ha usato Agilità durante il tuo ultimo turno, questo attacco infligge 80 danni in più.",
				pt: "Se este Pokémon usou Agilidade durante a sua última vez de jogar, este ataque causará 80 pontos de dano a mais.",
				de: "Wenn dieses Pokémon während deines letzten Zuges Agilität eingesetzt hat, fügt diese Attacke 80 Schadenspunkte mehr zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 297556
	}
}

export default card
