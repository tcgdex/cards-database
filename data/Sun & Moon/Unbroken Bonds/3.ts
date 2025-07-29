import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Metapod",
		fr: "Chrysacier",
		es: "Metapod",
		it: "Metapod",
		pt: "Metapod",
		de: "Safcon"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		11,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Caterpie",
		fr: "Chenipan",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Emerge",
				fr: "Émerge",
				es: "Emerger",
				it: "Emergere",
				pt: "Emergir",
				de: "Erscheinen"
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, search your deck for a card that evolves from this Pokémon and put it onto this Pokémon to evolve it. Then, shuffle your deck.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c’est face, cherchez dans votre deck une carte qui évolue de ce Pokémon, puis placez-la sur ce Pokémon pour le faire évoluer. Mélangez ensuite votre deck.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes lanzar 1 moneda. Si sale cara, busca en tu baraja 1 carta que evolucione de este Pokémon y ponla sobre este Pokémon para hacerlo evolucionar. Después, baraja las cartas de tu baraja.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi lanciare una moneta. Se esce testa, cerca nel tuo mazzo una carta che si evolve da questo Pokémon e metticela sopra per farlo evolvere. Poi rimischia le carte del tuo mazzo.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode jogar 1 moeda. Se sair cara, procure por 1 carta no seu baralho que evolua deste Pokémon e coloque-a sobre este Pokémon para evoluí-lo. Em seguida, embaralhe o seu baralho.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Münze werfen. Durchsuche bei Kopf dein Deck nach 1 Karte, die sich aus diesem Pokémon entwickelt, und lege sie auf dieses Pokémon, um es zu entwickeln. Mische anschließend dein Deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bug Bite",
				fr: "Piqûre",
				es: "Picadura",
				it: "Coleomorso",
				pt: "Picada",
				de: "Käferbiss"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 372296
	}
}

export default card
