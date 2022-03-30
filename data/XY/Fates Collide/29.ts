import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Mew",
		fr: "Mew",
		es: "Mew",
		it: "Mew",
		pt: "Mew",
		de: "Mew"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		151,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Memories of Dawn",
				fr: "Souvenirs Originels",
				es: "Recuerdos de los Albores",
				it: "Albe Mnemoniche",
				pt: "Memórias do Começo",
				de: "Anfangserinnerungen"
			},
			effect: {
				en: "This Pokémon can use the attacks of any of your Basic Pokémon in play. (You still need the necessary Energy to use each attack.)",
				fr: "Ce Pokémon peut utiliser les attaques de n'importe lequel de vos Pokémon de base en jeu. (Vous avez toujours besoin de l'Énergie nécessaire pour utiliser chaque attaque.)",
				es: "Este Pokémon puede usar los ataques de cualquiera de tus Pokémon Básicos en juego. (Sigues necesitando la Energía necesaria para usar cada ataque).",
				it: "Questo Pokémon può usare gli attacchi di tutti i tuoi Pokémon Base in gioco. Devi comunque avere l'Energia necessaria per usare quegli attacchi.",
				pt: "Este Pokémon pode usar os ataques de qualquer um dos seus Pokémon Básicos em jogo. (Você ainda precisa da Energia necessária para usar cada ataque.)",
				de: "Dieses Pokémon kann die Angriffe von beliebigen deiner Basis-Pokémon im Spiel einsetzen. (Du benötigst jedoch die jeweils für den Angriff notwendige Energie.)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Encounter",
				fr: "Rencontre",
				es: "Encuentro",
				it: "Incontro",
				pt: "Encontro",
				de: "Begegnung"
			},
			effect: {
				en: "Search your deck for a Pokémon, reveal it, and put it into your hand. Shuffle your deck afterward.",
				fr: "Cherchez un Pokémon dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja 1 Pokémon, enséñalo y ponlo en tu mano. Baraja las cartas de tu baraja después.",
				it: "Cerca nel tuo mazzo un Pokémon, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure em seu baralho um Pokémon, revele-o e coloque-o em sua mão. Em seguida, embaralhe seus cards.",
				de: "Durchsuche dein Deck nach 1 Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 0
}

export default card
