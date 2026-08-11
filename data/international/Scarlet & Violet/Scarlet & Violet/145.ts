import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [242],
	set: Set,

	name: {
		'en-us': "Blissey",
		'fr-fr': "Leuphorie",
		'es-es': "Blissey",
		'it-it': "Blissey",
		'pt-br': "Blissey",
		'de-de': "Heiteira"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Chansey",
		'fr-fr': "Leveinard"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Busybody Nurse",
			'fr-fr': "Infirmière Zélée",
			'es-es': "Enfermera Todoterreno",
			'it-it': "Infermiera Ficcanaso",
			'pt-br': "Cuidado Incessante",
			'de-de': "Emsige Pflege"
		},

		effect: {
			'en-us': "Once during your turn, you may use this Ability. Your Active Pokémon recovers from all Special Conditions.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez utiliser ce talent. Votre Pokémon Actif guérit de tous les États Spéciaux.",
			'es-es': "Una vez durante tu turno, puedes usar esta habilidad. Tu Pokémon Activo se recupera de todas las Condiciones Especiales.",
			'it-it': "Una sola volta durante il tuo turno, puoi usare questa abilità. Il tuo Pokémon attivo guarisce da tutte le condizioni speciali.",
			'pt-br': "Uma vez durante o seu turno, você poderá usar esta Habilidade. O seu Pokémon Ativo se recupera de todas as Condições Especiais.",
			'de-de': "Einmal während deines Zuges kannst du diese Fähigkeit einsetzen. Dein Aktives Pokémon erholt sich von allen Speziellen Zuständen."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Happy Cyclone",
			'fr-fr': "Cyclone Heureux",
			'es-es': "Ciclón Feliz",
			'it-it': "Ciclone Felice",
			'pt-br': "Ciclone Feliz",
			'de-de': "Freudiger Wirbel"
		},

		effect: {
			'en-us': "Move all Energy from this Pokémon to 1 of your Benched Pokémon.",
			'fr-fr': "Déplacez toutes les Énergies de ce Pokémon vers l'un de vos Pokémon de Banc.",
			'es-es': "Mueve todas las Energías de este Pokémon a uno de tus Pokémon en Banca.",
			'it-it': "Sposta tutte le Energie da questo Pokémon a uno di quelli nella tua panchina.",
			'pt-br': "Mova todas as Energias deste Pokémon para 1 dos seus Pokémon no Banco.",
			'de-de': "Verschiebe alle Energien von diesem Pokémon auf 1 Pokémon auf deiner Bank."
		},

		damage: 150
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	illustrator: "chibi",

	description: {
		'en-us': "The eggs it lays are filled with happiness. Eating even one bite will bring a smile to anyone.",
	},

	thirdParty: {
        cardmarket: 702441,
        tcgplayer: 488033
    }
}

export default card