import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Diggersby",
		fr: "Excavarenne",
		es: "Diggersby",
		it: "Diggersby",
		pt: "Diggersby",
		de: "Grebbit"
	},
	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		660,
	],
	hp: 100,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Bunnelby",
		fr: "Sapereau",
		es: "Bunnelby",
		it: "Bunnelby",
		pt: "Bunnelby",
		de: "Scoppel"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pickup",
				fr: "Ramassage",
				es: "Recogida",
				it: "Raccolta",
				pt: "Pegar",
				de: "Mitnahme"
			},
			effect: {
				en: "Put 2 Item cards from your discard pile into your hand.",
				fr: "Ajoutez 2 cartes Objet de votre pile de défausse à votre main.",
				es: "Pon 2 cartas de Objeto de tu pila de descartes en tu mano.",
				it: "Prendi due carte Strumento dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
				pt: "Coloque 2 cards de Item da sua pilha de descarte em sua mão.",
				de: "Nimm 2 Itemkarten von deinem Ablagestapel auf deine Hand."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dig",
				fr: "Tunnel",
				es: "Excavar",
				it: "Fossa",
				pt: "Cavar",
				de: "Schaufler"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, évitez tous les effets d'attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
				es: "Lanza 1 moneda. Si sale cara, evita todos los efectos de los ataques, incluido el daño, infligidos a este Pokémon durante el próximo turno de tu rival.",
				it: "Lancia una moneta. Se esce testa, previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti a questo Pokémon durante il prossimo turno del tuo avversario.",
				pt: "Jogue uma moeda. Se sair cara, impedirá todos os efeitos de ataques causados a este Pokémon, inclusive danos, durante a próxima vez de jogar do seu oponente.",
				de: "Wirf 1 Münze. Verhindere bei \"Kopf\" während des nächsten Zuges deines Gegners alle Effekte von Angriffen, einschließlich Schaden, die diesem Pokémon zugefügt werden."
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
