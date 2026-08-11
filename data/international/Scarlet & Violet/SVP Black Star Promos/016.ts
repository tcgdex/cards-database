import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [181],
	set: Set,

	name: {
		'en-us': "Ampharos ex",
		'fr-fr': "Pharamp-ex",
		'es-es': "Ampharos ex",
		'it-it': "Ampharos-ex",
		'pt-br': "Ampharos ex",
		'de-de': "Ampharos-ex"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 330,
	types: ["Lightning"],
	evolveFrom: {
		'en-us': "Flaaffy",
		'fr-fr': "Lainergie",
		'es-es': "Flaaffy",
		'it-it': "Flaaffy",
		'pt-br': "Flaaffy",
		'de-de': "Waaty"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Electro Ball",
			'fr-fr': "Boule Élek",
			'es-es': "Bola Voltio",
			'it-it': "Energisfera",
			'pt-br': "Bola Elétrica",
			'de-de': "Elektroball"
		},

		damage: 60
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'en-us': "Thunderstrike Tail",
			'fr-fr': "Queue Foudroyante",
			'es-es': "Cola Trueno",
			'it-it': "Coda Fulminante",
			'pt-br': "Cauda Trovoada",
			'de-de': "Gewitterschweif"
		},

		effect: {
			'en-us': "You may discard 2 Energy from this Pokémon to have this attack do 100 more damage.",
			'fr-fr': "Vous pouvez défausser 2 Énergies attachées à ce Pokémon pour que cette attaque inflige 100 dégâts supplémentaires.",
			'es-es': "Puedes descartar 2 Energías de este Pokémon para que este ataque haga 100 puntos de daño más.",
			'it-it': "Puoi scartare due Energie da questo Pokémon per infliggere 100 danni in più con questo attacco.",
			'pt-br': "Você pode descartar 2 Energias deste Pokémon para fazer este ataque causar 100 pontos de dano a mais.",
			'de-de': "Du kannst 2 Energien von diesem Pokémon auf deinen Ablagestapel legen, sodass diese Attacke 100 Schadenspunkte mehr zufügt."
		},

		damage: "140+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",
	suffix: "ex",
	illustrator: "PLANETA Tsuji",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 703186,
				tcgplayer: 484397
			},
		},
		{
			type: "holo",
			stamp: ["player-rewards-program"]
		}
	],
}

export default card
