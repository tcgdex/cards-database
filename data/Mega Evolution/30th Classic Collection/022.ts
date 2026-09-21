import { Card } from "../../../interfaces"
import Set from "../30th Classic Collection"

const card: Card = {
	set: Set,

	name: {
		en: "Palkia",
		fr: "Palkia",
		de: "Palkia",
		es: "Palkia",
		it: "Palkia",
		pt: "Palkia",
		'es-mx': "Palkia"
	},

	illustrator: "Ryo Ueda",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Hydro Reflect",
			fr: "Hydro-reflet",
			de: "Hydroreflexion",
			es: "Hidrorreflejo",
			it: "Idroriflesso",
			pt: "Reflexo Aquático",
			'es-mx': "Hidrorreflejo"
		},

		effect: {
			en: "You may move all Energy cards attached to Palkia to your Benched Pokémon in any way you like. (Ignore this effect if you don't have any Benched Pokémon.)",
			fr: "Vous pouvez déplacer toutes les cartes Énergies attachées à Palkia sur vos Pokémon de Banc de la façon que vous voulez. (Ignorez cet effet si vous ne possédez pas de Pokémon de Banc.)",
			de: "Du kannst alle an Palkia angelegten Energiekarten entfernen und sie in beliebiger Verteilung an deine Pokémon auf der Bank anlegen. (Dieser Effekt hat keine Auswirkungen, wenn du keine Pokémon auf der Bank hast.)",
			es: "Puedes mover todas las cartas de Energía unidas a Palkia a tus Pokémon en Banca de cualquier modo que quieras. (Ignora este efecto si no tienes Pokémon en Banca.)",
			it: "Puoi spostare tutte le carte Energia assegnate a Palkia sui tuoi Pokémon in Panchina nel modo che preferisci. (Ignora questo effetto se non hai Pokémon in Panchina.)",
			pt: "Você pode mover todos os cards de Energia ligados ao Palkia para os seus Pokémon no Banco como quiser. (Ignore este efeito se você não tiver Pokémon no Banco.)",
			'es-mx': "Puedes mover todas las cartas de Energía unidas a Palkia a tus Pokémon en Banca de cualquier modo que quieras. (Ignora este efecto si no tienes Pokémon en Banca.)"
		},

		damage: 60,
		cost: ["Water", "Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 907950,
				tcgplayer: 716203
			}
		}
	],
}

export default card