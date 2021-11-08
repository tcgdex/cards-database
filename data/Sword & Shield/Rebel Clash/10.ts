import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Surskit",
		fr: "Arakdo",
		es: "Surskit",
		it: "Surskit",
		pt: "Surskit",
		de: "Gehweiher"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

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
				en: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to this Pokémon.",
				fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les effets d'attaques, y compris les dégâts, infligés à ce Pokémon.",
				es: "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, evita todos los efectos de ataques, incluido el daño, infligidos a este Pokémon.",
				it: "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti a questo Pokémon.",
				pt: "Jogue 1 moeda. Se sair cara, durante o próximo turno do seu oponente, previna todos os efeitos de ataques, incluindo dano, causados a este Pokémon.",
				de: "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners alle Effekte von Attacken, einschließlich Schaden, die diesem Pokémon zugefügt werden."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 50,
	types: ["Grass"],
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "It lives in ponds and marshes that feature lots of plant life. It often fights with Dewpider, whose habitat and diet are similar."
	}
}

export default card
