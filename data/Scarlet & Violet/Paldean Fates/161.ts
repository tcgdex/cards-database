import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Dachsbun",
		fr: "Briochien",
		es: "Dachsbun",
		it: "Dachsbun",
		pt: "Dachsbun"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Well-Baked Body",
			fr: "Bien Cuit",
			es: "Cuerpo Horneado",
			it: "Bentostato",
			pt: "Corpo Bem-passado"
		},

		effect: {
			en: "This Pokémon can't be Burned. Prevent all damage done to this Pokémon by attacks from your opponent's Fire Pokémon.",
			fr: "Ce Pokémon ne peut pas être Brûlé. Évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon Fire de votre adversaire.",
			es: "Este Pokémon no puede pasar a estar Quemado. Se evita todo el daño infligido a este Pokémon por ataques de los Pokémon Fire de tu rival.",
			it: "Questo Pokémon non può venire bruciato. Previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon Fire del tuo avversario.",
			pt: "Este Pokémon não pode ser Queimado. Previna todo o dano causado a este Pokémon por ataques dos Pokémon Fire do seu oponente."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Headbutt Bounce",
			fr: "Culbute Surprise",
			es: "Bote Cabezazo",
			it: "Rimbalzo Bottintesta",
			pt: "Cabeçada Ricochete"
		},

		damage: 100
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card