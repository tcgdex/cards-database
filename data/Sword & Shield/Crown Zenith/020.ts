import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Radiant Charizard",
		fr: "Dracaufeu Radieux",
		es: "Charizard Radiante",
		it: "Charizard Lucente",
		pt: "Charizard Radiante",
		de: "Strahlendes Glurak"
	},

	rarity: "Radiant Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Fire"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Excited Heart",
			fr: "Cœur en Émoi",
			es: "Corazón Exaltado",
			it: "Cuorgioioso",
			pt: "Coração Agitado",
			de: "Herzrasen"
		},

		effect: {
			en: "This Pokémon's attacks cost Colorless less for each Prize card your opponent has taken.",
			fr: "Les attaques de ce Pokémon coûtent Colorless de moins pour chaque carte Récompense que votre adversaire a récupérée.",
			es: "Los ataques de este Pokémon cuestan Colorless menos por cada carta de Premio que haya cogido tu rival.",
			it: "Il costo degli attacchi di questo Pokémon è ridotto di Colorless per ogni carta Premio presa dal tuo avversario.",
			pt: "Os ataques deste Pokémon custam Colorless a menos para cada carta de Prêmio que seu oponente pegou.",
			de: "Die Kosten der Attacken dieses Pokémon verringern sich für jede von deinem Gegner genommene Preiskarte um Colorless."
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Combustion Blast",
			fr: "Explo-Combustion",
			es: "Estallido Fuego",
			it: "Combustibomba",
			pt: "Explosão de Combustão",
			de: "Brandbombe"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use Combustion Blast.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Explo-Combustion.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Estallido Fuego.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Combustibomba.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Explosão de Combustão.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Brandbombe nicht einsetzen."
		},

		damage: 250
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	retreat: 3,
	regulationMark: "F",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
