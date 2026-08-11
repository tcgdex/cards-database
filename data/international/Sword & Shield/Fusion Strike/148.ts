import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [645],
	set: Set,

	name: {
		'en-us': "Landorus",
		'fr-fr': "Démétéros",
		'es-es': "Landorus",
		'it-it': "Landorus",
		'pt-br': "Landorus",
		'de-de': "Demeteros"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "NC Empire",

	description: {
		'en-us': "From the forces of lightning and wind, it creates energy to give nutrients to the soil and make the land abundant."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Strafe",
			'fr-fr': "Bombarder",
			'de-de': "Beharken",
			'es-es': "Pasada de Ataque",
			'pt-br': "Bombardear",
			'it-it': "Mitragliare"
		},

		damage: 20,

		effect: {
			'en-us': "You may switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Vous pouvez échanger ce Pokémon contre l'un de vos Pokémon de Banc.",
			'de-de': "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen.",
			'es-es': "Puedes cambiar este Pokémon por 1 de tus Pokémon en Banca.",
			'pt-br': "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
			'it-it': "Puoi scambiare questo Pokémon con uno della tua panchina."
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Earthen Boom",
			'fr-fr': "Fracas Terrestre",
			'de-de': "Irdischer Donner",
			'es-es': "Estruendo Terrestre",
			'pt-br': "Explosão Terrestre",
			'it-it': "Terraboom"
		},

		damage: 120,

		effect: {
			'en-us': "Move all Energy from this Pokémon to your Benched Pokémon in any way you like.",
			'fr-fr': "Déplacez toute l'Énergie de ce Pokémon vers vos Pokémon de Banc comme il vous plaît.",
			'de-de': "Verschiebe alle Energien von diesem Pokémon beliebig auf die Pokémon auf deiner Bank.",
			'es-es': "Mueve todas las Energías de este Pokémon a tus Pokémon en Banca de la manera que desees.",
			'pt-br': "Mova todas as Energias deste Pokémon para os seus Pokémon no Banco como desejar.",
			'it-it': "Sposta tutte le Energie da questo Pokémon a quelli nella tua panchina nel modo che preferisci."
		}
	}],


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 582776,
				tcgplayer: 253362
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582776,
				tcgplayer: 253362
			}
		},
	],
}

export default card
