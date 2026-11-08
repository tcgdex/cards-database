import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [351],
	set: Set,

	name: {
		'en-us': "Castform Sunny Form",
		'fr-fr': "Morphéo Forme Solaire",
		'es-es': "Castform Forma Sol",
		'it-it': "Castform Forma Sole",
		'pt-br': "Castform Forma Ensolarada",
		'de-de': "Formeo Sonnenform"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Singe",
			'fr-fr': "Roussi",
			'es-es': "Quemadura",
			'it-it': "Scottata",
			'pt-br': "Chamuscada",
			'de-de': "Versengung"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Burned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
		}
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Sunny Assist",
			'fr-fr': "Assistance Ensoleillée",
			'es-es': "Asistencia Soleada",
			'it-it': "Assistisole",
			'pt-br': "Assistência Ensolarada",
			'de-de': "Sonnige Hilfe"
		},

		effect: {
			'en-us': "Move all Energy from this Pokémon to 1 of your Benched Pokémon.",
			'fr-fr': "Déplacez toutes les Énergies de ce Pokémon vers l'un de vos Pokémon de Banc.",
			'es-es': "Mueve todas las Energías de este Pokémon a uno de tus Pokémon en Banca.",
			'it-it': "Sposta tutte le Energie da questo Pokémon a uno di quelli nella tua panchina.",
			'pt-br': "Mova todas as Energias deste Pokémon para 1 dos seus Pokémon no Banco.",
			'de-de': "Verschiebe alle Energien von diesem Pokémon auf 1 Pokémon auf deiner Bank."
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 794568,
				tcgplayer: 589888
			}
		},
	],

	illustrator: "Narano",

}

export default card
