import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	set: Set,

	name: {
		en: "Poltchageist",
		fr: "Poltchageist",
		es: "Poltchageist",
		it: "Poltchageist",
		pt: "Poltchageist",
		de: "Mortcha"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 30,
	types: ["Grass"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Storehouse Hideaway",
			fr: "Antre Entrepôt",
			es: "Almacén Oculto",
			it: "Deposito Nascosto",
			pt: "Esconderijo no Armazém",
			de: "Lagerversteck"
		},

		effect: {
			en: "As long as this Pokémon is on your Bench, prevent all damage from and effects of attacks from your opponent's Pokémon done to this Pokémon.",
			fr: "Tant que ce Pokémon est sur votre Banc, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon par les Pokémon de votre adversaire.",
			es: "Mientras este Pokémon esté en tu Banca, se evitan todo el daño y todos los efectos de los ataques de los Pokémon de tu rival infligidos a este Pokémon.",
			it: "Fintanto che questo Pokémon è nella tua panchina, previeni sia i danni che gli effetti degli attacchi dei Pokémon del tuo avversario inflitti a questo Pokémon.",
			pt: "Enquanto este Pokémon estiver no seu Banco, previna todo o dano e os efeitos de ataques dos Pokémon do seu oponente causados a este Pokémon.",
			de: "Solange sich dieses Pokémon auf deiner Bank befindet, verhindere allen Schaden durch und alle Effekte von Attacken von Pokémon deines Gegners, die diesem Pokémon zugefügt werden."
		}
	}],

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Hook",
			fr: "Crochet",
			es: "Garfio",
			it: "Uncino",
			pt: "Gancho",
			de: "Haken"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	}
}

export default card