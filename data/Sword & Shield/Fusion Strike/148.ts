import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [645],
	set: Set,

	name: {
		en: "Landorus",
		fr: "Démétéros",
		es: "Landorus",
		it: "Landorus",
		pt: "Landorus",
		de: "Demeteros"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "NC Empire",

	description: {
		en: "From the forces of lightning and wind, it creates energy to give nutrients to the soil and make the land abundant."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Strafe",
			fr: "Bombarder",
			de: "Beharken",
			es: "Pasada de Ataque",
			pt: "Bombardear",
			it: "Mitragliare"
		},

		damage: 20,

		effect: {
			en: "You may switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Vous pouvez échanger ce Pokémon contre l'un de vos Pokémon de Banc.",
			de: "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen.",
			es: "Puedes cambiar este Pokémon por 1 de tus Pokémon en Banca.",
			pt: "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
			it: "Puoi scambiare questo Pokémon con uno della tua panchina."
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Earthen Boom",
			fr: "Fracas Terrestre",
			de: "Irdischer Donner",
			es: "Estruendo Terrestre",
			pt: "Explosão Terrestre",
			it: "Terraboom"
		},

		damage: 120,

		effect: {
			en: "Move all Energy from this Pokémon to your Benched Pokémon in any way you like.",
			fr: "Déplacez toute l'Énergie de ce Pokémon vers vos Pokémon de Banc comme il vous plaît.",
			de: "Verschiebe alle Energien von diesem Pokémon beliebig auf die Pokémon auf deiner Bank.",
			es: "Mueve todas las Energías de este Pokémon a tus Pokémon en Banca de la manera que desees.",
			pt: "Mova todas as Energias deste Pokémon para os seus Pokémon no Banco como desejar.",
			it: "Sposta tutte le Energie da questo Pokémon a quelli nella tua panchina nel modo che preferisci."
		}
	}],

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582776,
		tcgplayer: 253362
	}
}

export default card
