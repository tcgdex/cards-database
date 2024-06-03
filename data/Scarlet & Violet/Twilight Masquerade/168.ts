import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	set: Set,

	name: {
		en: "Pinsir",
		fr: "Scarabrute",
		es: "Pinsir",
		it: "Pinsir",
		pt: "Pinsir",
		de: "Pinsir"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Slow Crunch",
			fr: "Mâchouille Lente",
			es: "Trituración Lenta",
			it: "Sgranocchio Lento",
			pt: "Esmagada Lenta",
			de: "Langsamer Knirscher"
		},

		effect: {
			en: "Discard all Energy from this Pokémon. At the end of your opponent's next turn, the Defending Pokémon will be Knocked Out.",
			fr: "Défaussez toutes les Énergies de ce Pokémon. À la fin du prochain tour de votre adversaire, le Pokémon Défenseur sera mis K.O.",
			es: "Descarta todas las Energías de este Pokémon. Al final del próximo turno de tu rival, el Pokémon Defensor quedará Fuera de Combate.",
			it: "Scarta tutte le Energie da questo Pokémon. Alla fine del prossimo turno del tuo avversario, il Pokémon difensore verrà messo KO.",
			pt: "Descarte todas as Energias deste Pokémon. No final do próximo turno do seu oponente, o Pokémon Defensor será Nocauteado.",
			de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel. Am Ende des nächsten Zuges deines Gegners wird das Verteidigende Pokémon kampfunfähig."
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Superpowered Horns",
			fr: "Cornes Surpuissantes",
			es: "Cuernos Superpoderosos",
			it: "Corna Superpotenziate",
			pt: "Chifres Superpoderosos",
			de: "Superstarke Hörner"
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card