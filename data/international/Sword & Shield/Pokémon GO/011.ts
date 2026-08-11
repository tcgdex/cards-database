import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [6],
	set: Set,

	name: {
		'en-us': "Radiant Charizard",
		'fr-fr': "Dracaufeu Radieux",
		'es-es': "Charizard Radiante",
		'it-it': "Charizard Lucente",
		'pt-br': "Charizard Radiante",
		'de-de': "Strahlendes Glurak"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Radiant Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Fire"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Excited Heart",
			'fr-fr': "Cœur en Émoi",
			'es-es': "Corazón Exaltado",
			'it-it': "Cuorgioioso",
			'pt-br': "Coração Agitado",
			'de-de': "Herzrasen"
		},

		effect: {
			'en-us': "This Pokémon's attacks cost Colorless less for each Prize card your opponent has taken.",
			'fr-fr': "Les attaques de ce Pokémon coûtent Colorless de moins pour chaque carte Récompense que votre adversaire a récupérée.",
			'es-es': "Los ataques de este Pokémon cuestan Colorless menos por cada carta de Premio que haya cogido tu rival.",
			'it-it': "Il costo degli attacchi di questo Pokémon è ridotto di Colorless per ogni carta Premio presa dal tuo avversario.",
			'pt-br': "Os ataques deste Pokémon custam Colorless a menos para cada carta de Prêmio que seu oponente pegou.",
			'de-de': "Die Kosten der Attacken dieses Pokémon verringern sich für jede von deinem Gegner genommene Preiskarte um Colorless."
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Combustion Blast",
			'fr-fr': "Explo-Combustion",
			'es-es': "Estallido Fuego",
			'it-it': "Combustibomba",
			'pt-br': "Explosão de Combustão",
			'de-de': "Brandbombe"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't use Combustion Blast.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Explo-Combustion.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar Estallido Fuego.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Combustibomba.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Explosão de Combustão.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon Brandbombe nicht einsetzen."
		},

		damage: 250
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",


	description: {
		'en-us': "It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.",
	},

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 665245,
				tcgplayer: 274467
			}
		},
	],
}

export default card
