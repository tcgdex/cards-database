import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [242],
	set: Set,

	name: {
		en: "Blissey",
		fr: "Leuphorie",
		es: "Blissey",
		it: "Blissey",
		pt: "Blissey",
		de: "Heiteira"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	evolveFrom: {
		en: "Chansey"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Busybody Nurse",
			fr: "Infirmière Zélée",
			es: "Enfermera Todoterreno",
			it: "Infermiera Ficcanaso",
			pt: "Cuidado Incessante",
			de: "Emsige Pflege"
		},

		effect: {
			en: "Once during your turn, you may use this Ability. Your Active Pokémon recovers from all Special Conditions.",
			fr: "Une fois pendant votre tour, vous pouvez utiliser ce talent. Votre Pokémon Actif guérit de tous les États Spéciaux.",
			es: "Una vez durante tu turno, puedes usar esta habilidad. Tu Pokémon Activo se recupera de todas las Condiciones Especiales.",
			it: "Una sola volta durante il tuo turno, puoi usare questa abilità. Il tuo Pokémon attivo guarisce da tutte le condizioni speciali.",
			pt: "Uma vez durante o seu turno, você poderá usar esta Habilidade. O seu Pokémon Ativo se recupera de todas as Condições Especiais.",
			de: "Einmal während deines Zuges kannst du diese Fähigkeit einsetzen. Dein Aktives Pokémon erholt sich von allen Speziellen Zuständen."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Happy Cyclone",
			fr: "Cyclone Heureux",
			es: "Ciclón Feliz",
			it: "Ciclone Felice",
			pt: "Ciclone Feliz",
			de: "Freudiger Wirbel"
		},

		effect: {
			en: "Move all Energy from this Pokémon to 1 of your Benched Pokémon.",
			fr: "Déplacez toutes les Énergies de ce Pokémon vers l'un de vos Pokémon de Banc.",
			es: "Mueve todas las Energías de este Pokémon a uno de tus Pokémon en Banca.",
			it: "Sposta tutte le Energie da questo Pokémon a uno di quelli nella tua panchina.",
			pt: "Mova todas as Energias deste Pokémon para 1 dos seus Pokémon no Banco.",
			de: "Verschiebe alle Energien von diesem Pokémon auf 1 Pokémon auf deiner Bank."
		},

		damage: 150
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "chibi",

	thirdParty: {
        cardmarket: 702441,
        tcgplayer: 488033
    }
}

export default card