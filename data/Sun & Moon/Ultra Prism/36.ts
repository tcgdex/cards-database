import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Floatzel",
		fr: "Mustéflott",
		es: "Floatzel",
		it: "Floatzel",
		pt: "Floatzel",
		de: "Bojelin"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		419,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Buizel",
		fr: "Mustébouée",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
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
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Aqua Blast",
				fr: "Explosion Aquatique",
				es: "Explosión Acuática",
				it: "Esplosione Acquatica",
				pt: "Explosão de Água",
				de: "Wasserschuss"
			},
			effect: {
				en: "Discard a Water Energy from this Pokémon.",
				fr: "Défaussez une Énergie Water de ce Pokémon.",
				es: "Descarta 1 Energía Water de este Pokémon.",
				it: "Scarta un’Energia Water assegnata a questo Pokémon.",
				pt: "Descarte 1 Energia Water deste Pokémon.",
				de: "Lege 1 Water-Energie von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 315967
	}
}

export default card
