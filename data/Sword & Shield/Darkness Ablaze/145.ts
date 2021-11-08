import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Starly",
		fr: "Étourmi",
		es: "Starly",
		it: "Starly",
		pt: "Starly",
		de: "Staralili"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 50,

	types: [
		"Colorless",
	],

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Sky Circus",
				fr: "Cirque Céleste",
				es: "Circo Aéreo",
				it: "Circo Aereo",
				pt: "Circo Aéreo",
				de: "Himmelszirkus"
			},
			effect: {
				en: "If you played Bird Keeper from your hand during this turn, ignore all Energy in this Pokémon's attack costs.",
				fr: "Si vous avez joué Ornithologue de votre main pendant ce tour, ignorez toutes les Énergies dans les coûts d'attaques de ce Pokémon.",
				es: "Si has jugado 1 carta de Ornitólogo de tu mano durante este turno, ignora todas las Energías en el coste de los ataques de este Pokémon.",
				it: "Se hai giocato Avicoltore dalla tua mano durante questo turno, ignora tutte le Energie necessarie per usare gli attacchi di questo Pokémon.",
				pt: "Se você jogou Ornitólogo da sua mão durante este turno, ignore todas as Energias nos custos dos ataques deste Pokémon.",
				de: "Wenn du Vogel-Profi während dieses Zuges aus deiner Hand gespielt hast, ignoriere alle Energien in den Attackenkosten dieses Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Keen Eye",
				fr: "Regard Vif",
				es: "Vista Lince",
				it: "Sguardofermo",
				pt: "Olhar Aguçado",
				de: "Adlerauge"
			},
			effect: {
				en: "Search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck.",
				fr: "Cherchez dans votre deck jusqu'à 2 cartes, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja hasta 2 cartas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo fino a due carte e aggiungile a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por até 2 cartas no seu baralho e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach bis zu 2 Karten und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

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
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "They flock around mountains and fields, chasing after bug Pokémon. Their singing is noisy and annoying."
	}
}

export default card
