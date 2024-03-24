import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Delcatty",
		fr: "Delcatty",
		es: "Delcatty",
		it: "Delcatty",
		pt: "Delcatty"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Tail Trickery",
			fr: "Queue Étourdissante",
			es: "Cola Engaño",
			it: "Confondicoda",
			pt: "Truques de Cauda"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso."
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Energy Blender",
			fr: "Mélangeur d'Énergies",
			es: "Batidora Energética",
			it: "Miscelenergia",
			pt: "Mistureba de Energia"
		},

		effect: {
			en: "You may move any amount of Energy from your Pokémon to your other Pokémon in any way you like.",
			fr: "Vous pouvez déplacer autant d'Énergies que vous le voulez de vos Pokémon vers vos autres Pokémon, comme il vous plaît.",
			es: "Puedes mover cualquier cantidad de Energías de tus Pokémon a tus otros Pokémon de la manera que desees.",
			it: "Puoi spostare un numero qualsiasi di Energie dall'uno all'altro dei tuoi Pokémon nel modo che preferisci.",
			pt: "Você pode mover qualquer quantidade de Energia dos seus Pokémon para outros Pokémon seus como desejar."
		},

		damage: 110
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card