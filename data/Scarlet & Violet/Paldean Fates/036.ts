import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Dedenne",
		fr: "Dedenne",
		es: "Dedenne",
		it: "Dedenne",
		pt: "Dedenne"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Minor Errand-Running",
			fr: "Rendez-Vous Mineur",
			es: "Recado Menor",
			it: "Lavoretto Rapido",
			pt: "Pequena Missão"
		},

		effect: {
			en: "Search your deck for up to 2 Basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 cartes Énergie de base, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 2 cartas de Energía Básica, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a due carte Energia base, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 2 cartas de Energia Básica no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Spin Turn",
			fr: "Tournoyer",
			es: "Giro y Vuelta",
			it: "Girotondo",
			pt: "Volta Giratória"
		},

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			es: "Cambia este Pokémon por uno de tus Pokémon en Banca.",
			it: "Scambia questo Pokémon con uno della tua panchina.",
			pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco."
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card