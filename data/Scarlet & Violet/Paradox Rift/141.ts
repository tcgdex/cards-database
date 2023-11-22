import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	set: Set,

	name: {
		en: "Tatsugiri",
		fr: "Nigirigon",
		es: "Tatsugiri",
		it: "Tatsugiri",
		pt: "Tatsugiri",
		de: "Nigiragi"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Water Gun",
			fr: "Pistolet à O",
			es: "Pistola Agua",
			it: "Pistolacqua",
			pt: "Revólver d'Água",
			de: "Aquaknarre"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Survival Strategy",
			fr: "Stratégie de Survie",
			es: "Estrategia de Supervivencia",
			it: "Strategia di Sopravvivenza",
			pt: "Estratégia de Sobrevivência",
			de: "Überlebensstrategie"
		},

		effect: {
			en: "Search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck. You may switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Cherchez dans votre deck jusqu'à 2 cartes, puis ajoutez-les à votre main. Mélangez ensuite votre deck. Vous pouvez échanger ce Pokémon contre l'un de vos Pokémon de Banc.",
			es: "Busca en tu baraja hasta 2 cartas y ponlas en tu mano. Después, baraja las cartas de tu baraja. Puedes cambiar este Pokémon por uno de tus Pokémon en Banca.",
			it: "Cerca nel tuo mazzo fino a due carte e aggiungile a quelle che hai in mano. Poi rimischia le carte del tuo mazzo. Puoi scambiare questo Pokémon con uno della tua panchina.",
			pt: "Procure por até 2 cartas no seu baralho e coloque-as na sua mão. Em seguida, embaralhe o seu baralho. Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
			de: "Durchsuche dein Deck nach bis zu 2 Karten und nimm sie auf deine Hand. Mische anschließend dein Deck. Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen."
		}
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card