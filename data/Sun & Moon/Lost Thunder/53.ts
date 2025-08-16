import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Alolan Vulpix",
		fr: "Goupix d’Alola",
		es: "Vulpix de Alola",
		it: "Vulpix di Alola",
		pt: "Vulpix de Alola",
		de: "Alola Vulpix"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		37,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Secret Alleyway",
				fr: "Allée Secrète",
				es: "Callejón Secreto",
				it: "Passaggio Segreto",
				pt: "Beco Secreto",
				de: "Geheime Gasse"
			},
			effect: {
				en: "If you have any Fairy Pokémon in play, this Pokémon has no Retreat Cost.",
				fr: "Si vous avez au moins un Pokémon Fairy en jeu, ce Pokémon n’a pas de Coût de Retraite.",
				es: "Si tienes algún Pokémon Fairy en juego, este Pokémon no tiene ningún Coste de Retirada.",
				it: "Se hai dei Pokémon Fairy in gioco, questo Pokémon non ha costo di ritirata.",
				pt: "Se você tiver algum Pokémon Fairy em jogo, este Pokémon não terá custo de Recuo.",
				de: "Wenn du mindestens 1 Fairy-Pokémon im Spiel hast, hat dieses Pokémon keine Rückzugskosten."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gnaw",
				fr: "Ronge",
				es: "Roer",
				it: "Rosicchiamento",
				pt: "Roída",
				de: "Nagen"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 365692,
		tcgplayer: 178860
	}
}

export default card
