import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Pelipper",
		fr: "Bekipan",
		es: "Pelipper",
		it: "Pelipper",
		pt: "Pelipper",
		de: "Pelipper"
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		279,
	],
	hp: 100,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Wingull",
		fr: "Goélise",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Courier",
				fr: "Coursier",
				es: "Mensajería",
				it: "Corriere",
				pt: "Correio",
				de: "Kurier"
			},
			effect: {
				en: "Put 1 of your Benched Pokémon and all cards attached to it into your hand.",
				fr: "Placez l’un de vos Pokémon de Banc et toutes les cartes qui lui sont attachées dans votre main.",
				es: "Pon 1 de tus Pokémon en Banca y todas las cartas unidas a él en tu mano.",
				it: "Riprendi in mano uno dei tuoi Pokémon in panchina e tutte le carte a esso assegnate.",
				pt: "Coloque 1 dos seus Pokémon no Banco e todas as cartas ligadas a ele na sua mão.",
				de: "Nimm 1 deiner Pokémon auf deiner Bank und alle an es angelegten Karten auf deine Hand."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fly",
				fr: "Vol",
				es: "Vuelo",
				it: "Volo",
				pt: "Voar",
				de: "Fliegen"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent’s next turn.",
				fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien. Si c’est face, évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
				es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada. Si sale cara, evita todos los efectos de los ataques, incluido el daño, infligidos a este Pokémon durante el próximo turno de tu rival.",
				it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto. Se esce testa, previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti a questo Pokémon durante il prossimo turno del tuo avversario.",
				pt: "Jogue 1 moeda. Se sair coroa, este ataque não fará nada. Se sair cara, prevenirá todos os efeitos de ataques, incluindo dano, causados a este Pokémon durante a próxima vez de jogar do seu oponente.",
				de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen. Verhindere bei Kopf während des nächsten Zuges deines Gegners alle Effekte von Attacken, einschließlich Schaden, die diesem Pokémon zugefügt werden."
			},
			damage: 60,

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



}

export default card
