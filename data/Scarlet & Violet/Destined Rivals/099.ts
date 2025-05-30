import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Dachsbun",
		fr: "Briochien",
		de: "Backel",
		it: "Dachsbun",
		es: "Dachsbun",
		pt: "Dachsbun"
	},

	illustrator: "You Iribi",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Well-Baked Body",
			fr: "Bien Cuit",
			de: "Knusperkruste",
			it: "Bentostato",
			es: "Cuerpo Horneado",
			pt: "Corpo Bem-passado"
		},

		effect: {
			en: "This Pokémon can't be Burned. Prevent all damage done to this Pokémon by attacks from your opponent's {R} Pokémon.",
			fr: "Ce Pokémon ne peut pas être Brûlé. Évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon {R} de votre adversaire.",
			de: "Dieses Pokémon kann nicht verbrannt werden. Verhindere allen Schaden, der diesem Pokémon durch Attacken von {R}-Pokémon deines Gegners zugefügt wird.",
			it: "Questo Pokémon non può venire bruciato. Previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon {R} del tuo avversario.",
			es: "Este Pokémon no puede pasar a estar Quemado. Se evita todo el daño infligido a este Pokémon por ataques de los Pokémon {R} de tu rival.",
			pt: "Este Pokémon não pode ser Queimado. Previna todo o dano causado a este Pokémon por ataques dos Pokémon {R} do seu oponente."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Headbutt Bounce",
			fr: "Culbute Surprise",
			de: "Abrupter Kopfstoß",
			it: "Rimbalzo Bottintesta",
			es: "Bote Cabezazo",
			pt: "Cabeçada Ricochete"
		},

		damage: 100
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card