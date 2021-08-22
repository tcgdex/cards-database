import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Cramorant",
		fr: "Nigosier",
		es: "Cramorant",
		it: "Cramorant",
		pt: "Cramorant",
		de: "Urgl"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Water",
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
				en: "Flip a coin. If heads, during your opponent’s next turn, prevent all effects of attacks, including damage, done to this Pokémon.",
				fr: "Lancez une pièce. Si c’est face, pendant le prochain tour de votre adversaire, évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon.",
				es: "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, evita todos los efectos de ataques, incluido el daño, infligidos a este Pokémon.",
				it: "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti a questo Pokémon.",
				pt: "Jogue 1 moeda. Se sair cara, durante o próximo turno do seu oponente, previna todos os efeitos de ataques, incluindo dano, causados a este Pokémon.",
				de: "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners alle Effekte von Attacken, einschließlich Schaden, die diesem Pokémon zugefügt werden."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hydro Pump",
				fr: "Hydrocanon",
				es: "Hidrobomba",
				it: "Idropompa",
				pt: "Jato d’Água",
				de: "Hydropumpe"
			},
			effect: {
				en: "This attack does 20 more damage for each Water Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon.",
				es: "Este ataque hace 20 puntos de daño más por cada Energía Water unida a este Pokémon.",
				it: "Questo attacco infligge 20 danni in più per ogni Energia Water assegnata a questo Pokémon.",
				pt: "Este ataque causa 20 pontos de dano a mais para cada Energia Water ligada a este Pokémon.",
				de: "Diese Attacke fügt für jede an dieses Pokémon angelegte Water-Energie 20 Schadenspunkte mehr zu."
			},
			damage: "50+",

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
			value: "-30"
		},
	],

	retreat: 1,
	hp: 110,
	types: ["Water"],
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "It’s so strong that it can knock out some opponents in a single hit, but it also may forget what it’s battling midfight."
	}
}

export default card
