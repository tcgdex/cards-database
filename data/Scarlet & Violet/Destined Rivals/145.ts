import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Blissey",
		fr: "Leuphorie",
		de: "Heiteira",
		it: "Blissey",
		es: "Blissey",
		pt: "Blissey"
	},

	illustrator: "chibi",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Busybody Nurse",
			fr: "Infirmière Zélée",
			de: "Emsige Pflege",
			it: "Infermiera Ficcanaso",
			es: "Enfermera Todoterreno",
			pt: "Cuidado Incessante"
		},

		effect: {
			en: "Once during your turn, you may use this Ability. Your Active Pokémon recovers from all Special Conditions.",
			fr: "Une fois pendant votre tour, vous pouvez utiliser ce talent. Votre Pokémon Actif guérit de tous les États Spéciaux.",
			de: "Einmal während deines Zuges kannst du diese Fähigkeit einsetzen. Dein Aktives Pokémon erholt sich von allen Speziellen Zuständen.",
			it: "Una sola volta durante il tuo turno, puoi usare questa abilità. Il tuo Pokémon attivo guarisce da tutte le condizioni speciali.",
			es: "Una vez durante tu turno, puedes usar esta habilidad. Tu Pokémon Activo se recupera de todas las Condiciones Especiales.",
			pt: "Uma vez durante o seu turno, você poderá usar esta Habilidade. O seu Pokémon Ativo se recupera de todas as Condições Especiais."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Happy Cyclone",
			fr: "Cyclone Heureux",
			de: "Freudiger Wirbel",
			it: "Ciclone Felice",
			es: "Ciclón Feliz",
			pt: "Ciclone Feliz"
		},

		effect: {
			en: "Move all Energy from this Pokémon to 1 of your Benched Pokémon.",
			fr: "Déplacez toutes les Énergies de ce Pokémon vers l'un de vos Pokémon de Banc.",
			de: "Verschiebe alle Energien von diesem Pokémon auf 1 Pokémon auf deiner Bank.",
			it: "Sposta tutte le Energie da questo Pokémon a uno di quelli nella tua panchina.",
			es: "Mueve todas las Energías de este Pokémon a uno de tus Pokémon en Banca.",
			pt: "Mova todas as Energias deste Pokémon para 1 dos seus Pokémon no Banco."
		},

		damage: 150
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card