import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Spectrier",
		'fr-fr': "Spectreval",
		'es-es': "Spectrier",
		'es-mx': "Spectrier",
		'de-de': "Phantoross",
		'it-it': "Spectrier",
		'pt-br': "Spectrier"
	},

	illustrator: "Taiga Kasai",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [897],
	hp: 120,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Spooky Shot",
			'fr-fr': "Tir Effrayant",
			'es-es': "Disparo Embrujado",
			'es-mx': "Disparo Espeluznante",
			'de-de': "Spukschuss",
			'it-it': "Colpomistero",
			'pt-br': "Tiro Assustador"
		},

		damage: 30
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			'en-us': "Phantasmal Barrage",
			'fr-fr': "Offensive Spectrale",
			'es-es': "Bombardeo Fantasmal",
			'es-mx': "Bombardeo Fantasmal",
			'de-de': "Phantomfragmente",
			'it-it': "Schegge Spettrali",
			'pt-br': "Barricada Espectral"
		},

		effect: {
			'en-us': "Discard all Energy from this Pokémon and place 12 damage counters on 1 of your opponent's Pokémon.",
			'fr-fr': "Défaussez toutes les Énergies de ce Pokémon. Placez 12 marqueurs de dégâts sur l'un des Pokémon de votre adversaire.",
			'es-es': "Descarta todas las Energías de este Pokémon y pon 12 contadores de daño en uno de los Pokémon de tu rival.",
			'es-mx': "Descarta todas las Energías de este Pokémon y pon 12 contadores de daño en 1 de los Pokémon de tu rival.",
			'de-de': "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel und lege 12 Schadensmarken auf 1 Pokémon deines Gegners.",
			'it-it': "Scarta tutte le Energie da questo Pokémon e metti 12 segnalini danno su uno dei Pokémon del tuo avversario.",
			'pt-br': "Descarte todas as Energias deste Pokémon e coloque 12 contadores de dano em 1 dos Pokémon do seu oponente."
		}
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		'en-us': "It probes its surroundings with all its senses save one—it doesn’t use its sense of sight. Spectrier’s kicks are said to separate soul from body.",
	},

	variants: [
	{
		type: "holo",
		thirdParty: {
			cardmarket: 869709,
			tcgplayer: 675910
		}
	},
	{
		type: "reverse",
		foil: "duskball",
		thirdParty: {
			cardmarket: 870292,
			tcgplayer: 676930
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870291,
			tcgplayer: 677070
		}
	},
],
}

export default card
